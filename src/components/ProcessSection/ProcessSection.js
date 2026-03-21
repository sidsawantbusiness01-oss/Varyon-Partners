import styles from "./ProcessSection.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <h2>How the Work Typically Unfolds</h2>
            <p>
              Not every engagement follows the same format, but most mandates
              move through diagnosis, design, and implementation support.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className={styles.stepsWrapper}>
          <ScrollReveal delay={100}>
            <div className={styles.card}>
              <div className={styles.stepHeader}>
                <span className={styles.badge}>1</span>
                <h3>Diagnose</h3>
              </div>
              <p>
                Clarify bottlenecks, economics, scale constraints, and operating
                gaps.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.card}>
              <div className={styles.stepHeader}>
                <span className={styles.badge}>2</span>
                <h3>Design</h3>
              </div>
              <p>
                Define priorities, workstreams, governance, and the path
                forward.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className={styles.card}>
              <div className={styles.stepHeader}>
                <span className={styles.badge}>3</span>
                <h3>Implement</h3>
              </div>
              <p>
                Support execution, decision-making, and operating discipline
                over time.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Global Delivery */}
        <ScrollReveal delay={200}>
          <div className={styles.globalBox}>
            <h3>Global Delivery</h3>
            <p>
              Varyon supports clients across the US, Europe, India, and the
              Middle East through a flexible delivery model that combines remote
              collaboration with selective onsite support where needed. This
              allows clients to access senior, hands-on support across time
              zones without the cost and rigidity of a full-time operating hire.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
