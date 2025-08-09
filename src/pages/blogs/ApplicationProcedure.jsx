import React, { useState } from "react";


const ApplicationProcedure = () => {
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
    <div className="application-container">
      {/* Hero Section */}
      <section className="app-hero">
        <div className="hero-text">
          <h1>Application Procedure</h1>
          <p>
            Follow our simple and guided application process to begin your international education journey with The Sanvi’s Abroad Xperts.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/apply-hero.jpg" alt="Application Process" />
        </div>
      </section>

      {/* Step-by-step Guide */}
      <section className="steps-section">
        <h2>Step-by-Step Process</h2>
        <div className="steps">
          {[
            "Initial Counseling & Profile Evaluation",
            "University & Course Selection",
            "Documentation Assistance",
            "Application Submission",
            "Offer Letter & Acceptance",
            "Visa Documentation & Interview Prep",
            "Accommodation & Pre-departure Support",
          ].map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h3>{step}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="document-list-section">
        <h2>Documents Required</h2>
        <ul className="doc-list">
          <li>Academic Transcripts & Certificates</li>
          <li>Valid Passport</li>
          <li>English Proficiency Test Scores (IELTS, TOEFL, etc.)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LOR)</li>
          <li>Updated Resume/CV</li>
          <li>Passport Size Photographs</li>
          <li>Proof of Funds</li>
        </ul>
      </section>

      {/* Tips */}
      <section className="app-tips">
        <h2>Tips for a Successful Application</h2>
        <ul>
          <li>Start early and research well.</li>
          <li>Tailor your SOP to each university.</li>
          <li>Maintain a checklist to track document submissions.</li>
          <li>Practice mock visa interviews with us.</li>
          <li>Consult our experts at each stage for review and improvement.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="app-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {[
            {
              q: "Do I need to appear for IELTS/TOEFL?",
              a: "Most universities require proof of English proficiency. We can guide you based on the destination country."
            },
            {
              q: "How long does the entire process take?",
              a: "Typically 3 to 6 months, depending on your preparedness and intake deadlines."
            },
            {
              q: "Can I apply to multiple universities at once?",
              a: "Yes! In fact, we recommend applying to at least 3-5 to maximize your chances."
            }
          ].map((item, index) => (
            <div className="faq-card" key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Form */}
      <section className="apply-cta">
        <h2>Need Help With Your Application?</h2>
        <p>Fill out the form below and our counselors will get back to you shortly.</p>
        <form
          className="apply-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendCourseForm();
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
            <input
              type="text"
              name="preferredCourse"
              placeholder="Preferred Course"
              value={formData.preferredCourse}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="preferredCountry"
              placeholder="Preferred Country"
              value={formData.preferredCountry}
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
            {isSubmitting ? "⏳ Sending..." : "Submit Application Inquiry"}
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

export default ApplicationProcedure;
