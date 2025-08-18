// src/components/ContactForm.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey); 
    } else {
      console.warn("⚠️ EmailJS public key missing. Check .env file.");
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("❌ Missing EmailJS environment variables");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // ✅ Send via EmailJS
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ EmailJS success:", res.status, res.text);
      setStatus("success");

      // ✅ Extract form data
      const formData = new FormData(form.current);
      const fname = formData.get("first_name");
      const lname = formData.get("last_name");
      const phone = formData.get("phone");
      const whatsapp = formData.get("whatsapp");
      const email = formData.get("user_email");
      const country = formData.get("country");
      const reason = formData.get("reason");
      const year = formData.get("year");
      const qualification = formData.get("qualification");
      const message = formData.get("message");

      // ✅ WhatsApp API redirect
      const whatsappMsg = `🌍 Free Consultation Request%0A%0A👤 Name: ${fname} ${lname}%0A📱 Phone: ${phone}%0A💬 WhatsApp: ${whatsapp}%0A📧 Email: ${email}%0A🎯 Country: ${country}%0A🤔 Why: ${reason}%0A📅 Preferred Year: ${year}%0A🎓 Qualification: ${qualification}%0A📝 Message: ${message}`;
      const whatsappUrl = `https://wa.me/919966428787?text=${whatsappMsg}`;
      window.open(whatsappUrl, "_blank");

      form.current.reset();
    } catch (err) {
      console.error("❌ EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-wrap">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Get Free Consultation</h2>

        <div className="form-group">
          <input type="text" name="first_name" placeholder="First Name" required />
          <input type="text" name="last_name" placeholder="Last Name" required />
        </div>

        <div className="form-group">
          <input type="text" name="phone" placeholder="Phone Number" required />
          <input type="text" name="whatsapp" placeholder="WhatsApp Number" required />
        </div>

        <input type="email" name="user_email" placeholder="Email Address" required />

        <input type="text" name="country" placeholder="Country Destination" required />

        <textarea name="reason" placeholder="Why did you choose this country?" required />

        <select name="year" required>
          <option value="">Select Preferred Year</option>
          {Array.from({ length: 12 }, (_, i) => 2025 + i).map((yr) => (
            <option key={yr} value={yr}>{yr}</option>
          ))}
        </select>

        <input type="text" name="qualification" placeholder="Qualification" required />

        <textarea name="message" placeholder="Additional Message" rows="3" />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Get Free Consultation"}
        </button>
      </form>

      {status === "success" && (
        <div className="status success">✅ Your request has been sent successfully!</div>
      )}
      {status === "error" && (
        <div className="status error">❌ Failed to send. Please try again.</div>
      )}
    </div>
  );
}
