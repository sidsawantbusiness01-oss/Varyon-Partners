"use client";

import styles from "./BreakdownSection.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function BreakdownSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Header Animation */}
        <ScrollReveal>
          <div className={styles.header}>
            <h2>Where Robotics and Automation Programs Break</h2>
            <p>
              A consistent pattern across investors, founders, and manufacturers
              is that: Technology scales faster than operational systems. Capital
              assumes linear growth. Execution reality is nonlinear.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>

          {/* Investors */}
          <ScrollReveal delay={100}>
            <div className={styles.column}>
              <h3>Investors</h3>
              <p className={styles.subhead}>
                Capital Deployed ≠ Capital Returned
              </p>

              <div className={styles.block}>
                <h4>Industry Reality</h4>
                <ul>
                  <li>~75% of venture-backed companies fail to return invested capital</li>
                  <li>Hardware startups require 2–3× more capital and longer time-to-scale</li>
                  <li>Only ~1 in 10 VC investments generate outsized returns</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h4>What It Feels Like at the Board Level</h4>
                <ul>
                  <li>Series A/B funds engineering, not repeatable deployments</li>
                  <li>Margins degrade during scale due to field complexity</li>
                  <li>No operator translating technical progress into IRR discipline</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Founders */}
          <ScrollReveal delay={200}>
            <div className={styles.column}>
              <h3>Technical Founders</h3>
              <p className={styles.subhead}>
                Strong Product ≠ Commercial Success
              </p>

              <div className={styles.block}>
                <h4>Industry Reality</h4>
                <ul>
                  <li>60% of robotics pilots never convert into scaled deployments</li>
                  <li>Hardware takes 2× longer to reach product-market fit</li>
                  <li>Gross margins erode during early deployments</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h4>What It Feels Like Inside the Company</h4>
                <ul>
                  <li>Revenue delayed due to integration complexity</li>
                  <li>No clear link between deployment metrics and capital allocation</li>
                  <li>Fundraising narrative stronger than operating model</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Manufacturers */}
          <ScrollReveal delay={300}>
            <div className={styles.column}>
              <h3>Manufacturers</h3>
              <p className={styles.subhead}>
                Automation Installed ≠ Productivity Realized
              </p>

              <div className={styles.block}>
                <h4>Industry Reality</h4>
                <ul>
                  <li>30–50% of automation transformations fail ROI targets</li>
                  <li>Change management failure cited in 70% of underperformance</li>
                  <li>Payback periods exceed projections</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h4>What It Feels Like on the Shop Floor</h4>
                <ul>
                  <li>Vendor-driven installs without system redesign</li>
                  <li>Resistance from middle management</li>
                  <li>No post-deployment cadence to track ROI</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}