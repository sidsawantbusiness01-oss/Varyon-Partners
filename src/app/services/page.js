export const metadata = {
  title: "Services",
  description:
    "Varyon Partners offers investment thesis & commercial diligence, commercialisation & scale programs, and selective fractional COO engagements for robotics, automation, and physical AI firms.",
  keywords: [
    "robotics consulting services",
    "automation advisory services",
    "investment thesis robotics",
    "commercial diligence automation",
    "commercialization scale program",
    "fractional COO robotics",
    "robotics GTM program",
    "automation go-to-market",
    "physical AI advisory services",
    "robotics scale execution",
    "VC due diligence robotics",
    "PE fund automation advisory",
  ],
  openGraph: {
    title: "Services – Varyon Partners",
    description:
      "Investment thesis & commercial diligence, commercialisation & scale programs, and fractional COO engagements for robotics and automation firms.",
    url: "https://www.varyonpartners.com/services",
  },
  alternates: {
    canonical: "https://www.varyonpartners.com/services",
  },
};

import styles from "./page.module.css";

export default function Services() {
  return (
    <section>
      <div className="container">
        <h1>Services</h1>

        <div className={styles.block}>
          <h2>Investment Thesis & Commercial Diligence</h2>
          <p>For VCs, PE funds, and strategic investors.</p>
        </div>

        <div className={styles.block}>
          <h2>Commercialization & Scale Program</h2>
          <p>Structured GTM, pricing, and execution OS.</p>
        </div>

        <div className={styles.block}>
          <h2>Selective Fractional COO</h2>
          <p>Operator-led scale engagement for robotics and automation firms.</p>
        </div>
      </div>
    </section>
  );
}