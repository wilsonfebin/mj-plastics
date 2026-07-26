import Image from "next/image";

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
    >
      <Image
        className="brand-mark__image"
        src="/brand/mj-plastics-logo.png"
        alt="MJ Plastics — Generating Green Growth — Since 1999"
        width={1388}
        height={394}
        priority={compact}
      />
    </span>
  );
}
