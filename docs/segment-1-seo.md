# Segment 1: Metadata, SEO, and sharing

Canonical site: https://portfolio-2-1-nine.vercel.app

The title, description, name, role, and canonical origin live in `lib/site.ts`.
The root layout supplies canonical, Open Graph, Twitter, and Person JSON-LD
metadata. Social profile URLs come from the existing Contact component.
The sitemap lists only `/` because the sections are anchors, not separate pages.

`app/opengraph-image.tsx` generates a 1200 × 630 PNG using Next.js ImageResponse,
with no external image or font requests. Both social platforms use this image.
`app/icon.svg` is the editable AD logo; `app/favicon.ico` is its raster fallback.

## Local checks

1. Run `npm.cmd run lint` and `npm.cmd run build` (use `npm` outside PowerShell).
2. Run `npm.cmd run dev`, then open http://localhost:3000/.
3. Inspect page source for the title, description, canonical URL, `og:*`,
   `twitter:*`, and the `application/ld+json` script.
4. Open `/opengraph-image`, `/icon.svg`, and `/favicon.ico` to inspect branding.
5. Open `/robots.txt` and `/sitemap.xml`; URLs should use the production origin.

## Follow-ups

- Deploy this branch after approval; local changes do not update Vercel.
- Check the deployed social preview after deployment. Sharing services may cache
  older metadata and images.
- If the domain changes, update `lib/site.ts` and the visible domain in the image.
- Contact submission remains scheduled for Segment 5. The only Contact changes
  here fix JSX escaping and unused variables for lint.

No placeholder facts or branding TODOs were needed.
