import React, { useState } from "react";

const Documentation = () => {
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

  const sendForm = async () => {
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
        subject: "New Documentation Service Request",
        body: `
        📋 New Documentation Request

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        📝 Message: ${message || "No message provided."}
        `,
      };

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
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>Documentation Services</h1>
          <p>
            We provide professional documentation services tailored for visa
            applications, university admissions, career advancement, and more.
            Let your documents speak for your potential.
          </p>
        </div>
        <img
          src="/assets/documentation-banner.jpg"
          alt="Documentation Services"
          className="career-banner-img"
        />
      </section>

      {/* Info Sections */}
      <section className="career-info">
        <h2>Our Expertise</h2>
        <p>
          Our documentation team ensures clarity, professionalism, and precision
          across a wide range of formats. Whether you're applying to a
          university, submitting a visa application, or preparing a business
          proposal — we’ve got you covered.
        </p>
      </section>

      <section className="career-info">
        <h2>Types of Documentation</h2>
        <ul>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LOR)</li>
          <li>Resume & CV Writing</li>
          <li>Cover Letters</li>
          <li>Visa Application Documents</li>
          <li>Project Reports & Research Abstracts</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Key Benefits</h2>
        <ul>
          <li>Customized to fit each individual's goals</li>
          <li>Reviewed by experts and language professionals</li>
          <li>Fast turnaround and client-friendly revisions</li>
          <li>Confidentiality and quality assurance guaranteed</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Modern Documentation Trends</h2>
        <p>
          We stay up-to-date with evolving global requirements. Our services
          integrate modern formatting, ATS-friendly layouts, and keyword
          optimization to boost your chances of success.
        </p>
      </section>

      <section className="career-info">
        <h2>How We Deliver</h2>
        <ul>
          <li>Step 1: Share your background and goals</li>
          <li>Step 2: Receive a draft within 48–72 hours</li>
          <li>Step 3: Request edits if needed</li>
          <li>Step 4: Final polished document delivered in PDF/Word</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Let Your Documents Speak</h2>
        <p>
          Whether you're targeting top universities or leading companies,
          well-prepared documents make all the difference. Reach out to us for
          personalized, professional documentation that reflects your strengths.
        </p>
      </section>

      {/* Form Section */}
      <section className="career-form-section">
        <h2>Request Documentation Support</h2>
        <p>Fill out the form below and our team will reach out to you soon.</p>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendForm();
          }}
        >
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

          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="apply-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "⏳ Sending..." : "Submit"}
          </button>

          {submitMessage && (
            <div
              className="feedback-box"
              style={{
                border: submitMessage.includes("✅")
                  ? "2px solid #4CAF50"
                  : "2px solid #f44336",
                backgroundColor: submitMessage.includes("✅")
                  ? "#e8f5e8"
                  : "#fdeaea",
                color: submitMessage.includes("✅") ? "#2e7d32" : "#c62828",
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

export default Documentation;
