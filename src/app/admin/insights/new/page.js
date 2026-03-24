"use client";

import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import styles from "./newInsight.module.css";

export default function NewInsight() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [titleImage, setTitleImage] = useState(null);
  const [inlineImage, setInlineImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // ✅ START

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("caption", caption);

      if (titleImage) formData.append("titleImage", titleImage);
      if (inlineImage) formData.append("inlineImage", inlineImage);

      const res = await fetch("/api/admin/insights", {
        method: "POST",
        body: formData,
      });

      let data;

      try {
        data = await res.json();
      } catch {
        throw new Error("Server error");
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to add insight");
      }

      alert("Insight Added");

      // reset
      setTitle("");
      setContent("");
      setCaption("");
      setTitleImage(null);
      setInlineImage(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false); // ✅ ALWAYS STOP
    }
  };

  return (
    <>
      <Loader loading={loading} text="Uploading insight..." />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Add Insight</h1>

        <form
          className={styles.form}
          style={{ pointerEvents: loading ? "none" : "auto" }}
          onSubmit={handleSubmit}
        >
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

          <button className={styles.submitBtn} disabled={loading}>
            {loading ? "Uploading..." : "Add Insight"}
          </button>
        </form>
      </div>
    </>
  );
}
