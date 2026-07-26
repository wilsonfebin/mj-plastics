import { company } from "@/data/company";

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span
      className={`brand-mark ${compact ? "brand-mark--compact" : ""} ${
        inverse ? "brand-mark--inverse" : ""
      }`}
      aria-label={`${company.name}, ${company.tagline}, since ${company.foundedYear}`}
    >
      <span className="brand-mark__since">Since {company.foundedYear}</span>
      <span className="brand-mark__name">{company.name}</span>
      <span className="brand-mark__tagline">{company.tagline}</span>
    </span>
  );
}
