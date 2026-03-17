"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Inquiry submitted successfully.");
        setForm({
          name: "",
          company: "",
          role: "",
          email: "",
          budget: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      alert("Error sending message.");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* LEFT SIDE */}
          <ScrollReveal>
            <div className={styles.left}>
              <h2>Discuss an Engagement</h2>
              <p>
                Varyon Partners works with founders, investors, and industrial
                operators navigating complex automation, robotics, and physical
                AI deployments. We engage where execution risk is high and
                capital intensity demands structured operating systems.
              </p>

              <br />

              <p>
                Provide relevant context regarding your stage, deployment
                objectives, and economic model. Our team will review and respond
                if there is strategic alignment.
              </p>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE FORM */}
          <ScrollReveal delay={200}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company *"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <input
                  type="text"
                  name="role"
                  placeholder="Role / Title"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <select name="budget" onChange={handleChange}>
                  <option value="">Indicative Engagement Range</option>
                  <option>Under ₹5L</option>
                  <option>₹5L – ₹15L</option>
                  <option>₹15L – ₹50L</option>
                  <option>Above ₹50L</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Engagement Context *"
                rows={5}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit Inquiry</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
