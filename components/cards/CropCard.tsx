import type { CropCardData } from "@/data/crop-cards";
import Image from "next/image";

export function CropCard({ crop }: { crop: CropCardData }) {
  return (
    <article className="crop-card">
      <div className="crop-card__image">
        <Image
          src={crop.image}
          alt={crop.alt}
          fill
          unoptimized
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 16vw"
          className="crop-card__photo"
          style={{ objectPosition: crop.objectPosition ?? "center" }}
        />
      </div>
      <div className="crop-card__content">
        <h3>{crop.title}</h3>
        <p>{crop.description}</p>
      </div>
    </article>
  );
}
