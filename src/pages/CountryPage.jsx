// src/pages/CountryPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { countryName } = useParams();
  const formattedName =
    countryName.charAt(0).toUpperCase() + countryName.slice(1);

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
        subject: `New Financial Assistance Request for ${formattedName}`,
        body: `
        📋 Financial Assistance Form - ${formattedName}

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        📝 Message: ${message || "No message provided."}
        `,
      };

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
    <div className="country-page">
      <h1>Study in {formattedName}</h1>

      <p>
        {formattedName} is a top choice for international students seeking
        quality education, global exposure, and diverse cultural experiences.
        With world-renowned universities, advanced research opportunities, and
        an inclusive environment, {formattedName} offers a dynamic academic
        ecosystem.
      </p>
      <p>
        Students studying in {formattedName} gain access to internationally
        recognized degrees and career-boosting programs. Whether it's
        engineering, business, medicine, or the arts, {formattedName} provides a
        wide array of disciplines taught by expert faculty with real-world
        experience.
      </p>
      <p>
        Beyond academics, {formattedName} offers a rich cultural experience.
        Students enjoy the opportunity to interact with people from around the
        world, explore new cuisines, attend local festivals, and engage in
        various student-led communities.
      </p>
      <p>
        Scholarships, student support services, and affordable tuition options
        make {formattedName} an attractive destination. Many universities offer
        financial aid, part-time job opportunities, and dedicated international
        student offices to assist with everything from visas to housing.
      </p>
      <p>
        At Sanvi’s Abroad Xperts, we guide students every step of the way—from
        selecting the right university and course, to preparing visa
        documentation, and ensuring smooth post-arrival support in{" "}
        {formattedName}. Begin your journey today and unlock a world of
        possibilities.
      </p>

      <hr style={{ margin: "40px 0" }} />

      <h2>📌 Request Financial Assistance</h2>
      <p>
        Need support to finance your studies in {formattedName}? Fill the form
        below and we’ll guide you.
      </p>

      <form className="financial-form">
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
        <textarea
          name="message"
          placeholder="Your Message or Query (optional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={sendFinancialForm}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </form>
    </div>
  );
};

export default CountryPage;
