"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./CaseStudiesCarousel.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function CaseStudiesCarousel() {
  const visibleCards = 3;

  const [cases, setCases] = useState([]);
  const [index, setIndex] = useState(visibleCards);
  const [transitionOn, setTransitionOn] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const trackRef = useRef(null);
  const cardRef = useRef(null);

  // Fetch Case Studies
  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) {
      const formatted = data.map((item) => ({
        id: item.id,
        slug: item.id,
        title: item.title,
        description: item.content ? item.content.slice(0, 120) + "..." : "",
        image: item.title_image || "/images/dummy-case-study.png",
      }));

      setCases(formatted);
    }
  };

  const clonedStart = cases.length ? cases.slice(-visibleCards) : [];
  const clonedEnd = cases.length ? cases.slice(0, visibleCards) : [];
  const extended = [...clonedStart, ...cases, ...clonedEnd];

  // Measure card width dynamically
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        const gap = window.innerWidth <= 768 ? 0 : 32;

        setCardWidth(width + gap);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [cases]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // Infinite reset
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const handleTransitionEnd = () => {
      if (cases.length && index === cases.length + visibleCards) {
        setTransitionOn(false);
        setIndex(visibleCards);
      }

      if (cases.length && index === 0) {
        setTransitionOn(false);
        setIndex(cases.length);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [index, cases]);

  useEffect(() => {
    if (!transitionOn) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionOn(true);
        });
      });
    }
  }, [transitionOn]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <ScrollReveal>
            <h2>Selected Case Studies</h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Link href="/case-studies">
              <button className={styles.viewAll}>View All</button>
            </Link>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={300}>
          <div className={styles.carouselWrapper}>
            <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
              ←
            </button>

            <div className={styles.viewport}>
              <div
                ref={trackRef}
                className={styles.track}
                style={{
                  transform: `translateX(-${index * cardWidth}px)`,
                  transition: transitionOn
                    ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "none",
                }}
              >
                {extended.map((item, i) => (
                  <div
                    key={i}
                    ref={i === visibleCards ? cardRef : null}
                    className={styles.card}
                  >
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
                          View Full Case Study →
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={next}
            >
              →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
