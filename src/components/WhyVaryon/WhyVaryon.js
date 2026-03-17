"use client";

import styles from "./WhyVaryon.module.css";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function WhyVaryon() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Section Heading */}
        <ScrollReveal>
          <h2 className={styles.heading}>Why Varyon</h2>
        </ScrollReveal>

        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <ScrollReveal delay={150}>
            <div className={styles.left}>

              <p className={styles.label}>SELECTED CASES</p>
              <div className={styles.divider}></div>

              <h3 className={styles.subHeading}>Operator Credentials</h3>

              <p className={styles.credentials}>
                $9M revenue-accountable portfolio across 40+ dealerships; led national launch including Mahindra Mojo 300cc.  
                $3M venture build inside Mahindra; 75% early retention; Rise Award 2019.  
                $100M+ commercial DD exposure; market validation, synergies, unit economics stress testing.
              </p>

              <ScrollReveal delay={250}>
                <div className={styles.card}>
                  <h4>Field Robotics (Agri)</h4>
                  <p>
                    CFO-grade unit economics model, partner rollout blueprint,
                    investor commercialization pack. Economics validated
                    across 18 dealer locations with consistent payback under 18 months.
                  </p>
                </div>
              {/* </ScrollReveal> */}

              {/* <ScrollReveal delay={350}> */}
                <div className={styles.card}>
                  <h4>Autonomy-Adjacent Mobility</h4>
                  <p>
                    5-year scenario model, GTM architecture, teleops vendor strategy,
                    pilot guardrails. Commercial DD delivered to Series B investor
                    with explicit scale constraints and payback sensitivity analysis.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </ScrollReveal>

          {/* RIGHT IMAGE */}
          <ScrollReveal delay={200}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/sid.png"
                alt="Sid Sawant"
                fill
                className={styles.image}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}