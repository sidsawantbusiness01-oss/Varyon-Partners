"use client";

import styles from "./Credibility.module.css";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Credibility() {
  const logos = [
    "/images/Cred_Logos/Cruise.png",
    "/images/Cred_Logos/Vay.png",
    "/images/Cred_Logos/MahindraRise.png",
    "/images/Cred_Logos/infosysBlue.png",
    "/images/Cred_Logos/FarmRobo.png",
    "/images/Cred_Logos/UpshiftCars.png",
    
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <h2 className={styles.heading}>Credibility</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className={styles.logoGrid}>
            {logos.map((logo, index) => {
              const isLarge = logo.includes("FarmRobo") || logo.includes("Vay") || logo.includes("MahindraRise");

              return (
                <div
                  key={index}
                  className={`${styles.logoCard} ${
                    isLarge ? styles.largeLogo : ""
                  }`}
                >
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    fill
                    className={styles.logo}
                  />
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
