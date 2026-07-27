import { cityLights } from "@/data/company";
import Image from "next/image";

export function BlinkingWorldMap() {
  return (
    <div className="world-map">
      <Image
        src="/images/map/world-night.webp"
        alt="World map illuminated by warm city lights at night"
        fill
        unoptimized
        sizes="(max-width: 900px) 100vw, 58vw"
        className="world-map__image"
      />
      {cityLights.map((light) => (
        <span
          key={light.id}
          aria-hidden="true"
          className="city-light"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: light.size,
            height: light.size,
            animationDelay: `${light.delay}s`,
            animationDuration: `${light.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
