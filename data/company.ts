export const company = {
  name: "MJ Plastics",
  foundedYear: 1999,
  tagline: "Generating Green Growth",
  yearsOfExcellence: 26,
  phone: "+91 9846434252",
  phoneHref: "tel:+919846434252",
  secondaryPhone: "+91 9447151256",
  secondaryPhoneHref: "tel:+919447151256",
  whatsappHref: "https://wa.me/919846434252",
  email: "ceo@mjplastics.in",
  secondaryEmail: "sales@mjplastics.in",
  website: "www.mjplastics.in",
  websiteHref: "https://www.mjplastics.in",
  location: "Kochi, Kerala, India",
} as const;

export const globalReasons = [
  "26 Years of Industry Expertise",
  "Export-grade Quality & Compliance",
  "Sustainable Manufacturing Processes",
  "Advanced Technology & Innovation",
  "Trusted by Farmers & Agribusinesses Worldwide",
] as const;

export const exportMarkets = [
  "Middle East",
  "Europe",
  "Africa",
  "South America",
  "North America",
  "South East Asia",
  "Australia",
  "New Zealand",
] as const;

export const cityLights = [
  { id: "dubai", left: 56.1, top: 46.5, delay: 0.4, duration: 3.1, size: 6 },
  { id: "london-rotterdam", left: 41.8, top: 28.5, delay: 1.1, duration: 3.5, size: 6 },
  { id: "johannesburg", left: 48.8, top: 84.5, delay: 2, duration: 2.9, size: 6 },
  { id: "sao-paulo", left: 29.3, top: 80.2, delay: 0.7, duration: 3.3, size: 6 },
  { id: "new-york-toronto", left: 22.1, top: 34, delay: 1.8, duration: 3, size: 6 },
  { id: "singapore", left: 69.8, top: 64.2, delay: 2.6, duration: 3.6, size: 6 },
  { id: "sydney", left: 82.3, top: 88.5, delay: 3.2, duration: 3.2, size: 6 },
  { id: "auckland", left: 89.2, top: 92.7, delay: 3.9, duration: 3.7, size: 6 },
] as const;

export const footerLinks = {
  quick: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact Us", href: "#contact" },
  ],
  products: [
    "Grow Bags",
    "Biodegradable Bags",
    "Printed Bags",
    "Specialized Bags",
    "Plant Holders",
  ],
} as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
] as const;
