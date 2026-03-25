import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://www.varyonpartners.com"),
  title: {
    default: "Varyon Partners | Robotics & Automation Strategy Advisory",
    template: "%s | Varyon Partners",
  },
  description:
    "Varyon Partners is an operator-led strategy and execution advisory firm specialising in robotics, automation, and physical AI. We help founders and investors bridge the gap between R&D and profitable scale.",
  keywords: [
    "robotics strategy consulting",
    "automation advisory",
    "physical AI consulting",
    "robotics commercialization",
    "go-to-market robotics",
    "robotics scale strategy",
    "automation investment diligence",
    "fractional COO robotics",
    "robotics GTM strategy",
    "hardware commercialization",
    "robotics advisory firm",
    "industrial automation consulting",
    "robotics investment thesis",
    "physical AI strategy",
    "robotics operator advisory",
    "automation scale program",
    "Varyon Partners",
    "robotics founders advisory",
    "autonomous systems consulting",
    "deep tech commercialization",
  ],
  authors: [{ name: "Varyon Partners", url: "https://www.varyonpartners.com" }],
  creator: "Varyon Partners",
  publisher: "Varyon Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.varyonpartners.com",
    siteName: "Varyon Partners",
    title: "Varyon Partners | Robotics & Automation Strategy Advisory",
    description:
      "Operator-led strategy and execution advisory for robotics, automation, and physical AI. Bridging the gap between R&D and profitable scale.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Varyon Partners – Robotics & Automation Strategy Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varyon Partners | Robotics & Automation Strategy Advisory",
    description:
      "Operator-led strategy and execution advisory for robotics, automation, and physical AI. Bridging the gap between R&D and profitable scale.",
    images: ["/images/hero.jpeg"],
    creator: "@VaryonPartners",
  },
  alternates: {
    canonical: "https://www.varyonpartners.com",
  },
  category: "Business & Advisory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <meta
        name="google-site-verification"
        content="7GGVnDueciNY62BU2sFHdLmxXpJOC0aDWgO__U-h7Q8"
      />
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
