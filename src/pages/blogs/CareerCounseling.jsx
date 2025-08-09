import React, { useState } from "react";
import { Link } from "react-router-dom";

const CareerCounseling = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendCareerForm = async () => {
    if (isSubmitting) return;

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Career Counseling Request",
        body: `
        📋 New Career Counseling Submission

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        📝 Message: ${message || "No message provided."}
        `,
      };

      // Simulate sending delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data sent to email:", emailData);

      setSubmitMessage("✅ Submitted successfully! We’ll contact you soon.");
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
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
          Hero Section with Image
      =============================== */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>Your Career Starts Here</h1>
          <p>
            Get expert guidance and personalized career advice to take the
            perfect step toward your dream education abroad.
          </p>
          <Link to="/apply" className="apply-button">
            Book a Free Counseling
          </Link>
        </div>
        <img
          src="/assets/counseling-banner.jpg"
          alt="Career Counseling"
          className="career-banner-img"
        />
      </section>

      {/* ===============================
          What is Career Counseling?
      =============================== */}
      <section className="career-info">
        <h2>What is Career Counseling?</h2>
        <p>
          Career counseling is a professional service where trained counselors
          assist students in understanding their strengths, interests, and
          abilities to make informed educational and career decisions. It helps
          clarify goals, overcome confusion, and develop a roadmap for success.
        </p>
      </section>

      {/* ===============================
          Why Career Counseling is Important
      =============================== */}
      <section className="career-info">
        <h2>Why is Career Counseling Important?</h2>
        <ul>
          <li>🔍 Helps discover the right course and country</li>
          <li>🎯 Builds a strategic study plan</li>
          <li>👩‍🎓 Matches your skills and interests</li>
          <li>📚 Provides clarity over career goals</li>
          <li>🌐 Boosts confidence in your decision</li>
        </ul>
      </section>

      {/* ===============================
          Career Counseling Form Section
      =============================== */}
      <section className="career-form-section">
        <h2>Request Your Career Session</h2>
        <p>Our counselors are ready to guide you. Fill the form below.</p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendCareerForm();
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

          {/* Message Field */}
          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message (Optional)"
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

          {/* Message Feedback */}
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

export default CareerCounseling;
