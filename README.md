# MJ Plastics website

A responsive, production-ready one-page website for MJ Plastics, recreated from
the supplied visual reference with locally hosted product photography.

## Run locally

```bash
npm install
npm run dev
```

The local address is printed in the terminal.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

Format the project with:

```bash
npm run format
```

## Updating the website

- Main company and contact details: `data/company.ts`
- Navigation links: `data/navigation.ts`
- Product and hero highlights: `data/products.ts`
- Technical features: `data/technical-features.ts`
- Crop cards and image paths: `data/crop-cards.ts`
- Local photography: `public/images/`
- City-light positions, sizes and animation delays: `cityLights` in
  `data/company.ts`

To add or remove a city light, edit an item in the `cityLights` array. `left` and
`top` are percentages measured from the world-map image.

## Image replacement

Replace an image with another image of the same filename, or add a new image in
`public/images/` and update its path in the corresponding data or section file.
WebP is preferred for photographs.

## Deployment

### Vercel

Import the repository into Vercel, keep the detected Next.js settings, and
deploy. No environment variables or backend services are required.

### Static or object storage hosting

The page has no database, API, authentication, or server-side mutations. To
produce a conventional Next.js static export for AWS S3, CloudFront, Netlify,
or another static host, add `output: "export"` to `next.config.ts`, run
`npm run build`, then upload the generated `out/` directory. The image
configuration is already compatible with static hosting.

This workspace also includes the Sites deployment configuration used for the
production preview.
