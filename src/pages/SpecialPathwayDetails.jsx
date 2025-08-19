// src/pages/SpecialPathwayDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SpecialPathwayDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const program = location.state?.program;

  if (!program) {
    return <p style={{ padding: "20px" }}>No program details found.</p>;
  }

  return (
    <div className="special-pathway-details" style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 14px" }}>
        ← Back
      </button>
      <h1>{program.title}</h1>
      <p>{program.description}</p>
      <p><strong>Duration:</strong> {program.duration}</p>

      <h3>Benefits:</h3>
      <ul>
        {program.benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      <h3>Top Universities:</h3>
      <ul>
        {program.universities.map((u, i) => <li key={i}>{u}</li>)}
      </ul>
    </div>
  );
}
