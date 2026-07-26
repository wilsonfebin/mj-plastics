import {
  Globe2,
  Handshake,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type HeroFeature = {
  title: string;
  icon: LucideIcon;
};

export const heroFeatures: HeroFeature[] = [
  { title: "Sustainable Solutions", icon: Leaf },
  { title: "Premium Quality", icon: ShieldCheck },
  { title: "Export Excellence", icon: Globe2 },
  { title: "Trusted Worldwide", icon: Handshake },
];

export const productRange = [
  "LDPE Grow Bags — all sizes",
  "Biodegradable Grow Bags for eco-friendly farming",
  "Multi-colour Printed Bags for branding and export",
  "Specialized Bags for Vetiver and Medicinal Plants",
  "Plastic Plant Holders with Holes for hydroponic and nursery use",
] as const;
