"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import supabase from "@/lib/supabase";

export default function InsightsPage() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    const { data, error } = await supabase
      .from("insights")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setInsights(data);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <ScrollReveal>
          <div className={styles.header}>
            <h1>Insights</h1>
            <p>
              Strategic thinking at the intersection of robotics, automation,
              and physical AI.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {insights.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <div className={styles.card}>
                {/* IMAGE */}

                {item.title_image && (
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${item.title_image})`,
                    }}
                  />
                )}

                {/* CONTENT */}

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <p>{item.content?.slice(0, 160)}...</p>

                  <Link href={`/insights/${item.id}`}>
                    <button className={styles.button}>Read Insight →</button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
