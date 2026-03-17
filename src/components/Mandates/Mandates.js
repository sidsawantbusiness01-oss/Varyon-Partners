"use client";

import styles from "./Mandates.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Mandates() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Section Title */}
        <ScrollReveal>
          <h2 className={styles.title}>Varyon Mandates</h2>
        </ScrollReveal>

        <div className={styles.grid}>

          {/* Investor Column */}
          <ScrollReveal delay={100}>
            <div className={styles.column}>
              <h3>Investor Mandates</h3>

              <ScrollReveal delay={150}>
                <div className={styles.card}>
                  <h4>Investment Thesis Review</h4>
                  <p>
                    Outcome: IC-ready thesis with explicit scaling constraints and
                    underwriting logic. Finance-grade documentation that survives
                    partner and LP scrutiny.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className={styles.card}>
                  <h4>Commercial DD for Robotics & Physical AI</h4>
                  <p>
                    Outcome: Quantified scale risk, payback sensitivity, service
                    burden exposure. Market validation grounded in unit economics
                    and deployment reality.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Founder Column */}
          <ScrollReveal delay={200}>
            <div className={styles.column}>
              <h3>Founder Mandates</h3>

              <ScrollReveal delay={250}>
                <div className={styles.card}>
                  <h4>Commercialization Program (6-Month Mandate)</h4>
                  <p>
                    Outcome: Production-ready economics, operating cadence, GTM
                    motion. Economics that work at 10, 100, and 1,000 installations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className={styles.card}>
                  <h4>India Robotics GCC Setup</h4>
                  <p>
                    Outcome: Operating model, org design, cost structure, governance
                    cadence. Global capability center delivering consistent service
                    quality.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Manufacturer Column */}
          <ScrollReveal delay={300}>
            <div className={styles.column}>
              <h3>Manufacturer Mandates</h3>

              <ScrollReveal delay={350}>
                <div className={styles.card2}>
                  <h4>Automation Roadmapping</h4>
                  <p>
                    Outcome: Production-ready economics, operating cadence, GTM
                    motion. Economics that work at 10, 100, and 1,000 installations.
                  </p>
                  <br />
                  <p>
                    We define sequencing logic across lines, plants, and geographies —
                    aligning capex deployment with throughput targets, integration
                    readiness, workforce transition, and measurable ROI tracking.
                    The roadmap converts automation from isolated pilots into a
                    structured, multi-year operating program.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}