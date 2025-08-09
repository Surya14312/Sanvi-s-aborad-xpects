import React, { useState } from "react";

const TravelAssistance = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelNeeds: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendTravelForm = async () => {
    if (isSubmitting) return;

    const { firstName, lastName, email, phone, travelNeeds, message } =
      formData;

    if (!firstName || !lastName || !email || !phone || !travelNeeds) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Travel Assistance Request",
        body: `
        ✈️ New Travel Assistance Submission

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Phone: ${phone}
        🌍 Travel Needs: ${travelNeeds}
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
          travelNeeds: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTravelForm();
  };

  return (
    <div className="travel-container">
      {/* Hero Section */}
      <div className="travel-hero">
        <div className="travel-text">
          <h1>Travel Assistance</h1>
          <p>
            Planning your study abroad journey can be overwhelming, but we make
            it seamless with our dedicated Travel Assistance service. We ensure
            your travel experience is stress-free, economical, and safe. Our
            team helps you with everything from ticket booking and visa
            compliance to airport pickup and pre-departure briefing.
          </p>
        </div>
        <div className="travel-image">
          <img src="/assets/travel.jpg" alt="travel - Assistance" />
        </div>
      </div>

      {/* Services Section */}
      <div className="travel-section">
        <h2>Our Travel Support Includes:</h2>
        <ul>
          <li>Visa documentation & travel compliance assistance</li>
          <li>International & domestic flight booking</li>
          <li>Travel insurance & health coverage recommendations</li>
          <li>Foreign exchange & currency card setup</li>
          <li>Pre-departure orientation program</li>
          <li>Airport pickup & accommodation transfer planning</li>
          <li>Emergency travel support & updates</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="travel-section">
        <h2>Why Choose Our Assistance?</h2>
        <p>
          With global tie-ups and years of experience helping students relocate,
          we ensure:
        </p>
        <ul>
          <li>Peace of mind during the entire travel process</li>
          <li>Discounted student airfares with top airlines</li>
          <li>24x7 support during emergencies or delays</li>
          <li>Coordination with your university’s arrival team</li>
          <li>Customized guidance based on your destination country</li>
        </ul>
      </div>

      {/* Pre-Departure Section */}
      <div className="travel-section">
        <h2>Pre-Departure Briefing</h2>
        <p>We conduct pre-departure sessions where we cover:</p>
        <ul>
          <li>Travel documents checklist</li>
          <li>Do’s and Don’ts while traveling abroad</li>
          <li>How to navigate airports</li>
          <li>Emergency contact info</li>
          <li>Culture shock and local customs of your destination</li>
        </ul>
      </div>

      {/* Call to Action Form Section */}
      <div className="travel-cta">
        <h2>Need Travel Help?</h2>
        <p>Fill out the form and we’ll assist you with your travel needs.</p>
        <form className="travel-form" onSubmit={handleSubmit}>
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
          <input
            type="email"
            name="email"
            placeholder="Email ID"
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
          <input
            type="text"
            name="travelNeeds"
            placeholder="Travel Destination / Assistance Type"
            value={formData.travelNeeds}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="cta-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default TravelAssistance;
