import { CropCard } from "@/components/cards/CropCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { cropCards } from "@/data/crop-cards";

export function CropShowcaseSection() {
  return (
    <section id="about" className="crop-section">
      <Container className="crop-section__shell">
        <SectionHeading centered>Perfect for Every Crop, Every Grower</SectionHeading>
        <div className="crop-grid">
          {cropCards.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </Container>
    </section>
  );
}
