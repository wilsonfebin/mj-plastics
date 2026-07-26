import { Button } from "@/components/ui/Button";
import { company, enquiryHref } from "@/data/company";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export function ContactCard() {
  const details = [
    {
      icon: MapPin,
      label: "India — Kochi, Kerala",
      href: "https://maps.google.com/?q=Kochi%2C+Kerala%2C+India",
    },
    { icon: Phone, label: company.phone, href: company.phoneHref },
    { icon: Globe2, label: company.website, href: company.websiteHref },
    { icon: Mail, label: company.email, href: `mailto:${company.email}` },
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
            <a key={detail.label} href={detail.href}>
              <span aria-hidden="true">
                <Icon size={15} />
              </span>
              {detail.label}
            </a>
          );
        })}
      </address>
      <Button href={enquiryHref} icon="send">
        Enquiry Now
      </Button>
    </aside>
  );
}
