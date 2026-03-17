"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import styles from "./insightDetail.module.css";
import { deleteInsight } from "../actions";

export default function InsightDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsight();
  }, []);

  const fetchInsight = async () => {
    const { data, error } = await supabase
      .from("insights")
      .select("*")
      .eq("id", id)
      .single();

    if (!error && data) {
      setTitle(data.title);
      setContent(data.content);
    }

    setLoading(false);
  };
  
  const handleUpdate = async () => {
    // validation
    if (!title.trim() || !content.trim()) {
      alert("Please write something in both Title and Content.");
      return;
    }

    const { error } = await supabase
      .from("insights")
      .update({
        title,
        content,
      })
      .eq("id", id);

    if (error) {
      alert("Update failed");
      return;
    }

    alert("Insight updated");
  };

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this insight?",
    );

    if (!confirmDelete) return;

    const result = await deleteInsight(id);

    if (result?.error) {
      alert(result.error);
      return;
    }

    alert("Insight deleted successfully");

    router.push("/admin/insights");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Edit Insight</h1>

        <div className={styles.actions}>
          <button onClick={handleUpdate} className={styles.editBtn}>
            Save
          </button>

          <button onClick={handleDelete} className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles.contentBox}>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Insight title"
        />

        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Insight content"
        />
      </div>
    </div>
  );
}
