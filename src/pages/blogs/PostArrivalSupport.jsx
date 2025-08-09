import React, { useState } from "react";

const PostArrivalSupport = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("Submitting your request...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage("Your request has been submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        supportType: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="postarrival-container">
      <section className="postarrival-hero">
        <div className="postarrival-content">
          <h1>Post-Arrival Support</h1>
          <p>
            Once you land in your study destination, our dedicated Post-Arrival
            Support ensures your transition is smooth and stress-free. We stand
            by you from the airport to accommodation, from SIM activation to
            city orientation.
          </p>
        </div>
        <div className="postarrival-image">
          <img src="/assets/postarrival.jpg" alt="postarrival" />
        </div>
      </section>

      <section className="postarrival-services">
        <h2>Our Support Includes:</h2>
        <ul>
          <li>✅ Airport pickup assistance</li>
          <li>✅ Temporary accommodation support</li>
          <li>✅ Local SIM card purchase and activation</li>
          <li>✅ Public transport guidance and metro card help</li>
          <li>✅ City tour and orientation sessions</li>
          <li>✅ Emergency contact support</li>
          <li>✅ Setting up local bank account</li>
          <li>✅ Getting local health insurance coverage</li>
          <li>✅ Assistance with part-time job search</li>
        </ul>
      </section>

      <section className="postarrival-tips">
        <h2>Arrival Tips for International Students</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>✅ Keep Your Documents Handy</h3>
            <p>
              Always keep your passport, visa, university offer letter, and
              other key documents easily accessible in your carry-on.
            </p>
          </div>
          <div className="tip-card">
            <h3>✅ Currency & Payments</h3>
            <p>
              Convert some cash before departure and keep international payment
              methods (like forex card or credit card) active.
            </p>
          </div>
          <div className="tip-card">
            <h3>✅ Emergency Contacts</h3>
            <p>
              Save your local embassy, university helpline, and our emergency
              support number on your phone.
            </p>
          </div>
          <div className="tip-card">
            <h3>✅ Explore Smartly</h3>
            <p>
              Use apps like Google Maps, Citymapper, or local transport guides
              to navigate easily and avoid getting lost.
            </p>
          </div>
        </div>
      </section>
      <section className="postarrival-form">
        <h2>Request Post-Arrival Assistance</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
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

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <select
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
            >
              <option value="">Select Support Needed</option>
              <option value="airport">Airport Pickup</option>
              <option value="accommodation">Temporary Accommodation</option>
              <option value="sim">SIM Card Activation</option>
              <option value="transport">Transport Help</option>
              <option value="tour">City Orientation</option>
              <option value="bank">Bank Setup</option>
              <option value="insurance">Health Insurance</option>
              <option value="job">Part-time Job Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Describe your needs or concerns..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>

          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </section>
    </div>
  );
};

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

  return null; // Implement your TravelAssistance form UI here if needed
};

export default PostArrivalSupport;
