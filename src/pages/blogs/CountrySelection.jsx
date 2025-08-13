import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CountrySelection = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportType: "",
    preferredCountry: "",
    year: "",
    travelNeeds: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ Track submission success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendSupportEmail = async () => {
    if (isSubmitting) return;

    const {
      firstName,
      lastName,
      email,
      phone,
      supportType,
      preferredCountry,
      year,
      travelNeeds,
      message,
    } = formData;

    if (!firstName || !lastName || !email || !phone || !supportType) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvis.aboardxperts@gmail.com",
        subject: "New Country Selection/Support Request",
        body: `
📋 New Country Selection & Support Request:

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
💡 Support Type: ${supportType}
🌍 Preferred Country: ${preferredCountry || "Not specified"}
📅 Year: ${year || "Not specified"}
✈️ Travel Needs: ${travelNeeds || "Not specified"}
📝 Message: ${message || "No message provided."}
        `,
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Email sent:", emailData);

      setSubmitMessage("✅ Submitted successfully!");
      setIsSubmitted(true); // ✅ Mark as submitted
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage("❌ Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendSupportEmail();
  };

  return (
    <div className="support-form-container">
      <h2 className="form-title">Get Support for Your Study Abroad Journey</h2>

      {!isSubmitted ? (
        // ✅ Show form until submitted
        <form onSubmit={handleSubmit} className="support-form">
          <div className="input-grid">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
            >
              <option value="">Select Support Type*</option>
              <option value="Visa Guidance">Visa Guidance</option>
              <option value="Application Assistance">
                Application Assistance
              </option>
              <option value="Travel Assistance">Travel Assistance</option>
              <option value="Accommodation Support">
                Accommodation Support
              </option>
            </select>
            <input
              type="text"
              name="preferredCountry"
              placeholder="Preferred Country"
              value={formData.preferredCountry}
              onChange={handleChange}
            />
            <input
              type="text"
              name="year"
              placeholder="Expected Year of Travel"
              value={formData.year}
              onChange={handleChange}
            />
            <input
              type="text"
              name="travelNeeds"
              placeholder="Travel Needs (e.g. flight, pickup)"
              value={formData.travelNeeds}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>

          {submitMessage && <p className="form-status">{submitMessage}</p>}
        </form>
      ) : (
        // ✅ Show "Explore Destinations" after success
        <div className="success-message">
          <p>{submitMessage}</p>
          <button
            className="destination-link"
            onClick={() => navigate("/destinations")}
          >
            🌍 Explore Destinations
          </button>
        </div>
      )}
    </div>
  );
};

export default CountrySelection;
