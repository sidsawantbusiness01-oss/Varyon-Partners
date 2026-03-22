"use client";

import styles from "./WhyVaryon.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
              <p className={styles.label}>SELECTED CASE STUDIES</p>
              <div className={styles.divider}></div>
              {/* 
              <h3 className={styles.subHeading}>Operator Credentials</h3>

              <p className={styles.credentials}>
                $9M revenue-accountable portfolio across 40+ dealerships; led
                national launch including Mahindra Mojo 300cc. $3M venture build
                inside Mahindra; 75% early retention; Rise Award 2019. $100M+
                commercial DD exposure; market validation, synergies, unit
                economics stress testing.
              </p> */}

              {/* 🔥 NEW GRID */}
              <div className={styles.caseColumns}>
                {/* LEFT COLUMN */}
                <div className={styles.column}>
                  <p className={styles.columnTitle}>VARYON: CURRENT VELOCITY</p>

                  <div className={styles.card}>
                    <h4>Upshift | Autonomous GTM & Tele-driving Pilot</h4>
                    <ul>
                      <li>
                        <strong>The Metric:</strong> Supporting a $5M Seed round
                        through 5-year financial projections and OEM / VC
                        pitching.
                      </li>
                      <li>
                        <strong>The Complexity:</strong> Structuring the product
                        roadmap for 3 mobile/web applications and negotiating
                        high-stakes tele-driving vendor contracts for Silicon
                        Valley pilots.
                      </li>
                      <li>
                        <strong>The Proof:</strong> Transitioning frontier
                        "tele-op" technology into a validated, commercialized
                        delivery service in San Francisco.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.card}>
                    <h4>FarmRobo | Institutional Scaling & Fundraising</h4>
                    <ul>
                      <li>
                        <strong>The Metric:</strong> Architecting the corporate
                        structure and branding required to move a "hard tech"
                        robotics startup toward institutional investment.
                      </li>
                      <li>
                        <strong>The Complexity:</strong> Guiding the transition
                        from R&D-heavy engineering to a scalable commercial
                        asset.
                      </li>
                      <li>
                        <strong>The Proof:</strong> Providing the fractional
                        leadership backbone to ensure "Hardware is Hard" doesn't
                        become "Hardware is Fatal" during the Series A
                        transition.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className={styles.column}>
                  <p className={styles.columnTitle}>
                    LEGACY: INSTITUTIONAL VALIDATION
                  </p>

                  <div className={styles.card}>
                    <h4>Cruise & Vay | Autonomous Fleet Deployment</h4>
                    <ul>
                      <li>
                        <strong>The Metric:</strong> Improved asset availability
                        by 40%+ for a fleet of 50+ semi-autonomous vehicles.
                      </li>
                      <li>
                        <strong>The Complexity:</strong> Scaled global
                        operations across Las Vegas, Dallas, Austin, and
                        Phoenix, accelerating "Go-Live" by 3 months.
                      </li>
                      <li>
                        <strong>The Proof:</strong> Led a global team of 24 to
                        deploy OSHA-compliant control centers and digital
                        mission-control tools for real-world AV scale.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.card}>
                    <h4>
                      Mahindra Group | EV Founding & Commercial Turnaround
                    </h4>
                    <ul>
                      <li>
                        <strong>The Metric:</strong> Delivered $15M revenue
                        uplift and 300 bps EBITDA gain through organizational
                        design and ops transformation.
                      </li>
                      <li>
                        <strong>The Complexity:</strong>Founded India's first
                        EV-only rideshare (Glyd), securing $3M in funding and
                        achieving 75% user retention.
                      </li>
                      <li>
                        <strong>The Proof:</strong> Managed a $9M regional sales
                        P&L and 140+ staff, executing a 38-point turnaround that
                        drove 19% YoY growth.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE */}
          <ScrollReveal delay={200}>
            <div className={styles.founderCard}>
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/sid.png"
                  alt="Sid Sawant"
                  fill
                  className={styles.image}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.founderContent}>
                <h4 className={styles.name}>Siddharth Sawant</h4>

                <p className={styles.role}>Managing Partner, Varyon</p>

                <div className={styles.links}>
                  <a href="https://linkedin.com" target="_blank">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <span> • </span>
                  <a href="mailto:sid@varyon.com">
                    <MdEmail /> Email
                  </a>
                </div>

                <p className={styles.bio}>
                  "Varyon was built on the belief that strong technology alone
                  will not build tomorrow’s robotics and physical AI businesses.
                  Commercialization, operations, and financial discipline matter
                  just as much. Varyon exists to help founders build that
                  discipline early, before complexity compounds and value leaks
                  out."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
