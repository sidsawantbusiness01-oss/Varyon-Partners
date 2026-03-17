import styles from "./page.module.css";

export default function Services() {
  return (
    <section>
      <div className="container">
        <h1>Services</h1>

        <div className={styles.block}>
          <h2>Investment Thesis & Commercial Diligence</h2>
          <p>For VCs, PE funds, and strategic investors.</p>
        </div>

        <div className={styles.block}>
          <h2>Commercialization & Scale Program</h2>
          <p>Structured GTM, pricing, and execution OS.</p>
        </div>

        <div className={styles.block}>
          <h2>Selective Fractional COO</h2>
          <p>Operator-led scale engagement for robotics and automation firms.</p>
        </div>
      </div>
    </section>
  );
}