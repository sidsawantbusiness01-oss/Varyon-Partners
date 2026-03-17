"use client";

import { useEffect, useState } from "react";
import styles from "./HighlightedInsights.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function HighlightedInsights() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    const { data, error } = await supabase
      .from("insights")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) {
      setInsights(data);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2>Highlighted Insights</h2>
            <p>
              Strategic thinking at the intersection of robotics, automation,
              and physical AI.
            </p>
          </div>

          <Link href="/insights">
            <button className={styles.viewAll}>View All Insights</button>
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {insights.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <Link href={`/insights/${item.id}`} className={styles.card}>
                <div className={styles.topBar}></div>

                <h3>{item.title}</h3>

                <p>{item.content?.slice(0, 120)}...</p>

                <span className={styles.readMore}>Read Insight →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
