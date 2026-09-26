import { CODEX_LABS, OASYS, PERSON, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const CODEX_LABS_ID = `${CODEX_LABS.url}/#org`;

type JsonLd = Record<string, unknown>;

// Full Person node, repeated on every page: an @id only resolves within one
// page, so a bare reference would leave most pages with a partial entity.
export function personNode(): JsonLd {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(PERSON.image),
    jobTitle: PERSON.jobTitle,
    description: PERSON.tagline,
    email: `mailto:${PERSON.email}`,
    worksFor: [
      {
        "@type": "Organization",
        name: OASYS.name,
        url: OASYS.url,
      },
      {
        "@type": "Organization",
        "@id": CODEX_LABS_ID,
        name: CODEX_LABS.name,
        url: `${CODEX_LABS.url}/`,
        email: CODEX_LABS.email,
        founder: { "@id": PERSON_ID },
      },
    ],
    knowsAbout: [
      "Full-stack development",
      "Workflow automation",
      "n8n",
      "AI agents",
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Kotlin",
      "Spring Boot",
      "GraphQL",
      "React Native",
      "macOS apps",
    ],
    sameAs: [PERSON.github, PERSON.linkedin],
  };
}

export function websiteNode(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function profilePageNode(canonical: string, name: string): JsonLd {
  return {
    "@type": "ProfilePage",
    "@id": `${canonical}#profilepage`,
    url: canonical,
    name,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export function graph(nodes: JsonLd[]): JsonLd {
  return { "@context": "https://schema.org", "@graph": nodes };
}

// JSON.stringify does not escape "<", so a string containing "</script>"
// would close the tag early. < is equivalent inside JSON.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
