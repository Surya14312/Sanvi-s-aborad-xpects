import React from "react";
import { useLocation } from "react-router-dom";

const ScholarshipAssistanceForm = () => {
  const { state } = useLocation();
  const selectedCountry = state?.country || "";

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        fontFamily: "'Segoe UI', sans-serif",
        lineHeight: 1.6,
        color: "#333",
      }}
    >
      <h2
        style={{
          color: "#b91c1c",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        🎓 Scholarship Assistance
      </h2>

      <p>
        Are you dreaming of studying abroad but worried about tuition costs? Our
        Scholarship Assistance Program is here to help you access financial aid
        and reduce your educational expenses. We guide you through the process
        of identifying and applying for scholarships specific to your field and
        country of interest.
      </p>
      <p>
        Many international universities offer merit-based and need-based
        scholarships to deserving students. With our expert counseling, we help
        you craft strong applications, prepare necessary documents, and meet
        important deadlines to improve your chances of success.
      </p>
      <p>
        Whether you're targeting undergraduate, postgraduate, or research
        programs, we ensure that you are aware of all available funding options,
        including government grants, institutional awards, and private
        scholarships.
      </p>
      <p>
        By submitting this form, you take the first step toward unlocking
        scholarship opportunities that align with your academic achievements,
        background, and goals. Our team will review your profile and connect you
        with the most relevant options available globally.
      </p>
      <p>
        Don’t let finances hold back your aspirations. Fill in the details below
        to begin your journey with full guidance and support from Sanvi’s Abroad
        Xperts!
      </p>

      <p
        style={{
          fontStyle: "italic",
          color: "#555",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        Selected Country: <strong>{selectedCountry || "Not selected"}</strong>
      </p>
    </div>
  );
};

export default ScholarshipAssistanceForm;
