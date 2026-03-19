"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./career.module.css";
import supabase from "@/lib/supabase";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("careers")
        .select("id, role")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching jobs:", error);
        return;
      }

      setJobs(data);
    };

    fetchJobs();
  }, []);

  const formatRoleForUrl = (role) => role.toLowerCase().replace(/ /g, "-");

  return (
    <section>
      <div className={styles.header}>
        <h1>Manage Job Vacancies</h1>
        <Link href="/admin/career/new" className={styles.addBtn}>
          + Add Job Vacancy
        </Link>
      </div>
      <div className={styles.cards}>
        {jobs.length === 0 ? (
          <p style={{ color: "gray" }}>No jobs available</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className={styles.card}
              onClick={() =>
                router.push(`/admin/career/${formatRoleForUrl(job.role)}`)
              }
              style={{ cursor: "pointer" }}
            >
              <h3>{job.role}</h3>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
