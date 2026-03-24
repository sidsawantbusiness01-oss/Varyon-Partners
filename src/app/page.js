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
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Credibility from "@/components/Credibility/Credibility";

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
          {/* <h1>VARYON PARTNERS</h1> */}
          <ScrollReveal delay={150}>
            <h1>
              Strategy and Execution for Robotics, Physical AI and Automation
            </h1>
          </ScrollReveal>
          {/* <h3>
            Strategy and Execution for Robotics, Physical AI and Automation
          </h3> */}          {/* <h3>
            Strategic commercialization and operational execution - built for
            founders and investors of the Robotics frontier.
          </h3> */}
          <ScrollReveal delay={500}>
            <p>
              Varyon solves the "Hardware is Hard" problem by bridging the gap
              between R&D and profitable scale. We transform technical IP into
              high-performance, market-leading enterprises
            </p>
          </ScrollReveal>

          {/* <div className={styles.buttons}>
            <Link href="/#contact" className={styles.primary}>
              Discuss an Engagement
            </Link>
          </div> */}
        </div>
      </section>
      <section >
        <div className={styles.container}>
          <Credibility />
        </div>
      </section>
      <div id="services">
        <div className={styles.container}>
          <HowWeEngage />
        </div>
      </div>
      {/* <section>
        <div className={styles.container}>
          <BreakdownSection />
        </div>
      </section> */}
      {/* <section>
        <div className={styles.container}>
          <ScaleDiscipline />
        </div>
      </section> */}
      <section>
        <div className={styles.container}>
          <Mandates />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <WhyVaryon />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <ProcessSection />
        </div>
      </section>
      {/* <section>
        <div className={styles.container}>
          <HowWeEngage />
        </div>
      </section> */}
      {/* <section>
        <div className={styles.container}>
          <ConvictionBlock />
        </div>
      </section> */}
      {/* <section id="services">
        <div className={styles.container}>
          <WhatWeDo />
        </div>
      </section> */}
      {/* <section>
        <div className={styles.container}>
          <CaseStudiesCarousel />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <HighlightedCaseStudy />
        </div>
      </section> */}
      <section>
        <div className={styles.container}>
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
