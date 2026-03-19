"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { ImCross } from "react-icons/im";
import styles from "./careerDetails.module.css";

export default function CareerDetail() {
  const { role } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [roleState, setRoleState] = useState("");
  const [descriptions, setDescriptions] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [loading, setLoading] = useState(true);

  // ------------------------
  // FORMAT ROLE
  // ------------------------

  const formatRole = (slug) => {
    return slug.replace(/-/g, " ").trim();
  };

  // ------------------------
  // FETCH DATA
  // ------------------------

  useEffect(() => {
    const fetchJob = async () => {
      const formattedRole = formatRole(role);

      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .ilike("role", `%${formattedRole}%`);

      if (!error && data && data.length > 0) {
        const jobData = data[0];

        setJob(jobData);
        setRoleState(jobData.role);
        setDescriptions(jobData.descriptions || [""]);
        setRequirements(jobData.requirements || [""]);
      }

      setLoading(false);
    };

    if (role) fetchJob();
  }, [role]);

  // ------------------------
  // HANDLERS
  // ------------------------

  const handleDescriptionChange = (index, value) => {
    const updated = [...descriptions];
    updated[index] = value;
    setDescriptions(updated);
  };

  const addDescription = () => {
    setDescriptions([...descriptions, ""]);
  };

  const removeDescription = (index) => {
    const updated = descriptions.filter((_, i) => i !== index);
    setDescriptions(updated);
  };

  const handleRequirementChange = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const removeRequirement = (index) => {
    const updated = requirements.filter((_, i) => i !== index);
    setRequirements(updated);
  };

  // ------------------------
  // UPDATE
  // ------------------------

  const handleUpdate = async () => {
    if (!job) return;

    const cleanDescriptions = descriptions.filter((d) => d.trim() !== "");
    const cleanRequirements = requirements.filter((r) => r.trim() !== "");

    const { error } = await supabase
      .from("careers")
      .update({
        role: roleState,
        descriptions: cleanDescriptions,
        requirements: cleanRequirements,
      })
      .eq("id", job.id);

    if (error) {
      console.error(error);
      alert("Update failed");
      return;
    }

    alert("Job updated successfully");
  };

  // ------------------------
  // DELETE
  // ------------------------

  const handleDelete = async () => {
    if (!job) return;

    const confirmDelete = confirm("Are you sure you want to delete this job?");

    if (!confirmDelete) return;

    const { error } = await supabase.from("careers").delete().eq("id", job.id);

    if (error) {
      console.error(error);
      alert("Delete failed");
      return;
    }

    alert("Job deleted successfully");
    router.push("/admin/career");
  };

  // ------------------------
  // UI
  // ------------------------

  if (loading) return <p style={{ padding: "40px" }}>Loading...</p>;

  if (!job) return <p style={{ padding: "40px" }}>Job not found</p>;

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>Edit Job</h1>

        <div className={styles.actions}>
          <button onClick={handleUpdate} className={styles.editBtn}>
            Save
          </button>

          <button onClick={handleDelete} className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.contentBox}>
        {/* ROLE */}
        <input
          className={styles.input}
          value={roleState}
          onChange={(e) => setRoleState(e.target.value)}
          placeholder="Job Role"
        />

        {/* DESCRIPTIONS */}
        <h3>Job Description</h3>
        {descriptions.map((desc, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <input
              className={styles.input}
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              placeholder={`Description ${index + 1}`}
            />

            {descriptions.length > 1 && (
              <button
                type="button"
                className={styles.crossButton}
                onClick={() => removeDescription(index)}
              >
                <ImCross />
              </button>
            )}
          </div>
        ))}

        <button className={styles.submitBtn} onClick={addDescription}>+ Add Description</button>

        {/* REQUIREMENTS */}
        <h3 style={{ marginTop: "20px" }}>Requirements</h3>
        {requirements.map((req, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <input
              className={styles.input}
              value={req}
              onChange={(e) => handleRequirementChange(index, e.target.value)}
              placeholder={`Requirement ${index + 1}`}
            />

            {requirements.length > 1 && (
              <button className={styles.crossButton} onClick={() => removeRequirement(index)}><ImCross/></button>
            )}
          </div>
        ))}

        <button className={styles.submitBtn} onClick={addRequirement}>+ Add Requirement</button>
      </div>
    </div>
  );
}
