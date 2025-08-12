import React, { useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredCourse: "",
    preferredCountry: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const emailTemplateParams = {
      to_email: "thesanvis.abroadxperts@gmail.com",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      preferredCourse: formData.preferredCourse || "N/A",
      preferredCountry: formData.preferredCountry || "N/A",
      message: formData.message || "No message provided.",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // From EmailJS dashboard
        "YOUR_TEMPLATE_ID", // From EmailJS dashboard
        emailTemplateParams,
        "YOUR_PUBLIC_KEY" // From EmailJS dashboard
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            preferredCourse: "",
            preferredCountry: "",
            message: "",
          });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
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
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
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
        />
        <input
          type="text"
          name="preferredCourse"
          placeholder="Preferred Course"
          value={formData.preferredCourse}
          onChange={handleChange}
        />
        <input
          type="text"
          name="preferredCountry"
          placeholder="Preferred Country"
          value={formData.preferredCountry}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="success-message">✅ Your message has been sent!</p>
      )}
      {status === "error" && (
        <p className="error-message">❌ Failed to send message. Try again.</p>
      )}
    </div>
  );
}
