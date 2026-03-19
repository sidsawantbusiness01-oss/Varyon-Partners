import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Varyon Partners",
  description:
    "Operator-led strategy and execution advisory for robotics, automation, and physical AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
