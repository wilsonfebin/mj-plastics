import { ContactCard } from "@/components/cards/ContactCard";
import { BlinkingWorldMap } from "@/components/decorative/BlinkingWorldMap";
import { Container } from "@/components/ui/Container";
import { exportMarkets, globalReasons } from "@/data/company";
import { CircleCheck, Leaf } from "lucide-react";

export function GlobalReachSection() {
  return (
    <section id="contact" className="global-section">
      <Container className="global-section__grid">
        <div className="global-copy">
          <h2>
            Global Reach.
            <span>Local Trust.</span>
          </h2>
          <div className="global-copy__leaf">
            <span />
            <Leaf size={15} fill="currentColor" aria-hidden="true" />
          </div>
          <p className="global-copy__eyebrow">Why Choose MJ Plastics?</p>
          <ul>
            {globalReasons.map((reason) => (
              <li key={reason}>
                <CircleCheck size={16} fill="currentColor" aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="global-map-panel">
          <BlinkingWorldMap />
          <div className="export-markets">
            <strong>Export Markets</strong>
            <span>{exportMarkets.join("  |  ")}</span>
          </div>
        </div>
        <ContactCard />
      </Container>
    </section>
  );
}
