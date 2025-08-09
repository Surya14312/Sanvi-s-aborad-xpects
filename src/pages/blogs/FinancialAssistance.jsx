import React, { useState } from "react";

const FinancialAssistance = () => {
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

  const sendFinancialForm = async () => {
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
        subject: "New Financial Assistance Request",
        body: `
        📋 New Financial Assistance Submission

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        📝 Message: ${message || "No message provided."}
        `,
      };

      // Simulate sending delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Email data sent:", emailData);

      setSubmitMessage(
        "✅ Submitted successfully! We'll get back to you soon."
      );
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
      console.error("Form submission error:", err);
      setSubmitMessage("❌ Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="financial-container">
      {/* Hero Section */}
      <section className="financial-hero">
        <div className="financial-text">
          <h1>Financial Assistance for International Students</h1>
          <p>
            Explore various financial options to make your study abroad journey
            more affordable and stress-free. From scholarships to education
            loans, we are here to guide you every step of the way.
          </p>
        </div>
        <div className="financial-image">
          <img src="/assets/financial-aid.jpg" alt="Financial Support" />
        </div>
      </section>

      {/* Scholarships */}
      <section className="financial-section">
        <h2>Scholarships</h2>
        <p>
          Many universities and governments offer merit-based and need-based
          scholarships to international students. These can cover tuition,
          accommodation, travel, and living costs.
        </p>
        <ul>
          <li>Merit-Based Scholarships</li>
          <li>Country-Specific Scholarships</li>
          <li>Program-Specific Scholarships</li>
          <li>Private and NGO Scholarships</li>
        </ul>
      </section>

      {/* Part-Time Jobs */}
      <section className="financial-section">
        <h2>Part-Time Work Opportunities</h2>
        <p>
          International students can often work part-time during studies. This
          helps with expenses and builds experience.
        </p>
        <ul>
          <li>Up to 20 hours/week during term time</li>
          <li>Full-time during breaks</li>
          <li>On-campus and off-campus roles</li>
        </ul>
      </section>

      {/* Education Loans */}
      <section className="financial-section">
        <h2>Education Loans</h2>
        <p>
          We assist students in securing education loans from banks and
          financial institutions. We guide you with documentation and
          applications.
        </p>
        <ul>
          <li>Secured and Unsecured Loans</li>
          <li>Flexible Repayment Plans</li>
          <li>Loan Amount Based on Country & Course</li>
        </ul>
      </section>

      {/* Budgeting Tips */}
      <section className="financial-section">
        <h2>Budgeting Tips</h2>
        <p>Manage your money smartly during your studies abroad:</p>
        <ul>
          <li>Track monthly expenses with apps</li>
          <li>Cook your meals to save more</li>
          <li>Use public transport/student passes</li>
          <li>Use student discounts for shopping</li>
        </ul>
      </section>

      {/* Financial Assistance Form Section */}
      <section className="financial-cta">
        <h2>Need Help with Financial Planning?</h2>
        <p>
          Our expert counselors will assist you with scholarships, loans, and
          work options tailored to your destination and goals.
        </p>

        <div className="financial-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="cta-button"
            onClick={sendFinancialForm}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default FinancialAssistance;
