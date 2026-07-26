export type ProductImageData = {
  id: "commercial-growbag" | "plastic-holder-product" | "custom-printed-range";
  image: string;
  alt: string;
  objectPosition: string;
};

export const productImages = [
  {
    id: "commercial-growbag",
    image: "/images/products/commercial-growbag.webp",
    alt: "Large branded MJ Plastics grow bag with a healthy young plant in a commercial nursery",
    objectPosition: "center 50%",
  },
  {
    id: "plastic-holder-product",
    image: "/images/products/plastic-holder-product.webp",
    alt: "Branded rectangular MJ Plastics plant holder shown as a commercial product",
    objectPosition: "center 48%",
  },
  {
    id: "custom-printed-range",
    image: "/images/products/custom-printed-growbag-range.webp",
    alt: "Commercial range of branded MJ Plastics grow bags in different sizes and printed variants",
    objectPosition: "center 50%",
  },
] as const satisfies readonly ProductImageData[];
