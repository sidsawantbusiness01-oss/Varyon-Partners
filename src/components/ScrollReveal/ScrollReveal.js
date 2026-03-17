"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.active : ""}`}
      style={{ transitionDelay: `${delay}ms`, height: "100%" }}
    >
      {children}
    </div>
  );
}