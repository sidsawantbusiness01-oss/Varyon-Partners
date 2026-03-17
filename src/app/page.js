"use client";

import styles from "./page.module.css";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import BreakdownSection from "@/components/BreakdownSection/BreakdownSection";
import ScaleDiscipline from "@/components/ScaleDiscipline/ScaleDiscipline";
import Mandates from "@/components/Mandates/Mandates";
import WhyVaryon from "@/components/WhyVaryon/WhyVaryon";
import HowWeEngage from "@/components/HowWeEngage/HowWeEngage";
import ConvictionBlock from "@/components/ConvictionBlock/ConvictionBlock";
import ContactForm from "@/components/ContactForm/ContactForm";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel/CaseStudiesCarousel";
import HighlightedCaseStudy from "@/components/HighlightedInsights/HighlightedInsights";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        {/* Optimized Background Image */}
        <Image
          src="/images/hero.jpeg"
          alt="Varyon Hero Background"
          fill
          priority
          quality={75}
          className={styles.heroImage}
          style={{ objectFit: "cover" }}
        />

        {/* Dark Overlay */}
        <div className={styles.overlay} />

        <div className="container">
          <h1>VARYON PARTNERS</h1>
          <h3>
            Strategy and Execution for Robotics, Physical AI and Automation
          </h3>
          <p>
            Varyon works with founders and investors to commercialize products,
            improve execution, and build foundations to scale profitably.
          </p>

          <div className={styles.buttons}>
            <Link href="/contact" className={styles.primary}>
              Discuss an Engagement
            </Link>
          </div>
        </div>
      </section>
      {/* <section>
        <div className={styles.container2}>
          <BreakdownSection />
        </div>
      </section> */}
      {/* <section>
        <div className={styles.container2}>
          <ScaleDiscipline />
        </div>
      </section> */}
      <section id="services" >
        <div className={styles.container2}>
          <Mandates />
        </div>
      </section>
      <section>
        <div className={styles.container2}>
          <WhyVaryon />
        </div>
      </section>
      <section>
        <div className={styles.container2}>
          <HowWeEngage />
        </div>
      </section>
      {/* <section>
        <div className={styles.container2}>
          <ConvictionBlock />
        </div>
      </section> */}
      {/* <section id="services">
        <div className={styles.container2}>
          <WhatWeDo />
        </div>
      </section> */}
      {/* <section>
        <div className={styles.container2}>
          <CaseStudiesCarousel />
        </div>
      </section>
      <section>
        <div className={styles.container2}>
          <HighlightedCaseStudy />
        </div>
      </section> */}
      <section id="contact">
        <div className={styles.container2}>
          <ContactForm />
        </div>
      </section>

      {/* Capabilities
      <section>
        <div className="container">
          <h2>Core Capabilities</h2>

          <div className={styles.grid}>
            <div>
              <h3>Commercial Diligence</h3>
              <p>
                Investment-grade analysis for robotics and industrial systems.
              </p>
            </div>

            <div>
              <h3>GTM & Productization</h3>
              <p>
                Structured go-to-market architecture and unit economics design.
              </p>
            </div>

            <div>
              <h3>Operating Systems for Scale</h3>
              <p>
                Execution frameworks that move pilot programs to profitable
                deployment.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className={styles.ctaSection}>
        <div className="container">
          <h2>Engage with Varyon</h2>
          <p>Structured advisory for serious operators and investors.</p>

          <Link href="/contact" className={styles.primary}>
            Contact Us
          </Link>
        </div>
      </section> */}
    </>
  );
}
