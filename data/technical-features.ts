import {
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type TechnicalFeature = {
  title: string;
  label?: string;
  icon: LucideIcon;
};

export const technicalFeatures: TechnicalFeature[] = [
  { title: "UV Stabilized", label: "Longer life", icon: ShieldCheck },
  { title: "Corona Treated", label: "Stronger adhesion", icon: Sparkles },
  { title: "Biodegradable Options", icon: Recycle },
  { title: "Hydroponics & Nursery Suitable", icon: Sprout },
  { title: "All Crop Compatible", icon: Leaf },
];

export const technicalHighlights = [
  "UV-graded for longevity",
  "Corona-treated for superior adhesion and strength",
  "Custom multi-colour printing for branding",
  "Biodegradable options",
  "Export-grade packaging and custom sizes",
  "Excellent drainage and root ventilation",
] as const;
