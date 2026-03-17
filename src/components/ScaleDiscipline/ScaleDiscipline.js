"use client";

import styles from "./ScaleDiscipline.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ScaleDiscipline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Heading */}
        <ScrollReveal>
          <h2 className={styles.heading}>
            Scale is not a pilot problem. It is a discipline problem.
          </h2>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={120}>
          <p className={styles.subheading}>
            Pilots succeed on vision and promise. Production demands economics,
            repeatability, and institutional-grade risk management. The gap
            between pilot and production exposes four structural failures.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className={styles.grid}>

          {[
            {
              title: "ECONOMICS DRIFT",
              text: `Pilot economics diverge from production once service burden
              and integration costs surface. What works in controlled
              environments collapses under real-world variability.`,
            },
            {
              title: "DEPLOYMENT CAPABILITY GAP",
              text: `Internal muscle and integrator variance create volatility in
              multi-site and multi-country rollouts. Without standardization,
              every installation becomes a unique problem.`,
            },
            {
              title: "MONETIZATION ARCHITECTURE",
              text: `Pricing not anchored to TCO/payback; channel incentives
              misaligned post-pilot. Revenue models optimized for pilots fail
              when scale introduces complexity.`,
            },
            {
              title: "IC SURVIVABILITY",
              text: `Narratives fail under diligence when repeatability and risk
              controls aren't finance-grade. Investment committees demand
              institutional rigor, not founder conviction.`,
            },
          ].map((item, index) => (
            <ScrollReveal key={index} delay={150 + index * 120}>
              <div className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}