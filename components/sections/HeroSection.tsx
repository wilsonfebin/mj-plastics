import { CurvedSectionDivider } from "@/components/decorative/CurvedSectionDivider";
import { LeafDivider } from "@/components/decorative/LeafDivider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroFeatures } from "@/data/products";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Container className="hero-section__inner">
        <div className="hero-copy">
          <h1>
            <span>Generating</span>
            <span className="hero-copy__title-line">Green Growth</span>
          </h1>
          <LeafDivider wide />
          <p className="hero-copy__lead">
            26 Years of Excellence in
            <span>Sustainable Agriculture Solutions</span>
          </p>
          <div className="hero-features">
            {heroFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="hero-feature">
                  <span aria-hidden="true">
                    <Icon size={27} strokeWidth={1.65} />
                  </span>
                  <p>
                    {feature.title === "Trusted Worldwide" ? (
                      <>
                        Trusted
                        <span>Worldwide</span>
                      </>
                    ) : (
                      feature.title
                    )}
                  </p>
                </article>
              );
            })}
          </div>
          <Button href="#products">Explore Our Products</Button>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/hero/hero-growbags-kerala.webp"
            alt="MJ Plastics grow bags with strawberries, lettuce, blueberries and vetiver beside a hydroponic plant holder in Kerala"
            fill
            unoptimized
            priority
            sizes="(max-width: 900px) 100vw, 68vw"
            className="hero-visual__image"
          />
        </div>
      </Container>
      <CurvedSectionDivider />
    </section>
  );
}
