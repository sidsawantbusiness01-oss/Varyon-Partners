"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "@/lib/supabase";
import styles from "./case-study.module.css";
import Loader from "@/components/Loader/Loader";

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    setLoading(true); // ✅ important

    const { data, error } = await supabase
      .from("case_studies")
      .select("id, title")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setCaseStudies(data);
    }

    setLoading(false); // ✅ stop
  };

  return (
    <>
      <Loader loading={loading} text="Fetching case studies..." />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Manage Case Studies</h1>

          <Link href="/admin/case-studies/new" className={styles.addBtn}>
            + Add Case Study
          </Link>
        </div>

        <div className={styles.list}>
          {!loading && caseStudies.length === 0 && (
            <p>No case studies added yet</p>
          )}

          {!loading &&
            caseStudies.map((item) => (
              <Link
                key={item.id}
                href={`/admin/case-studies/${item.id}`}
                className={styles.card}
              >
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
