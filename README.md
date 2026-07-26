# MJ Plastics website

A responsive one-page website for MJ Plastics, recreated from the supplied
visual reference and built entirely from local source code and assets.

## Run locally

```bash
npm install
npm run dev
```

The local address is printed in the terminal. No environment variables, API
keys, external services, or backend are required.

Create the static production export with:

```bash
npm run build
```

The complete static website is written to `out/`.

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
- Transparent brand asset: `public/brand/mj-plastics-logo.png`
- City-light positions, sizes and animation delays: `cityLights` in
  `data/company.ts`

To add or remove a city light, edit an item in the `cityLights` array. `left` and
`top` are percentages measured from the world-map image.

## Image replacement

Replace an image with another image of the same filename, or add a new image in
`public/images/` and update its path in the corresponding data or section file.
WebP is preferred for photographs.

## Enquiries

The enquiry form is browser-only. Submissions are stored in the current
browser's local storage under `mj-plastics-enquiries`; no email client, SMTP
service, remote API, or server is involved.
