"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import supabase from "@/lib/supabase";

export default function CaseStudiesPage() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      const formatted = data.map((item) => ({
        id: item.id,
        slug: item.id, // change to item.slug later if you add slug column
        title: item.title,
        description: item.content ? item.content.slice(0, 120) + "..." : "",
        image: item.title_image || "/images/dummy-case-study.png",
      }));

      setCases(formatted);
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
            <h1>Case Studies</h1>
            <p>
              Selected engagements demonstrating how structured operating
              systems unlock scale in robotics, automation, and physical AI.
            </p>
          </div>
        </ScrollReveal>

        {cases.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            Loading case studies...
          </p>
        ) : (
          <div className={styles.grid}>
            {cases.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 100}>
                <div className={styles.card}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  <div className={styles.content}>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <Link href={`/case-studies/${item.slug}`}>
                      <button className={styles.button}>
                        Read Case Study →
                      </button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
