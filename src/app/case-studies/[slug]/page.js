"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug;

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .eq("id", slug)
      .single();

    if (!error && data) {
      setData(data);
    }
  };

  if (!data) {
    return <div style={{ padding: "120px" }}>Loading case study...</div>;
  }

  // // Split content into 3 sections
  // const words = data.content.split(" ");
  // const part1 = words.slice(0, 50).join(" ");
  // const part2 = words.slice(50, 140).join(" ");
  // const part3 = words.slice(140).join(" ");
  function splitBySentence(text, limits) {
    const words = text.split(" ");
    const splits = [];
    let lastIndex = 0;

    limits.forEach((limit) => {
      let approxIndex = words.slice(0, limit).join(" ").length;

      // search nearest full stop
      let forward = text.indexOf(".", approxIndex);
      let backward = text.lastIndexOf(".", approxIndex);

      let splitPoint;

      if (forward === -1) splitPoint = backward;
      else if (backward === -1) splitPoint = forward;
      else {
        splitPoint =
          approxIndex - backward < forward - approxIndex ? backward : forward;
      }

      splits.push(text.slice(lastIndex, splitPoint + 1).trim());
      lastIndex = splitPoint + 1;
    });

    splits.push(text.slice(lastIndex).trim());

    return splits;
  }

  const [part1, part2, part3, part4, part5, part6] = splitBySentence(
    data.content,
    [50, 140, 240, 380, 520],
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <Link href="/case-studies" className={styles.backLink}>
          ← Back to Case Studies
        </Link>

        {/* SECTION 1 */}

        <div className={styles.layout}>
          <ScrollReveal>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${data.title_image})`,
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.text}>
              <h1>{data.title}</h1>
              <p>{part1}</p>
            </div>
          </ScrollReveal>
        </div>

        {/* SECTION 2 */}

        {data.inline_image && (
          <div className={styles.layoutReverse}>
            <ScrollReveal delay={200}>
              <div className={styles.text}>
                <p>{part2}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <img
                src={data.inline_image}
                alt=""
                className={styles.inlineImage}
              />
              <p className={styles.caption}>{data.image_caption}</p>
            </ScrollReveal>
          </div>
        )}

        {/* SECTION 3 */}

        <div className={styles.fullText}>
          <ScrollReveal>
            <p>{part3}</p>
            <br />
            <p>{part4}</p>
          </ScrollReveal>
        </div>

        <div className={styles.fullText}>
          <ScrollReveal>
            <p>{part5}</p>
            <br />
            <p>{part6}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
