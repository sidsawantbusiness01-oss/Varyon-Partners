"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          VARYON PARTNERS
        </Link>

        {/* MENU */}
        <nav className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
          {/* LINKS */}
          <div className={styles.menuLinks}>
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
          </div>

          {/* CTA */}
          <Link
            className={styles.cta}
            href="/#contact"
            onClick={() => setMenuOpen(false)}
          >
            Discuss an Engagement
          </Link>
        </nav>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
