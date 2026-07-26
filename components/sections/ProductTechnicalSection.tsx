import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import "@/data/image-path-check";
import { productImages } from "@/data/product-images";
import { productRange } from "@/data/products";
import { technicalHighlights } from "@/data/technical-features";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

function Checklist({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="checklist">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CircleCheck size={16} fill="currentColor" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductTechnicalSection() {
  const [mainImage, holderImage, rangeImage] = productImages;

  return (
    <section id="products" className="product-section">
      <Container>
        <SectionHeading>Our Products &amp; Technical Excellence</SectionHeading>
        <div className="product-section__grid">
          <div className="product-section__content">
            <p className="product-section__intro">
              Engineered for performance. Trusted for generations. MJ Plastics delivers innovation,
              durability and sustainability in every product.
            </p>
            <div className="product-lists">
              <Checklist title="1. Our Product Range" items={productRange} />
              <Checklist title="2. Technical Highlights" items={technicalHighlights} />
            </div>
          </div>
          <div className="product-gallery">
            <div className="product-gallery__main">
              <Image
                src={mainImage.image}
                alt={mainImage.alt}
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 34vw"
                className="product-gallery__image"
                style={{ objectPosition: mainImage.objectPosition }}
              />
            </div>
            <div className="product-gallery__stack">
              <div>
                <Image
                  src={holderImage.image}
                  alt={holderImage.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 50vw, 19vw"
                  className="product-gallery__image"
                  style={{ objectPosition: holderImage.objectPosition }}
                />
              </div>
              <div>
                <Image
                  src={rangeImage.image}
                  alt={rangeImage.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 50vw, 19vw"
                  className="product-gallery__image"
                  style={{ objectPosition: rangeImage.objectPosition }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
