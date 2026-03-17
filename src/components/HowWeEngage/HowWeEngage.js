"use client";

import styles from "./HowWeEngage.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function HowWeEngage() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Heading */}
        <ScrollReveal>
          <h2 className={styles.heading}>How We Engage</h2>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={150}>
          <p className={styles.intro}>
            Three-phase engagement model designed to deliver institutional-grade
            scale discipline. Each phase builds toward production-ready economics
            and capital readiness.
          </p>
        </ScrollReveal>

        {/* Arrow Progression */}
        <ScrollReveal delay={250}>
        <div className={styles.arrowWrapper}>
            <div className={styles.arrow}>1</div>
            <div className={styles.arrow}>2</div>
            <div className={styles.arrow}>3</div>
        </div>
        </ScrollReveal>

        {/* Cards */}
        <div className={styles.grid}>

          <ScrollReveal delay={550}>
            <div className={styles.card}>
              <h3>Diagnose</h3>
              <p className={styles.timeline}>Timeline: 2–6 weeks</p>
              <p>
                Memo + financial model + risk map. Quantified gap analysis
                between pilot promise and production reality. Explicit
                identification of scaling constraints.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className={styles.card}>
              <h3>Build</h3>
              <p className={styles.timeline}>Timeline: 3–6 months</p>
              <p>
                Production-grade operating system + deployment cadence.
                Economics that work at scale, repeatable deployment model,
                serviceability framework.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={850}>
            <div className={styles.card}>
              <h3>Institutionalize</h3>
              <p className={styles.timeline}>Timeline: Embedded</p>
              <p>
                Ongoing scale discipline + capital readiness oversight.
                Continuous improvement loop, investor-grade reporting,
                diligence preparation.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}