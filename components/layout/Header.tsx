import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#home" className="site-header__brand">
          <BrandMark compact />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={index === 0 ? "desktop-nav__active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href={company.whatsappHref}
          icon="whatsapp"
          className="site-header__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquiry Now
        </Button>
        <MobileNavigation />
      </Container>
    </header>
  );
}
