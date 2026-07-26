import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mj-plastics.com"),
  title: {
    default: "MJ Plastics | Sustainable Grow Bags and Agricultural Solutions",
    template: "%s | MJ Plastics",
  },
  description:
    "MJ Plastics manufactures LDPE grow bags, biodegradable grow bags, printed agricultural bags, hydroponic plant holders and custom export-grade growing solutions from Kochi, Kerala.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MJ Plastics",
    title: "MJ Plastics | Generating Green Growth",
    description:
      "Sustainable grow bags and agricultural solutions from Kochi, Kerala.",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 904,
        alt: "MJ Plastics — Generating Green Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Plastics | Generating Green Growth",
    description:
      "Sustainable grow bags and agricultural solutions from Kochi, Kerala.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
