"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";
import supabase from "@/lib/supabase";

export default function JobPage() {
  const params = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // ------------------------
  // FORMAT SLUG → ROLE
  // ------------------------

  const formatRole = (slug) => {
    return slug.replace(/-/g, " ").trim();
  };

  // ------------------------
  // FETCH DATA
  // ------------------------

  useEffect(() => {
    const fetchJob = async () => {
      const formattedRole = formatRole(params.slug);

      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .ilike("role", `%${formattedRole}%`);

      if (!error && data && data.length > 0) {
        setJob(data[0]);
      }

      setLoading(false);
    };

    if (params.slug) fetchJob();
  }, [params.slug]);

  if (loading) {
    return <div style={{ padding: "120px" }}>Loading...</div>;
  }

  if (!job) {
    return <div style={{ padding: "120px" }}>Job not found</div>;
  }


  return (
    <section className={styles.section}>
      <div className="container">
        {/* HERO */}
        <ScrollReveal>
          <div className={styles.hero}>
            <h1>{job.role}</h1>

            {/* META */}
            <div className={styles.meta}>
              <span className={styles.location}>{job.location}</span>
              <span className={styles.jobType}>{job.job_type}</span>
            </div>

            <p>{job.short_desc}</p>

            <button
              className={styles.applyBtn}
              onClick={() => {
                document
                  .getElementById("apply")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply for this role
            </button>
          </div>
        </ScrollReveal>

        {/* DETAILS */}
        <ScrollReveal delay={250}>
          <div className={styles.details}>
            <div>
              <h2>Job Description</h2>
              <ul>
                {job.descriptions?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Requirements</h2>
              <ul>
                {job.requirements?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* APPLY FORM */}
        <ScrollReveal delay={150}>
          <div id="apply" className={styles.formSection}>
            <h2>Apply for {job.role}</h2>

            <form
              className={styles.form}
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.target);
                const file = formData.get("resume");

                if (file.size > 5 * 1024 * 1024) {
                  alert("File too large (max 5MB)");
                  return;
                }

                try {
                  const res = await fetch("/api/apply", {
                    method: "POST",
                    body: formData,
                  });

                  const data = await res.json();

                  if (data.success) {
                    alert("Application submitted successfully.");
                    e.target.reset();
                  } else {
                    alert("Something went wrong.");
                  }
                } catch {
                  alert("Error submitting application.");
                }
              }}
            >
              <input name="name" placeholder="Full Name" required />
              <input name="email" placeholder="Email ID" required />
              <input name="phone" placeholder="Contact Number" required />
              <input
                name="qualification"
                placeholder="Highest Qualification"
                required
              />

              {/* AUTO ROLE */}
              <input name="role" value={job.role} readOnly />

              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
              />

              <button>Submit Application</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
