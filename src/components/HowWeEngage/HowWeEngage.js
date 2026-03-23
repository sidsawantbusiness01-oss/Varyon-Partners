"use client";

import styles from "./HowWeEngage.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function HowWeEngage() {
  return (
    <div className={styles.section}>
      <div className="container">
        {/* Heading */}
        <ScrollReveal>
          <h2 className={styles.heading}>How we engage</h2>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={150}>
          <p className={styles.intro}>
            Varyon works with founders, investors, and manufacturers through
            focused engagement models
          </p>
        </ScrollReveal>

        {/* Arrow Progression */}
        {/* <ScrollReveal delay={250}>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow}>1</div>
            <div className={styles.arrow}>2</div>
            <div className={styles.arrow}>3</div>
          </div>
        </ScrollReveal> */}
        <ScrollReveal delay={150}>
          <h2 className={styles.industrySegment}>
            Industry segments we serve
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className={styles.grid}>
          <ScrollReveal delay={550}>
            <div className={styles.card}>
              <h3>Robotics & Autonomous Machines</h3>
              {/* <p className={styles.timeline}>Timeline: 2–6 weeks</p> */}
              <ul className={styles.list}>
                <li>Industrial robot OEMs</li>
                <li>AMR and AGV</li>
                <li>Drones and UAVs</li>
                <li>Warehouse robotics</li>
                <li>Farm robotics</li>
                <li>Field and inspection</li>
                <li>Surgical and medical</li>
                <li>Humanoid and general-purpose</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className={styles.card}>
              <h3>Physical AI & Autonomy Software</h3>
              {/* <p className={styles.timeline}>Timeline: 3–6 months</p> */}
              <ul className={styles.list}>
                <li>Perception Software </li>
                <li>Autonomy Stack </li>
                <li>Robotics Foundation Model </li>
                <li>Simulation and Sim-to-Real Platforms</li>
                <li>Orchestration and Fleet Intelligence Software</li>
                <li>AI Middleware for Robots and Industrial Systems</li>
                <li>Data Infrastructure for Autonomy</li>
                <li>Planning, Control, and Decisioning Platforms</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={850}>
            <div className={styles.card}>
              <h3>Industrial Automation & Intelligent Equipment</h3>
              {/* <p className={styles.timeline}>Timeline: Embedded</p> */}
              <ul className={styles.list}>
                <li>Factory Automation</li>
                <li>Machine Builders</li>
                <li>Cobot Deployment</li>
                <li>Conveyor and Sortation</li>
                <li>Packaging Automation</li>
                <li>Industrial Controls</li>
                <li>Line Automation</li>
                <li>Intelligent Equipment Makers</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
