export type CropCardData = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const cropCards: CropCardData[] = [
  {
    id: "strawberries",
    title: "Strawberries",
    description: "High yield & superior fruit quality",
    image: "/images/crops/strawberry.webp",
    alt: "Strawberry plant growing in a branded MJ Plastics grow bag",
  },
  {
    id: "leafy-greens",
    title: "Leafy Greens",
    description: "Healthy leaves, faster growth",
    image: "/images/crops/leafy-greens.webp",
    alt: "Lush lettuce growing in a branded MJ Plastics grow bag",
  },
  {
    id: "blueberries",
    title: "Blueberries",
    description: "Better root aeration & productivity",
    image: "/images/crops/blueberries.webp",
    alt: "Blueberry bush growing in a branded MJ Plastics grow bag",
  },
  {
    id: "vetiver",
    title: "Vetiver",
    description: "Strong root development for erosion control",
    image: "/images/crops/vetiver.webp",
    alt: "Tall vetiver grass growing in a branded MJ Plastics grow bag",
  },
  {
    id: "hydroponics",
    title: "Hydroponics",
    description: "Uniform plant spacing & easy maintenance",
    image: "/images/crops/hydroponics.webp",
    alt: "White hydroponic plant holder with evenly spaced seedlings",
  },
  {
    id: "hobby-cultivation",
    title: "Hobby Cultivation",
    description: "Perfect for terrace, balcony & home gardens",
    image: "/images/crops/hobby-cultivation.webp",
    alt: "Tomatoes and peppers in MJ Plastics grow bags on a Kerala balcony",
  },
];
