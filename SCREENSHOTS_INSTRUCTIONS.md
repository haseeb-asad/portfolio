# Instructions for Adding Project Screenshots

## Quick Steps

1. **Take/prepare screenshots** for your 4 client projects
2. **Save them** in this exact location: `/home/user/portfolio/public/static/projects/`
3. **Use these exact filenames:**
   - `bookwithkhelo.png`
   - `sehatmand.png`
   - `querify.png`
   - `nativeops.png`

## Screenshot Tips

- **Recommended dimensions:** 1200x800px or similar 3:2 ratio
- **Format:** PNG (best for quality) or JPG
- **What to capture:** Homepage or key feature screen that best represents the project
- **Quality:** Make sure text is readable and images are crisp

## After Adding Screenshots

Once you've added all 4 screenshots, run:

```bash
git add public/static/projects/*.png
git commit -m "Add screenshots for client projects"
git push
```

## Optional: Update App Store URLs

If you have the actual Google Play and App Store URLs for BookWithKhelo, update them in:

**File:** `data/content/clientProjects.ts` (lines 10-11)

Replace the placeholder URLs with real ones:
```typescript
{ label: "Android App", url: "YOUR_ACTUAL_PLAY_STORE_URL" },
{ label: "iOS App", url: "YOUR_ACTUAL_APP_STORE_URL" },
```

---

**Current Status:** ✅ Build successful, ready for screenshots!
