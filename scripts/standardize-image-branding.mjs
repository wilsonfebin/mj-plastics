import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoPath = path.join(root, "public/brand/mj-plastics-logo.png");

const targets = [
  {
    source: "design-reference/branding/pre-standardized/hero/hero-growbags-kerala.webp",
    output: "public/images/hero/hero-growbags-kerala.webp",
    placements: [
      { x: 326, y: 552, width: 238, height: 120 },
      { x: 598, y: 574, width: 246, height: 120 },
      { x: 868, y: 604, width: 232, height: 112 },
      { x: 1112, y: 614, width: 210, height: 106 },
    ],
  },
  {
    source: "design-reference/branding/pre-standardized/products/commercial-growbag.webp",
    output: "public/images/products/commercial-growbag.webp",
    placements: [{ x: 394, y: 516, width: 386, height: 252 }],
  },
  {
    source: "design-reference/branding/cleaned/plastic-holder-product-clean.webp",
    output: "public/images/products/plastic-holder-product.webp",
    placements: [
      {
        x: 450,
        y: 350,
        width: 300,
        height: 85,
        angle: -7,
        direct: true,
      },
    ],
  },
  {
    source:
      "design-reference/branding/pre-standardized/products/custom-printed-growbag-range.webp",
    output: "public/images/products/custom-printed-growbag-range.webp",
    placements: [
      { x: 142, y: 266, width: 224, height: 102 },
      { x: 392, y: 171, width: 232, height: 104 },
      { x: 808, y: 198, width: 246, height: 108 },
      { x: 292, y: 437, width: 176, height: 88 },
      { x: 538, y: 400, width: 238, height: 110 },
      { x: 874, y: 405, width: 170, height: 86 },
    ],
  },
  {
    source:
      "design-reference/branding/pre-standardized/crops/strawberries-growbag.webp",
    output: "public/images/crops/strawberries-growbag.webp",
    placements: [{ x: 348, y: 382, width: 274, height: 128 }],
  },
  {
    source:
      "design-reference/branding/pre-standardized/crops/leafy-greens-growbag.webp",
    output: "public/images/crops/leafy-greens-growbag.webp",
    placements: [{ x: 244, y: 360, width: 304, height: 138 }],
  },
  {
    source:
      "design-reference/branding/pre-standardized/crops/blueberries-growbag.webp",
    output: "public/images/crops/blueberries-growbag.webp",
    placements: [{ x: 590, y: 374, width: 214, height: 106 }],
  },
  {
    source:
      "design-reference/branding/pre-standardized/crops/vetiver-growbag.webp",
    output: "public/images/crops/vetiver-growbag.webp",
    placements: [{ x: 178, y: 390, width: 154, height: 86 }],
  },
  {
    source: "design-reference/branding/cleaned/hydroponics-installed-clean.webp",
    output: "public/images/crops/hydroponics-installed.webp",
    placements: [
      {
        x: 378,
        y: 312,
        width: 190,
        height: 54,
        angle: 6,
        direct: true,
      },
    ],
  },
  {
    source:
      "design-reference/branding/pre-standardized/crops/hobby-cultivation-terrace.webp",
    output: "public/images/crops/hobby-cultivation-terrace.webp",
    placements: [
      { x: 66, y: 374, width: 144, height: 86 },
      { x: 252, y: 414, width: 194, height: 100 },
      { x: 522, y: 396, width: 164, height: 92 },
      { x: 738, y: 386, width: 170, height: 94 },
    ],
  },
];

async function createBadge(imagePath, placement) {
  if (placement.direct) {
    let directLogo = await sharp(logoPath)
      .resize({
        width: placement.width,
        height: placement.height,
        fit: "inside",
        withoutEnlargement: false,
      })
      .png()
      .toBuffer();

    if (placement.angle) {
      directLogo = await sharp(directLogo)
        .rotate(placement.angle, {
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();
    }

    return directLogo;
  }

  const cornerRadius = Math.max(10, Math.round(placement.height * 0.16));
  const inset = Math.max(7, Math.round(placement.height * 0.08));
  const blur = Math.max(4, Math.round(placement.height * 0.045));
  const sampleHeight = Math.max(8, Math.round(placement.height * 0.12));
  const sample = placement.sample ?? {
    x: placement.x,
    y: Math.max(0, placement.y - sampleHeight),
    width: placement.width,
    height: sampleHeight,
  };
  const backdrop = await sharp(imagePath)
    .extract({
      left: sample.x,
      top: sample.y,
      width: sample.width,
      height: sample.height,
    })
    .resize(placement.width, placement.height, {
      fit: "fill",
      kernel: sharp.kernel.cubic,
    })
    .blur(1.4)
    .modulate({ brightness: 1.02, saturation: 0.92 })
    .png()
    .toBuffer();
  const mask = Buffer.from(`
    <svg width="${placement.width}" height="${placement.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="soft">
          <feGaussianBlur stdDeviation="${blur}" />
        </filter>
      </defs>
      <rect
        x="${inset}"
        y="${inset}"
        width="${placement.width - inset * 2}"
        height="${placement.height - inset * 2}"
        rx="${cornerRadius}"
        fill="white"
        filter="url(#soft)"
      />
    </svg>
  `);
  const cleanedBackdrop = await sharp(backdrop)
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const logo = await sharp(logoPath)
    .resize({
      width: placement.width - inset * 2,
      height: placement.height - inset * 2,
      fit: "inside",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();
  const logoMetadata = await sharp(logo).metadata();

  let badge = await sharp({
    create: {
      width: placement.width,
      height: placement.height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: cleanedBackdrop, left: 0, top: 0 },
      {
        input: logo,
        left: Math.round((placement.width - logoMetadata.width) / 2),
        top: Math.round((placement.height - logoMetadata.height) / 2),
      },
    ])
    .png()
    .toBuffer();

  if (placement.angle) {
    badge = await sharp(badge)
      .rotate(placement.angle, {
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
  }

  return badge;
}

for (const target of targets) {
  const source = path.join(root, target.source);
  const output = path.join(root, target.output);
  const composites = [];

  for (const placement of target.placements) {
    const badge = await createBadge(source, placement);
    const badgeMetadata = await sharp(badge).metadata();
    composites.push({
      input: badge,
      left: Math.round(
        placement.x - (badgeMetadata.width - placement.width) / 2,
      ),
      top: Math.round(
        placement.y - (badgeMetadata.height - placement.height) / 2,
      ),
    });
  }

  await sharp(source)
    .composite(composites)
    .webp({ quality: 90, effort: 5 })
    .toFile(output);
}

console.log(`Standardized ${targets.length} branded image assets.`);
