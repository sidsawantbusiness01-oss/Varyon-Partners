"use client";

import styles from "./Mandates.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Mandates() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Title */}
        <ScrollReveal>
          <h2 className={styles.title}>Typical Engagement Formats</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Investor Column */}
          <ScrollReveal delay={100}>
            <div className={styles.column}>
              {/* <h3>Investor Mandates</h3> */}
              {/* <h3>Diagnostic Mandate</h3> */}

              {/* <ScrollReveal delay={150}>
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
              </ScrollReveal> */}
              <ScrollReveal delay={150}>
                <div className={styles.card2}>
                  <h4>Diagnostic Mandate</h4>
                  <p>
                    For companies or investors that need an independent view on
                    commercialization risk, operating readiness, scale
                    constraints, or deployment economics.
                  </p>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Scope:</h5>
                  <ul className={styles.list}>
                    <li>Commercialization and Scale Readiness</li>
                    <li>Deployment and Service Model Risk</li>
                    <li>Operating Model and Org Gaps</li>
                    <li>Unit Economics and Capital Discipline</li>
                    <li>Diligence and Investment Support</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Output:</h5>
                  <ul className={styles.list}>
                    <li>Diagnostic MEMO</li>
                    <li>Scale-Risk Map</li>
                    <li>Economics and Operating Review</li>
                    <li>Prioritized Recommendations</li>
                    <li>Implementaion Roadmap</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Timeline:</h5>
                  <p>3-8 Weeks, Depending on Scope and Access.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Founder Column */}
          <ScrollReveal delay={200}>
            <div className={styles.column}>
              {/* <h3>Founder Mandates</h3> */}
              {/* <h3>Implementation Mandate</h3> */}

              {/* <ScrollReveal delay={250}>
                <div className={styles.card}>
                  <h4>Commercialization Program (6-Month Mandate)</h4>
                  <p>
                    Outcome: Production-ready economics, operating cadence, GTM
                    motion. Economics that work at 10, 100, and 1,000
                    installations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className={styles.card}>
                  <h4>India Robotics GCC Setup</h4>
                  <p>
                    Outcome: Operating model, org design, cost structure,
                    governance cadence. Global capability center delivering
                    consistent service quality.
                  </p>
                </div>
              </ScrollReveal> */}
              <ScrollReveal delay={350}>
                <div className={styles.card2}>
                  <h4>Implementation Mandate</h4>
                  <p>
                    For founders and leadership teams that need hands-on support
                    to strengthen commercialization, execution discipline,
                    operating cadence, and scale readiness.
                  </p>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Scope:</h5>
                  <ul className={styles.list}>
                    <li>Commercialization Program Design</li>
                    <li>Go-To-Market Planning and Support</li>
                    <li>Product and Roadmap Alignment</li>
                    <li>Operating Cadence and Governance</li>
                    <li>Scale Economics and Capital Planning</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Output:</h5>
                  <ul className={styles.list}>
                    <li>Operating Plan and Workstreams</li>
                    <li>Governance Rhythm and Review Structure</li>
                    <li>Prioritized Execution Roadmap</li>
                    <li>Commercialization and Scale Systems</li>
                    <li>Decision-Support Materials for Management</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Timeline:</h5>
                  <p>
                    2-6 Months, Depending on Mandate Complexity and Level of
                    Involvement.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Manufacturer Column */}
          <ScrollReveal delay={300}>
            <div className={styles.column}>
              {/* <h3>Manufacturer Mandates</h3> */}

              <ScrollReveal delay={350}>
                <div className={styles.card2}>
                  <h4>Ongoing Strategic Advisory</h4>
                  <p>
                    For founders, investors, and senior operating teams that
                    need recurring decision support across commercialization,
                    scale, and operating questions.
                  </p>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Scope:</h5>
                  <ul className={styles.list}>
                    <li>Founder and CXO Advisory</li>
                    <li>Scale Priorities and Trade-offs</li>
                    <li>Operating and Capital Allocation Questions</li>
                    <li>Portfolio Company Support</li>
                    <li>Market-entry or Capability Build Decisions</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Output:</h5>
                  <ul className={styles.list}>
                    <li>Recuring Advisory Sessions</li>
                    <li>Issue-Based Reviews</li>
                    <li>Working Notes and Decision Support</li>
                    <li>Periodic Operating and Scale Reviews</li>
                  </ul>
                  <br />
                  <h5 className={styles.pointsTitle}>Typical Timeline:</h5>
                  <p>Retainer-based, with Cadence Defined by Mandate.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
