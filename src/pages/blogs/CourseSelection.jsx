import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseSelection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredCourse: "",
    preferredCountry: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendCourseForm = async () => {
    if (isSubmitting) return;

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredCourse,
      preferredCountry,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !preferredCourse ||
      !preferredCountry
    ) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Course Selection Request",
        body: `
        📋 New Course Selection Request

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        🎓 Preferred Course: ${preferredCourse}
        🌍 Preferred Country: ${preferredCountry}
        📝 Message: ${formData.message || "No message provided."}
        `,
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data sent to email:", emailData);

      setSubmitMessage("✅ Submitted successfully! We’ll guide you shortly.");
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredCourse: "",
          preferredCountry: "",
          message: "",
        });
        setSubmitMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error sending form:", err);
      setSubmitMessage("❌ Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="career-container">
      {/* ===============================
          Hero Section
      =============================== */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>Find the Right Course for Your Future</h1>
          <p>
            Our experts help you choose the most suitable program and
            destination based on your skills and ambitions.
          </p>
          <Link to="/apply" className="apply-button">
            Start Application
          </Link>
        </div>
        <img
          src="/assets/course-selection-banner.jpg"
          alt="Course Selection"
          className="career-banner-img"
        />
      </section>

      {/* ===============================
          What is Course Selection?
      =============================== */}
      <section className="career-info">
        <h2>What is Course Selection Guidance?</h2>
        <p>
          Choosing the right academic course and destination is a critical step
          toward your career abroad. Our counselors provide one-on-one support
          to help match your interests, academic background, and goals with the
          best-suited program in a country that fits your future plans.
        </p>
      </section>

      {/* ===============================
          Why Course Selection Matters
      =============================== */}
      <section className="career-info">
        <h2>Why is Course Selection Important?</h2>
        <ul>
          <li>🎓 Aligns your career goals with academic programs</li>
          <li>🌍 Helps pick the ideal study destination</li>
          <li>📘 Avoids wrong course choices that waste time/money</li>
          <li>🧭 Provides clarity and confidence in your decision</li>
          <li>📈 Improves your long-term career prospects</li>
        </ul>
      </section>

      {/* ===============================
          Course Selection Form
      =============================== */}
      <section className="career-form-section">
        <h2>Get Personalized Course Guidance</h2>
        <p>Fill in the form and our counselor will contact you soon.</p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendCourseForm();
          }}
        >
          {/* Name Fields */}
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Fields */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course & Country Fields */}
          <div className="form-group">
            <input
              type="text"
              name="preferredCourse"
              placeholder="Preferred Course (e.g., MBA, Computer Science)"
              value={formData.preferredCourse}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="preferredCountry"
              placeholder="Preferred Country (e.g., Canada, Japan)"
              value={formData.preferredCountry}
              onChange={handleChange}
              required
            />
          </div>

          {/* Optional Message */}
          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Additional Notes (Optional)"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="apply-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "⏳ Sending..." : "Submit"}
          </button>

          {/* Feedback Message */}
          {submitMessage && (
            <div
              style={{
                marginTop: "15px",
                padding: "12px",
                border: submitMessage.includes("✅")
                  ? "2px solid #4CAF50"
                  : "2px solid #f44336",
                backgroundColor: submitMessage.includes("✅")
                  ? "#e8f5e8"
                  : "#fdeaea",
                borderRadius: "8px",
                fontSize: "16px",
                color: submitMessage.includes("✅") ? "#2e7d32" : "#c62828",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default CourseSelection;
