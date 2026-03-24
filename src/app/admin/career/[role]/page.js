"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { ImCross } from "react-icons/im";
import Loader from "@/components/Loader/Loader";
import styles from "./careerDetails.module.css";

export default function CareerDetail() {
  const { role } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [roleState, setRoleState] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("Remote");

  const [descriptions, setDescriptions] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  // const [loading, setLoading] = useState(true);

  const [loading, setLoading] = useState(true); // fetch
  const [saving, setSaving] = useState(false); // update
  const [deleting, setDeleting] = useState(false); // delete

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
        setShortDesc(jobData.short_desc || "");
        setLocation(jobData.location || "");
        setJobType(jobData.job_type || "Remote");

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
    setDescriptions(descriptions.filter((_, i) => i !== index));
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
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  // ------------------------
  // UPDATE
  // ------------------------
  const handleUpdate = async () => {
    if (!job) return;

    if (roleState.length > 80) {
      alert("Role must be less than 80 characters");
      return;
    }

    setSaving(true); // ✅

    try {
      const cleanDescriptions = descriptions.filter((d) => d.trim() !== "");
      const cleanRequirements = requirements.filter((r) => r.trim() !== "");

      const { error } = await supabase
        .from("careers")
        .update({
          role: roleState.trim(),
          short_desc: shortDesc.trim(),
          location: location.trim(),
          job_type: jobType,
          descriptions: cleanDescriptions,
          requirements: cleanRequirements,
        })
        .eq("id", job.id);

      if (error) throw error;

      alert("Job updated successfully");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false); // ✅
    }
  };
  // ------------------------
  // DELETE
  // ------------------------
  const handleDelete = async () => {
    if (!job) return;

    const confirmDelete = confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    setDeleting(true); // ✅

    try {
      const { error } = await supabase
        .from("careers")
        .delete()
        .eq("id", job.id);

      if (error) throw error;

      alert("Job deleted successfully");
      router.push("/admin/career");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setDeleting(false); // ✅
    }
  };
  // ------------------------
  // UI
  // ------------------------
  if (!job) return <p style={{ padding: "40px" }}>Job not found</p>;

  return (
    <>
      <Loader
        loading={loading || saving || deleting}
        text={
          loading
            ? "Fetching job details..."
            : saving
              ? "Saving changes..."
              : "Deleting job..."
        }
      />
      <div
        className={styles.wrapper}
        style={{
          pointerEvents: saving || deleting ? "none" : "auto",
          opacity: saving || deleting ? 0.7 : 1,
        }}
      >
        {/* HEADER */}
        <div className={styles.header}>
          <h1 className={styles.title}>Edit Job</h1>

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

        {/* CONTENT */}
        <div className={styles.contentBox}>
          {/* ROLE */}
          <input
            className={styles.input}
            value={roleState}
            onChange={(e) => setRoleState(e.target.value)}
            placeholder="Job Role (max 80 chars)"
          />

          {/* SHORT DESC */}
          <input
            className={styles.input}
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            placeholder="Short Description"
          />

          {/* LOCATION */}
          <input
            className={styles.input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          {/* JOB TYPE */}
          <select
            className={styles.input}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="Remote">Remote</option>
            <option value="Work From Office">Work From Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* DESCRIPTIONS */}
          <h3>Job Description</h3>
          {descriptions.map((desc, index) => (
            <div key={index} className={styles.row}>
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

          <button className={styles.submitBtn} onClick={addDescription}>
            + Add Description
          </button>

          {/* REQUIREMENTS */}
          <h3 style={{ marginTop: "20px" }}>Requirements</h3>
          {requirements.map((req, index) => (
            <div key={index} className={styles.row}>
              <input
                className={styles.input}
                value={req}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                placeholder={`Requirement ${index + 1}`}
              />

              {requirements.length > 1 && (
                <button
                  type="button"
                  className={styles.crossButton}
                  onClick={() => removeRequirement(index)}
                >
                  <ImCross />
                </button>
              )}
            </div>
          ))}

          <button className={styles.submitBtn} onClick={addRequirement}>
            + Add Requirement
          </button>
        </div>
      </div>
    </>
  );
}
