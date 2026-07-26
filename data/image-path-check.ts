import { cropCards } from "@/data/crop-cards";
import { productImages } from "@/data/product-images";

if (process.env.NODE_ENV === "development") {
  const allImagePaths = [
    ...productImages.map((item) => item.image),
    ...cropCards.map((item) => item.image),
  ];
  const duplicates = [
    ...new Set(allImagePaths.filter((path, index) => allImagePaths.indexOf(path) !== index)),
  ];

  if (duplicates.length > 0) {
    console.warn("Duplicate website image paths detected:", duplicates);
  }
}
