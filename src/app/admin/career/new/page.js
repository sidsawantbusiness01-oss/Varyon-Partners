"use client";

import { useState } from "react";
import { ImCross } from "react-icons/im";
import styles from "./newCareer.module.css";
import Loader from "@/components/Loader/Loader";

export default function NewCaseStudy() {
  const [role, setRole] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("Remote");

  const [descriptions, setDescriptions] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [loading, setLoading] = useState(false);

  // ------------------------
  // HANDLERS
  // ------------------------

  const handleDescriptionChange = (index, value) => {
    const updated = [...descriptions];
    updated[index] = value;
    setDescriptions(updated);
  };

  const addDescriptionField = () => {
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

  const addRequirementField = () => {
    setRequirements([...requirements, ""]);
  };

  const removeRequirement = (index) => {
    const updated = requirements.filter((_, i) => i !== index);
    setRequirements(updated);
  };

  // ------------------------
  // SUBMIT
  // ------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role.length > 80) {
      alert("Job role must be less than 80 characters");
      return;
    }

    setLoading(true); // ✅ START LOADER

    try {
      const formData = new FormData();

      formData.append("role", role);
      formData.append("shortDesc", shortDesc);
      formData.append("location", location);
      formData.append("jobType", jobType);
      formData.append("descriptions", JSON.stringify(descriptions));
      formData.append("requirements", JSON.stringify(requirements));

      const res = await fetch("/api/admin/career", {
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
        throw new Error(data.error || "Failed to add job");
      }

      alert("Job Vacancy added successfully");

      // reset
      setRole("");
      setShortDesc("");
      setLocation("");
      setJobType("Remote");
      setDescriptions([""]);
      setRequirements([""]);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false); // ✅ STOP LOADER (VERY IMPORTANT)
    }
  };

  // ------------------------
  // UI
  // ------------------------

  return (
    <>
      <Loader loading={loading} text="Saving job vacancy..." />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Add Job Vacancy</h1>

        <form
          className={styles.form}
          style={{ pointerEvents: loading ? "none" : "auto" }}
          onSubmit={handleSubmit}
        >
          {/* ROLE */}
          <input
            className={styles.input}
            placeholder="Job Role (max 80 chars)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          {/* SHORT DESCRIPTION */}
          <input
            className={styles.input}
            placeholder="Short Description"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />

          {/* LOCATION */}
          <input
            className={styles.input}
            placeholder="Location (e.g. Mumbai / Remote)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* JOB TYPE DROPDOWN */}
          <select
            className={styles.input}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="Remote">Remote</option>
            <option value="Work From Office">Work From Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* JOB DESCRIPTION */}
          <div>
            <h3>Job Description</h3>

            {descriptions.map((desc, index) => (
              <div key={index} className={styles.row}>
                <input
                  className={styles.input}
                  placeholder={`Description ${index + 1}`}
                  value={desc}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                />

                {descriptions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDescription(index)}
                    className={styles.crossButton}
                  >
                    <ImCross />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addDescriptionField}
              className={styles.submitBtn}
            >
              + Add Description
            </button>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <h3>Requirements</h3>

            {requirements.map((req, index) => (
              <div key={index} className={styles.row}>
                <input
                  className={styles.input}
                  placeholder={`Requirement ${index + 1}`}
                  value={req}
                  onChange={(e) =>
                    handleRequirementChange(index, e.target.value)
                  }
                />

                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className={styles.crossButton}
                  >
                    <ImCross />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addRequirementField}
              className={styles.submitBtn}
            >
              + Add Requirement
            </button>
          </div>

          <button className={styles.submitBtn} disabled={loading}>
            {loading ? "Saving..." : "Add Job Vacancy"}
          </button>
        </form>
      </div>
    </>
  );
}
