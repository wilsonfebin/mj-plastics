import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { company, footerLinks, socialLinks } from "@/data/company";
import { NewsletterForm } from "./NewsletterForm";

const socialGlyphs = {
  Facebook: "f",
  Instagram: "◎",
  LinkedIn: "in",
} as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <a href="#home" className="site-footer__brand">
            <BrandMark inverse />
          </a>
          <div className="footer-column">
            <h2>Quick Links</h2>
            {footerLinks.quick.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h2>Our Products</h2>
            {footerLinks.products.map((item) => (
              <a key={item} href="#products">
                {item}
              </a>
            ))}
          </div>
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Subscribe to get updates on our latest products and innovations.</p>
            <div className="footer-newsletter__row">
              <NewsletterForm />
              <div className="social-links" aria-label="Social media">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <span aria-hidden="true">{socialGlyphs[social.label]}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          © 2026 {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
