export const company = {
  name: "MJ Plastics",
  foundedYear: 1999,
  tagline: "Generating Green Growth",
  yearsOfExcellence: 26,
  phone: "+91 98464 34252",
  phoneHref: "tel:+919846434252",
  email: "martin.mjplastics@gmail.com",
  website: "www.mj-plastics.com",
  websiteHref: "https://www.mj-plastics.com",
  location: "Kochi, Kerala, India",
} as const;

const enquirySubject = "Product Enquiry — MJ Plastics Website";
const enquiryBody = `Hello MJ Plastics,
I would like to enquire about your grow bags and agricultural products.
Name:
Company:
Country:
Product requirement:
Quantity:`;

export const enquiryHref = `mailto:${company.email}?subject=${encodeURIComponent(
  enquirySubject,
)}&body=${encodeURIComponent(enquiryBody)}`;

export const globalReasons = [
  "26 Years of Industry Expertise",
  "Export-grade Quality & Compliance",
  "Sustainable Manufacturing Processes",
  "Advanced Technology & Innovation",
  "Trusted by Farmers & Agribusinesses Worldwide",
] as const;

export const exportMarkets = [
  "India",
  "UAE",
  "Europe",
  "Africa",
  "South America",
] as const;

export const cityLights = [
  { id: "india-west", left: 68, top: 54, delay: 0.2, size: 7 },
  { id: "india-south", left: 69, top: 61, delay: 1.4, size: 5 },
  { id: "uae", left: 61, top: 49, delay: 1.1, size: 6 },
  { id: "europe-west", left: 49, top: 32, delay: 0.5, size: 5 },
  { id: "europe-central", left: 53, top: 30, delay: 1.6, size: 7 },
  { id: "europe-north", left: 51, top: 23, delay: 0.8, size: 5 },
  { id: "east-africa", left: 57, top: 61, delay: 0.9, size: 6 },
  { id: "south-africa", left: 54, top: 78, delay: 1.9, size: 5 },
  { id: "south-america-east", left: 33, top: 71, delay: 1.3, size: 6 },
  { id: "south-america-south", left: 31, top: 82, delay: 0.3, size: 5 },
  { id: "southeast-asia", left: 76, top: 61, delay: 1.7, size: 6 },
  { id: "north-america-east", left: 25, top: 39, delay: 1.0, size: 6 },
  { id: "north-america-west", left: 14, top: 40, delay: 1.8, size: 5 },
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
