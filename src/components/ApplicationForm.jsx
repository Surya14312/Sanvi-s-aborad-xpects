// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    const formData = new FormData(form.current);

    const name = formData.get("name") || "";
    const age = formData.get("age") || "";
    const courseType = formData.get("courseType") || "";
    const education = formData.get("education") || "";
    const country = formData.get("country") || "";
    const startDate = formData.get("startDate") || "";
    const endDate = formData.get("endDate") || "";
    const address = formData.get("address") || "";
    const phone = formData.get("phone") || "";
    const whatsapp = formData.get("whatsapp") || "";

    // Encode each field safely
    const whatsappMsg = encodeURIComponent(
      `📚 New Admission Enquiry\n\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Course Type: ${courseType}\n📘 Education Level: ${education}\n🌍 Country: ${country}\n🗓️ Start Date: ${startDate}\n🗓️ End Date: ${endDate}\n🏠 Address: ${address}\n📞 Phone: ${phone}\n💬 WhatsApp: ${whatsapp}`
    );

    const whatsappUrl = `https://wa.me/919966428787?text=${whatsappMsg}`;

    try {
      window.open(whatsappUrl, "_blank"); // ✅ Open WhatsApp
      setStatus("success");
      form.current.reset(); // clear form after success
    } catch (err) {
      console.error("❌ Error sending WhatsApp:", err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-wrap">
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <h2>📝 Admission Enquiry Form</h2>

        <input type="text" name="name" placeholder="👤 Full Name" required />
        <input type="text" name="age" placeholder="🎂 Age" required />
        <input type="tel" name="phone" placeholder="📞 Phone Number" required />
        <input
          type="tel"
          name="whatsapp"
          placeholder="💬 WhatsApp Number"
          required
        />

        <select name="courseType" required>
          <option value="">🎓 -- Select Course Type --</option>
          <option value="Undergraduate">Undergraduate (UG)</option>
          <option value="Postgraduate">Postgraduate (PG)</option>
          <option value="Masters">Masters</option>
          <option value="PhD">PhD</option>
          <option value="Diploma">Diploma</option>
          <option value="Certificate">Certificate Program</option>
          <option value="Foundation">Foundation / Pathway Program</option>
        </select>

        <select name="education" required>
          <option value="">📘 -- Select Education Level --</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="Diploma">Diploma</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>

        <select name="country" required>
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

        <input type="date" name="startDate" required />
        <input type="date" name="endDate" required />
        <textarea
          name="address"
          placeholder="🏠 Your Address"
          rows="3"
          required
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "⏳ Sending..." : "🚀 Submit Enquiry"}
        </button>
      </form>

      {status === "success" && (
        <div className="status success">
          ✅ Your enquiry has been sent via WhatsApp!
        </div>
      )}
      {status === "error" && (
        <div className="status error">
          ❌ Failed to send. Please try again later.
        </div>
      )}
    </div>
  );
}
