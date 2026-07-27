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
  { id: "dubai", left: 61.2, top: 49, delay: 0.4, duration: 4.8, size: 4 },
  { id: "london-rotterdam", left: 47.6, top: 23.5, delay: 1.1, duration: 5.2, size: 4 },
  { id: "johannesburg", left: 54.8, top: 79, delay: 2, duration: 4.6, size: 4 },
  { id: "sao-paulo", left: 35, top: 79, delay: 0.7, duration: 5, size: 4 },
  { id: "new-york-toronto", left: 28.7, top: 37, delay: 1.8, duration: 4.7, size: 4 },
  { id: "singapore", left: 76.5, top: 64, delay: 2.6, duration: 5.3, size: 4 },
  { id: "sydney", left: 89.2, top: 83, delay: 3.2, duration: 4.9, size: 4 },
  { id: "auckland", left: 95.3, top: 88, delay: 3.9, duration: 5.4, size: 4 },
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
