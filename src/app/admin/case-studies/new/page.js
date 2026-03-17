"use client";

import { useState } from "react";
import styles from "./newCaseStudy.module.css";

export default function NewCaseStudy() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [titleImage, setTitleImage] = useState(null);
  const [inlineImage, setInlineImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please write both Title and Content");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("caption", caption);

    if (titleImage) formData.append("titleImage", titleImage);
    if (inlineImage) formData.append("inlineImage", inlineImage);

    const res = await fetch("/api/admin/case-studies", {
      method: "POST",
      body: formData,
    });

    let data;

    try {
      data = await res.json();
    } catch {
      alert("Server error");
      return;
    }

    if (!res.ok) {
      alert(data.error || "Failed to add case study");
      return;
    }

    alert("Case study added successfully");

    setTitle("");
    setContent("");
    setCaption("");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Add Case Study</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Case Study Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <a>Title Image</a>
        <input type="file" onChange={(e) => setTitleImage(e.target.files[0])} />

        <textarea
          className={styles.textarea}
          placeholder="Write the full case study content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <a>Inline Image</a>
        <input
          type="file"
          onChange={(e) => setInlineImage(e.target.files[0])}
        />

        <input
          className={styles.input}
          placeholder="Image Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button className={styles.submitBtn}>Add Case Study</button>
      </form>
    </div>
  );
}
