"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);

  const generateSlug = (role) => role.toLowerCase().replace(/ /g, "-");

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching jobs:", error);
        return;
      }

      // Transform DB data → UI format
      const formattedJobs = data.map((job) => ({
        slug: generateSlug(job.role),
        title: job.role,
        location: job.location || "Not specified",
        jobType: job.job_type || "Remote",
        short: job.short_desc || job.descriptions?.[0] || "",
      }));

      setJobs(formattedJobs);
    };

    fetchJobs();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.hero}>
            <h1>Careers</h1>
            <p>
              Join us in building the operational architecture behind robotics
              and automation companies.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className={styles.jobs}>
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/career/${job.slug}`}
                className={styles.card}
              >
                <h3>{job.title}</h3>
                {/* TAGS */}
                <div className={styles.meta}>
                  <span className={styles.location}>{job.location}</span>
                  <span className={styles.jobType}>{job.jobType}</span>
                </div>
                <p className={styles.short}>{job.short}</p>
                <div className={styles.readMore}>View Role →</div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
