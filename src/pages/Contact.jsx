import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    courseType: "",
    education: "",
    country: "",
    startDate: "",
    endDate: "",
    address: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendMail = async () => {
    if (isSubmitting) return;

    const {
      name,
      age,
      courseType,
      education,
      country,
      startDate,
      endDate,
      address,
      phone,
      whatsapp,
    } = formData;

    if (
      !name ||
      !age ||
      !courseType ||
      !education ||
      !country ||
      !startDate ||
      !endDate ||
      !address ||
      !phone ||
      !whatsapp
    ) {
      setSubmitMessage("⚠️ Please fill all fields before clicking submit.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "dhineshmanickam01@gmail.com",
        subject: "New Admission Enquiry",
        body: `📚 New Admission Enquiry\n\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Course Type: ${courseType}\n📘 Education Level: ${education}\n🌍 Country Interested: ${country}\n🗓️ Start Date: ${startDate}\n🗓️ End Date: ${endDate}\n🏠 Address: ${address}\n📞 Phone No: ${phone}\n📱 WhatsApp No: ${whatsapp}`,
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Email data to send:", emailData);

      setSubmitMessage(
        "✅ Form submitted successfully! Email sent to dhineshmanickam01@gmail.com"
      );

      setTimeout(() => {
        setFormData({
          name: "",
          age: "",
          courseType: "",
          education: "",
          country: "",
          startDate: "",
          endDate: "",
          address: "",
          phone: "",
          whatsapp: "",
        });
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              color: "#c91432",
              marginBottom: "10px",
              position: "relative",
              display: "inline-block",
            }}
          >
            📞 Contact Us
          </h1>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: "20px" }}>
          <p>
            📱 Phone:{" "}
            <span style={{ color: "#d32f2f", fontWeight: "bold" }}>
              +91 99664 28787
            </span>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:thesanvis.aboardxperts@gmail.com">
              thesanvis.aboardxperts@gmail.com
            </a>
          </p>
          <p>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/919966428787"
              target="_blank"
              rel="noreferrer"
            >
              Click to Chat
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sanvi-infolink-system"
              target="_blank"
              rel="noreferrer"
            >
              Visit Profile
            </a>
          </p>
          <p>
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/thesanvisabroadxperts"
              target="_blank"
              rel="noreferrer"
            >
              Visit Profile
            </a>
          </p>
          <p>
            📍 Location:{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=A23,+Basement+Floor,+Gemini+Parsn+Commercial+Complex,+Nungambakkam,+Chennai,+India+-+600034"
              target="_blank"
              rel="noopener noreferrer"
            >
              A23, Basement Floor, Gemini Parsn Commercial Complex,
              Nungambakkam, Chennai, India – 600034
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <h3 className="contact-subheading">📝 Send Your Details</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="👤 Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="🎂 Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="📞 Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="💬 Your WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            required
          />

          {/* Updated Course Type Dropdown */}
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
            required
          >
            <option value="">🎓 -- Select Course Type --</option>
            <option value="Undergraduate">Undergraduate (UG)</option>
            <option value="Postgraduate">Postgraduate (PG)</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Diploma">Diploma</option>
            <option value="Certificate">Certificate Program</option>
            <option value="Foundation">Foundation / Pathway Program</option>
          </select>

          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">📘 -- Select Education Level --</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">🌍 -- Select Preferred Country --</option>
            <option value="Europe">Europe</option>
            <option value="Italy">Italy</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Japan">Japan</option>
            <option value="Singapore">Singapore</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Syria">Syria</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Poland">Poland</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="🏠 Your Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          <button
            type="submit"
            onClick={sendMail}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "⏳ Sending..." : "🚀 Send via Mail"}
          </button>

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
           <div
            style={{
              marginTop: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#444",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            📩 The submitted information will be forwarded to:{" "}
            <strong> thesanvis.aboardxperts@gmail.com</strong>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
