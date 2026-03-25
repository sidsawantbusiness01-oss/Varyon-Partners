import Link from "next/link";
import styles from "./Footer.module.css";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Block */}
          <div className={styles.brand}>
            <h3>VARYON PARTNERS</h3>
            <p>
              Operator-led strategy and execution advisory for robotics,
              automation, physical AI, and high-reliability systems.
            </p>

            {/* Social Icons */}
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/company/varyon-partners/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://x.com/Pragmatickidult"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.links}>
            <h4>Firm</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/career">Career</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          {/* Positioning */}
          <div className={styles.meta}>
            <h4>Focus</h4>
            <p>Commercial Diligence</p>
            <p>GTM & Productization</p>
            <p>Operating Systems for Scale</p>
            <p>Robotics & Industrial Systems</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Varyon Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
