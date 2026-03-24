"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import styles from "./insightDetail.module.css";
import { deleteInsight } from "../actions";
import Loader from "@/components/Loader/Loader";

export default function InsightDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true); // fetch
  const [saving, setSaving] = useState(false); // update
  const [deleting, setDeleting] = useState(false); // delete

  useEffect(() => {
    fetchInsight();
  }, []);

  const fetchInsight = async () => {
    setLoading(true);

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
    if (!title.trim() || !content.trim()) {
      alert("Please write something in both Title and Content.");
      return;
    }

    setSaving(true);

    try {
      const { error } = await supabase
        .from("insights")
        .update({
          title,
          content,
        })
        .eq("id", id);

      if (error) throw error;

      alert("Insight updated");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this insight?",
    );

    if (!confirmDelete) return;

    setDeleting(true);

    try {
      const result = await deleteInsight(id);

      if (result?.error) throw new Error(result.error);

      alert("Insight deleted successfully");
      router.push("/admin/insights");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <>
      <Loader
        loading={loading || saving || deleting}
        text={
          loading
            ? "Fetching insight..."
            : saving
              ? "Saving changes..."
              : "Deleting insight..."
        }
      />
      <div
        className={styles.wrapper}
        style={{
          pointerEvents: saving || deleting ? "none" : "auto",
          opacity: saving || deleting ? 0.7 : 1,
        }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>Edit Insight</h1>

          <div className={styles.actions}>
            <button
              onClick={handleUpdate}
              className={styles.editBtn}
              disabled={saving || deleting}
            >
              {saving ? "Saving..." : "Save"}
            </button>

            <button
              onClick={handleDelete}
              className={styles.deleteBtn}
              disabled={saving || deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
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
    </>
  );
}
