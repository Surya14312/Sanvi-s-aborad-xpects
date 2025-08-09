import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ScholarshipAssistanceForm = () => {
  const { state } = useLocation();
  const selectedCountry = state?.country || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredCourse: "",
    preferredCountry: selectedCountry,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredCourse,
      preferredCountry,
      message,
    } = formData;

    if (!firstName || !lastName || !email || !phone) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Scholarship Assistance Application",
        body: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${
          preferredCourse || "N/A"
        }\nCountry: ${preferredCountry || "N/A"}\nMessage: ${
          message || "No message"
        }`,
      };

      await new Promise((res) => setTimeout(res, 1500));
      console.log("Simulated email sent:", emailData);

      setSubmitMessage("✅ Application submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredCourse: "",
        preferredCountry: selectedCountry,
        message: "",
      });

      setTimeout(() => setSubmitMessage(""), 4000);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage("❌ Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        {[
          "firstName",
          "lastName",
          "email",
          "phone",
          "preferredCourse",
          "preferredCountry",
        ].map((field) => (
          <div key={field} style={{ marginBottom: "1.2rem" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (s) => s.toUpperCase())}{" "}
              {["firstName", "lastName", "email", "phone"].includes(field)
                ? "*"
                : ""}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={["firstName", "lastName", "email", "phone"].includes(
                field
              )}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#b91c1c")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
        ))}

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "all 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#b91c1c")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#b91c1c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a21c1c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#b91c1c")}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {submitMessage && (
          <p
            style={{
              marginTop: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ScholarshipAssistanceForm;
