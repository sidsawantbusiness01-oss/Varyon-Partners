"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "@/lib/supabase";
import styles from "./insights.module.css";

export default function InsightsPage() {

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    const { data, error } = await supabase
      .from("insights")
      .select("id, title")
      .order("created_at", { ascending: false });

    if (!error) {
      setInsights(data);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Manage Insights</h1>

        <Link href="/admin/insights/new" className={styles.addBtn}>
          + Add Insight
        </Link>
      </div>

      <div className={styles.list}>
        {insights.map((item) => (
          <Link
            key={item.id}
            href={`/admin/insights/${item.id}`}
            className={styles.card}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}