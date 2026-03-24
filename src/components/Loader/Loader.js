"use client";

import styles from "./Loader.module.css";

export default function Loader({ loading = false, text = "Processing..." }) {
  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loaderBox}>
        {/* Animated Bars */}
        <div className={styles.bars}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Text */}
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
