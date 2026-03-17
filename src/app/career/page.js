import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";

const jobs = [
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    location: "Remote",
    short:
      "Build internal platforms and systems supporting robotics and automation advisory.",
  },
  {
    slug: "research-analyst",
    title: "Research Analyst (Deep-Tech)",
    location: "Remote",
    short:
      "Research robotics, automation and physical AI companies across global markets.",
  },
  {
    slug: "operations-associate",
    title: "Operations Associate",
    location: "Mumbai / Remote",
    short:
      "Support internal operations, analytics and execution of consulting engagements.",
  },
];

export default function CareerPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.hero}>
          <h1>Careers</h1>
          <p>
            Join us in building the operational architecture behind robotics and
            automation companies.
          </p>
        </div>

        <div className={styles.jobs}>
          {jobs.map((job, index) => (
            <ScrollReveal key={job.slug} delay={index * 0.1}>
              <Link href={`/career/${job.slug}`} className={styles.card}>
                <h3>{job.title}</h3>
                <span>{job.location}</span>
                <p>{job.short}</p>

                <div className={styles.readMore}>View Role →</div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
