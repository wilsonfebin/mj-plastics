export type CropCardData = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const cropCards: CropCardData[] = [
  {
    id: "strawberries",
    title: "Strawberries",
    description: "High yield & superior fruit quality",
    image: "/images/crops/strawberries-growbag.webp",
    alt: "Ripe strawberries growing in a branded white MJ Plastics grow bag",
    objectPosition: "center 48%",
  },
  {
    id: "leafy-greens",
    title: "Leafy Greens",
    description: "Healthy leaves, faster growth",
    image: "/images/crops/leafy-greens-growbag.webp",
    alt: "Leafy greens in a branded MJ Plastics grow bag on a greenhouse irrigation bench",
    objectPosition: "center 52%",
  },
  {
    id: "blueberries",
    title: "Blueberries",
    description: "Better root aeration & productivity",
    image: "/images/crops/blueberries-growbag.webp",
    alt: "Blueberry clusters growing from a branded MJ Plastics grow bag in a shaded nursery",
    objectPosition: "center 48%",
  },
  {
    id: "vetiver",
    title: "Vetiver",
    description: "Strong root development for erosion control",
    image: "/images/crops/vetiver-growbag.webp",
    alt: "Tall vetiver grass in a branded MJ Plastics grow bag on an erosion-control hillside",
    objectPosition: "center 50%",
  },
  {
    id: "hydroponics",
    title: "Hydroponics",
    description: "Uniform plant spacing & easy maintenance",
    image: "/images/crops/hydroponics-installed.webp",
    alt: "Installed MJ Plastics hydroponic holder with seedlings, water channel and irrigation tubing",
    objectPosition: "center 52%",
  },
  {
    id: "hobby-cultivation",
    title: "Hobby Cultivation",
    description: "Perfect for terrace, balcony & home gardens",
    image: "/images/crops/hobby-cultivation-terrace.webp",
    alt: "Vegetables growing in multiple branded MJ Plastics grow bags on a Kerala terrace",
    objectPosition: "center 50%",
  },
];
