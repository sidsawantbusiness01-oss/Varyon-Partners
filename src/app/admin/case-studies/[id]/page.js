"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { deleteCaseStudy } from "../actions";
import styles from "./caseStudyDetail.module.css";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    const { data, error } = await supabase
      .from("case_studies")
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
    if (!title.trim() || !content.trim()) {
      alert("Please write something in both Title and Content");
      return;
    }

    const { error } = await supabase
      .from("case_studies")
      .update({
        title,
        content,
      })
      .eq("id", id);

    if (error) {
      alert("Update failed");
      return;
    }

    alert("Case Study updated");
  };

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this case study?",
    );

    if (!confirmDelete) return;

    const result = await deleteCaseStudy(id);

    if (result?.error) {
      alert(result.error);
      return;
    }

    alert("Case Study deleted successfully");

    router.push("/admin/case-studies");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Edit Case Study</h1>

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
          placeholder="Case Study title"
        />

        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Case Study content"
        />
      </div>
    </div>
  );
}
