import type { TechnicalFeature } from "@/data/technical-features";

export function FeatureIconCard({ feature }: { feature: TechnicalFeature }) {
  const Icon = feature.icon;

  return (
    <article className="technical-card">
      <span className="technical-card__icon" aria-hidden="true">
        <Icon size={27} strokeWidth={1.7} />
      </span>
      <strong>{feature.title}</strong>
      {feature.label ? <small>{feature.label}</small> : null}
    </article>
  );
}
