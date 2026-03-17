"use client";

import styles from "./WhatWeDo.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <ScrollReveal>
            <h2>What We Do</h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p>
              We partner with operators and investors to structure, de-risk,
              and scale capital-intensive technologies.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          <ScrollReveal delay={250}>
            <div className={styles.card}>
              <h3>Strategy Architecture</h3>
              <p>
                Market positioning, competitive intelligence, and structured
                expansion roadmaps for deep-tech businesses.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.card}>
              <h3>Execution Systems</h3>
              <p>
                Operating models, pricing strategy, and scalable deployment
                frameworks that convert pilots into repeatable revenue.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <div className={styles.card}>
              <h3>Capital Advisory</h3>
              <p>
                Investment readiness, diligence preparation, and structured
                growth narratives for institutional capital.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className={styles.card}>
              <h3>Industrial GTM</h3>
              <p>
                Enterprise sales architecture, channel strategy, and long-cycle
                deal structuring for robotics and automation markets.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}