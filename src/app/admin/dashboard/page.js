"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import supabase from "@/lib/supabase";
import Loader from "@/components/Loader/Loader";

export default function Dashboard() {
  const [insightsCount, setInsightsCount] = useState(0);
  const [caseStudiesCount, setCaseStudiesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      setLoading(true);

      try {
        const { count: insights, error: insightsError } = await supabase
          .from("insights")
          .select("id", { count: "exact", head: true });

        const { count: cases, error: casesError } = await supabase
          .from("case_studies")
          .select("id", { count: "exact", head: true });

        if (insightsError || casesError) {
          console.error(insightsError || casesError);
          return;
        }

        setInsightsCount(insights || 0);
        setCaseStudiesCount(cases || 0);
      } catch (err) {
        console.error("Error fetching counts:", err);
      } finally {
        setLoading(false); // ✅ always stop
      }
    };

    fetchCounts();
  }, []);
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <h3>Total Insights</h3>
        <p>{loading ? "—" : insightsCount}</p>
      </div>

      <div className={styles.card}>
        <h3>Total Case Studies</h3>
        <p>{loading ? "—" : caseStudiesCount}</p>
      </div>
    </div>
  );
}
