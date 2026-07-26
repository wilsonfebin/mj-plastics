import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export function ContactCard() {
  const details = [
    {
      icon: MapPin,
      label: "India — Kochi, Kerala",
      href: "https://share.google/Pri95BNK3tLbTnPOF",
      newWindow: true,
    },
    {
      icon: Phone,
      label: `${company.phone}, ${company.secondaryPhone}`,
    },
    { icon: Globe2, label: company.website, href: company.websiteHref },
    {
      icon: Mail,
      label: `${company.email} · ${company.secondaryEmail}`,
    },
  ];

  return (
    <aside className="contact-card" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Us</h2>
      <div className="contact-card__divider" aria-hidden="true">
        <span />
      </div>
      <address>
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                target={"newWindow" in detail && detail.newWindow ? "_blank" : undefined}
                rel={"newWindow" in detail && detail.newWindow ? "noopener noreferrer" : undefined}
              >
                <span aria-hidden="true">
                  <Icon size={15} />
                </span>
                {detail.label}
              </a>
            ) : (
              <span className="contact-card__detail" key={detail.label}>
                <span aria-hidden="true">
                  <Icon size={15} />
                </span>
                {detail.label}
              </span>
            )
          );
        })}
      </address>
      <Button
        href={company.whatsappHref}
        icon="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enquiry Now
      </Button>
    </aside>
  );
}
