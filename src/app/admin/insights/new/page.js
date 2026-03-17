"use client";

import { useState } from "react";
import styles from "./newInsight.module.css";

export default function NewInsight() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [titleImage, setTitleImage] = useState(null);
  const [inlineImage, setInlineImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("caption", caption);
    formData.append("titleImage", titleImage);
    formData.append("inlineImage", inlineImage);

    await fetch("/api/admin/insights", {
      method: "POST",
      body: formData,
    });

    alert("Insight Added");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Add Insight</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Insight Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className={styles.label}>Title Image</label>
        <input
          type="file"
          onChange={(e) => setTitleImage(e.target.files[0])}
          required
        />

        <textarea
          className={styles.textarea}
          placeholder="Write the full insight content here..."
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label className={styles.label}>Inline Image</label>
        <input
          type="file"
          onChange={(e) => setInlineImage(e.target.files[0])}
        />

        <input
          className={styles.input}
          placeholder="Image Caption"
          onChange={(e) => setCaption(e.target.value)}
        />

        <button className={styles.submitBtn}>Add Insight</button>
      </form>
    </div>
  );
}
