export const metadata = {
  title: "About",
  description:
    "Learn about Varyon Partners – our mission, mandate, and operator-led approach to strategy and execution for robotics, automation, and physical AI companies.",
  keywords: [
    "about Varyon Partners",
    "robotics advisory firm background",
    "automation strategy team",
    "physical AI experts",
    "operator-led advisory",
    "robotics execution experts",
    "why Varyon Partners",
    "robotics consulting firm",
  ],
  openGraph: {
    title: "About Varyon Partners",
    description:
      "Learn about Varyon Partners – our mission, mandate, and operator-led approach to strategy and execution for robotics, automation, and physical AI companies.",
    url: "https://www.varyonpartners.com/about",
  },
  alternates: {
    canonical: "https://www.varyonpartners.com/about",
  },
};

import Link from "next/link";
import WhyVaryon from "@/components/WhyVaryon/WhyVaryon";
import VaryonMandate from "@/components/Mandates/Mandates";
import HowWeEngage from "@/components/HowWeEngage/HowWeEngage";
import styles from "./page.module.css";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        {/* <div className={styles.buttons}>
          <Link href="/contact" className={styles.primary}>
            Discuss an Engagement
          </Link>
        </div> */}
        <section>
          <div className={styles.container2}>
            <WhyVaryon />
          </div>
        </section>
        <section>
          <div className={styles.container2}>
            <VaryonMandate />
          </div>
        </section>
        <section>
          <div className={styles.container2}>
            <HowWeEngage />
          </div>
        </section>
        {/* <section>
            <div className={styles.container2}>
              <WhatWeDo />
            </div>
          </section> */}
      </div>
    </section>
  );
}
