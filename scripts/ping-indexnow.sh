#!/usr/bin/env bash
set -euo pipefail

# Submits every URL in the live sitemap to IndexNow (Bing, Yandex and others)
# so changed pages get recrawled without waiting for discovery. Bing's index
# also backs ChatGPT search.
#
# Dry run by default: it prints what it would submit and posts nothing.
# Run it after a production deploy, from a local checkout:
#   scripts/ping-indexnow.sh            # dry run
#   scripts/ping-indexnow.sh --execute  # verify the live key, then submit
#
# The key is a short readable string on purpose. IndexNow publishes the key
# at a public URL by design, so entropy buys nothing, and a random hex literal
# would trip secret scanners.

usage() {
  cat <<'EOF'
Usage: ping-indexnow.sh [--dry-run | --execute]

Reads the key from public/haseebasad-indexnow-2026.txt, fetches
https://www.haseebasad.com/sitemap.xml (override the origin with
PING_INDEXNOW_ORIGIN) and lists every <loc> it would submit to
https://api.indexnow.org/indexnow.

--dry-run (default) prints host, key, keyLocation and URLs, then exits.
--execute also checks the key is served live at keyLocation, then submits.
EOF
}

mode="${1:---dry-run}"
case "$mode" in
  --dry-run|--execute) ;;
  -h|--help) usage; exit 0 ;;
  *) usage >&2; exit 64 ;;
esac

repo_root="$(CDPATH='' cd -- "$(dirname -- "$0")/.." && pwd)"
key_file="$repo_root/public/haseebasad-indexnow-2026.txt"
origin="${PING_INDEXNOW_ORIGIN:-https://www.haseebasad.com}"
command -v curl >/dev/null || { echo "curl is required" >&2; exit 69; }
command -v node >/dev/null || { echo "node is required" >&2; exit 69; }
[[ -f "$key_file" ]] || { echo "Missing key file: $key_file" >&2; exit 65; }

key_name="$(basename "$key_file" .txt)"
key="$(tr -d '[:space:]' < "$key_file")"
[[ "$key" =~ ^[A-Za-z0-9-]{8,128}$ ]] || { echo "Key must be 8 to 128 characters of [A-Za-z0-9-]: $key" >&2; exit 65; }
[[ "$key_name" == "$key" ]] || { echo "Key file name ($key_name.txt) must match its contents ($key)" >&2; exit 65; }
key_location="$origin/$key_name.txt"

tmp_dir="$(mktemp -d "${TMPDIR:-/tmp}/ping-indexnow.XXXXXX")"
trap 'rm -rf -- "$tmp_dir"' EXIT INT TERM

sitemap_status="$(curl -sS --max-time 30 -o "$tmp_dir/sitemap.xml" -w '%{http_code}' "$origin/sitemap.xml")"
[[ "$sitemap_status" == "200" ]] || { echo "Fetching $origin/sitemap.xml returned HTTP $sitemap_status" >&2; exit 70; }
urls=()
while IFS= read -r line; do urls+=("$line"); done < <(grep -o '<loc>[^<]*</loc>' "$tmp_dir/sitemap.xml" | sed -E 's#</?loc>##g')
[[ "${#urls[@]}" -gt 0 ]] || { echo "No <loc> entries in $origin/sitemap.xml" >&2; exit 70; }

host="$(printf '%s' "$origin" | sed -E 's#^[A-Za-z]+://##; s#/.*$##')"

if [[ "$mode" == "--dry-run" ]]; then
  echo "IndexNow dry run (nothing submitted, live key not checked)."
  echo "  host: $host"
  echo "  key: $key"
  echo "  keyLocation: $key_location"
  echo "  urls (${#urls[@]}):"
  printf '    %s\n' "${urls[@]}"
  echo "To submit, rerun with --execute."
  exit 0
fi

# A submission whose key does not resolve is silently discarded by the API,
# so refuse to submit until the key is live.
live_status="$(curl -sS --max-time 20 -o "$tmp_dir/key.txt" -w '%{http_code}' "$key_location")"
live_key="$(tr -d '[:space:]' < "$tmp_dir/key.txt")"
if [[ "$live_status" != "200" || "$live_key" != "$key" ]]; then
  echo "Live key at $key_location does not match (HTTP $live_status); refusing to submit" >&2
  exit 70
fi

node -e '
const [host, key, keyLocation, ...urls] = process.argv.slice(1);
process.stdout.write(JSON.stringify({ host, key, keyLocation, urlList: urls }));
' "$host" "$key" "$key_location" "${urls[@]}" > "$tmp_dir/payload.json"

submit_status="$(curl -sS --max-time 30 -o "$tmp_dir/response.txt" -w '%{http_code}' \
  --request POST --header 'Content-Type: application/json; charset=utf-8' \
  --data @"$tmp_dir/payload.json" https://api.indexnow.org/indexnow)"

case "$submit_status" in
  200|202) echo "IndexNow accepted (HTTP $submit_status): ${#urls[@]} URL(s) for $host" ;;
  *) echo "IndexNow failed (HTTP $submit_status): $(cat "$tmp_dir/response.txt")" >&2; exit 70 ;;
esac
