import { FeatureIconCard } from "@/components/cards/FeatureIconCard";
import { Container } from "@/components/ui/Container";
import { technicalFeatures } from "@/data/technical-features";

export function SustainabilityStrip() {
  return (
    <section id="sustainability" className="sustainability-strip">
      <Container className="sustainability-strip__inner">
        <div className="sustainability-strip__intro">
          <h2>
            Sustainable Grow Bags
            <span>Engineered for Better Tomorrow</span>
          </h2>
          <p>
            Our eco-friendly grow bags help you achieve healthier crops, higher yield,
            and a cleaner planet.
          </p>
        </div>
        <div className="technical-features">
          {technicalFeatures.map((feature) => (
            <FeatureIconCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
