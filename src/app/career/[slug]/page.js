"use client";

import { useParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";

const jobs = {
  "full-stack-developer": {
    title: "Full Stack Developer",
    location: "Remote",

    description:
      "We are looking for a Full Stack Developer to build internal platforms, analytics dashboards and automation tools used across consulting engagements.",

    responsibilities: [
      "Develop internal web applications",
      "Design scalable APIs and backend systems",
      "Collaborate with research and operations teams",
      "Maintain platform reliability and performance",
    ],

    requirements: [
      "Strong experience with JavaScript / React / Node.js",
      "Experience building full stack applications",
      "Understanding of APIs and database design",
      "Ability to work independently",
    ],
  },

  "research-analyst": {
    title: "Research Analyst (Deep-Tech)",
    location: "Remote",

    description:
      "Conduct market and technical research across robotics, automation and physical AI companies.",

    responsibilities: [
      "Analyze robotics startups and technologies",
      "Produce research reports",
      "Support consulting engagements",
      "Track emerging industry trends",
    ],

    requirements: [
      "Strong analytical skills",
      "Interest in robotics or deep-tech",
      "Research or consulting background preferred",
    ],
  },
};

export default function JobPage() {
  const params = useParams();
  const job = jobs[params.slug];

  if (!job) {
    return <div style={{ padding: "120px" }}>Job not found</div>;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.hero}>
            <h1>{job.title}</h1>
            <span>{job.location}</span>

            <p>{job.description}</p>

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
        <ScrollReveal delay={250}>
          <div className={styles.details}>
            <div>
              <h2>Responsibilities</h2>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Requirements</h2>
              <ul>
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div id="apply" className={styles.formSection}>
            <h2>Apply for {job.title}</h2>

            <form className={styles.form}>
              <input placeholder="Full Name" required />

              <input placeholder="Email ID" required />

              <input placeholder="Contact Number" required />

              <input placeholder="Highest Qualification" required />

              <input value={job.title} readOnly />

              <input type="file" required />

              <button>Submit Application</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
