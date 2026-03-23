"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          VARYON PARTNERS
        </Link>

        <nav className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>
            What we do
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/case-studies" onClick={() => setMenuOpen(false)}>
            Case Studies
          </Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)}>
            Insights
          </Link>
          {/* <Link href="/career" onClick={() => setMenuOpen(false)}>
            Career
          </Link> */}
          <Link
            className={styles.cta}
            href="/#contact"
            onClick={() => setMenuOpen(false)}
          >
            Discuss an Engagement
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`} />
        </button>
      </div>
    </header>
  );
}
