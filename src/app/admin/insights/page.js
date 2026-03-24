"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "@/lib/supabase";
import Loader from "@/components/Loader/Loader";
import styles from "./insights.module.css";

export default function InsightsPage() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    setLoading(true); // ✅ start

    const { data, error } = await supabase
      .from("insights")
      .select("id, title")
      .order("created_at", { ascending: false });

    if (!error) {
      setInsights(data);
    }

    setLoading(false); // ✅ stop
  };

  return (
    <>
      <Loader loading={loading} text="Fetching insights..." />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Manage Insights</h1>

          <Link href="/admin/insights/new" className={styles.addBtn}>
            + Add Insight
          </Link>
        </div>

        <div className={styles.list}>
          {!loading && insights.length === 0 && (
            <p style={{ color: "gray" }}>No insights available</p>
          )}

          {!loading &&
            insights.map((item) => (
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
    </>
  );
}
