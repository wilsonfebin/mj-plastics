import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CropShowcaseSection } from "@/components/sections/CropShowcaseSection";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductTechnicalSection } from "@/components/sections/ProductTechnicalSection";
import { SustainabilityStrip } from "@/components/sections/SustainabilityStrip";
import { company } from "@/data/company";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.name,
    url: company.websiteHref,
    email: [company.email, company.secondaryEmail],
    telephone: [company.phone, company.secondaryPhone],
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    makesOffer: [
      "LDPE Grow Bags",
      "Biodegradable Grow Bags",
      "Printed Agricultural Bags",
      "Hydroponic Plant Holders",
    ],
  };

  return (
    <>
      <Header />
      <main className="page-shell">
        <HeroSection />
        <SustainabilityStrip />
        <ProductTechnicalSection />
        <CropShowcaseSection />
        <GlobalReachSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
