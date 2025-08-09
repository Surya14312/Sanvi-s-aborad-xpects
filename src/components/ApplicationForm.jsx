import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ApplicationForm = () => {
  const location = useLocation();
  const selectedCountry = location.state?.country || "";

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredCourse,
      preferredCountry,
      message,
    } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Study Abroad Application",
        body: `
📋 New Study Abroad Application

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
🎓 Preferred Course: ${preferredCourse || "N/A"}
🌍 Preferred Country: ${preferredCountry || "N/A"}
📝 Message: ${message || "No message provided."}
        `,
      };

      // Simulate sending delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Application sent to email:", emailData);

      setSubmitMessage("✅ Your application has been submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredCourse: "",
        preferredCountry: selectedCountry,
        message: "",
      });

      // Optional: clear success message after a delay
      setTimeout(() => setSubmitMessage(""), 4000);
    } catch (err) {
      console.error("Error submitting application:", err);
      setSubmitMessage("❌ Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-form-container">
      <h1 className="form-title">Study Abroad Application Form</h1>
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone*</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Preferred Course</label>
          <input
            type="text"
            name="preferredCourse"
            value={formData.preferredCourse}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Preferred Country</label>
          <select
            name="preferredCountry"
            value={formData.preferredCountry}
            onChange={handleChange}
            disabled={!!selectedCountry}
          >
            <option value="">-- Select a country --</option>
            <option value="Japan">Japan</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Italy">Italy</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="South Korea">South Korea</option>
            <option value="Sweden">Sweden</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Switzerland">Switzerland</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific queries?"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {submitMessage && <p className="success-message">{submitMessage}</p>}
      </form>
    </div>
  );
};

export default ApplicationForm;
