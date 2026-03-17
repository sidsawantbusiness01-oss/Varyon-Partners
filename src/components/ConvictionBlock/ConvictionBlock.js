"use client";

import styles from "./ConvictionBlock.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ConvictionBlock() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>

          {/* Primary Statement */}
          <ScrollReveal>
            <h2 className={styles.primary}>
              Robotics and Physical AI do not
              <br />
              fail because of technology.
            </h2>
          </ScrollReveal>

          {/* Secondary */}
          <ScrollReveal delay={150}>
            <h2 className={styles.secondary}>
              They fail when scale lacks
            </h2>
          </ScrollReveal>

          {/* Emphasis Word */}
          <ScrollReveal delay={300}>
            <h2 className={styles.tertiary}>discipline.</h2>
          </ScrollReveal>

          {/* Highlight Statement */}
          <ScrollReveal delay={450}>
            <div className={styles.highlightWrapper}>
              <p className={styles.highlight}>
                Varyon institutionalizes that discipline
              </p>
              <div className={styles.underline}></div>
            </div>
          </ScrollReveal>

          {/* Footnotes (subtle fade, longer delay) */}
          <ScrollReveal delay={650}>
            <div className={styles.footnotesWrapper}>
              <div className={styles.footnotes}>
                <p>1: Harvard Business School / Shikhar Ghosh study</p>
                <p>2: BCG and Pitchbook Benchmarks</p>
                <p>3: Cambridge Associates VC Benchmarks</p>
                <p>4: Capgemini Research Institute – Intelligent Automation studies</p>
                <p>5: Bessemer Venture Partners / State of the Cloud vs. Deeptech benchmarks</p>
                <p>6: McKinsey Advanced Industries benchmarks</p>
                <p>7: McKinsey Global Survey on Digital Transformations</p>
                <p>8: McKinsey / Prosci change research</p>
                <p>9: BCG industrial productivity reports</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}