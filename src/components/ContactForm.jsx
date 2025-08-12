// src/components/ContactForm.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  useEffect(() => {
    // Debug: show env values in console (only in development)
    console.log("VITE_EMAILJS_SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("VITE_EMAILJS_TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("VITE_EMAILJS_PUBLIC_KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey); // initialize EmailJS with public key
    } else {
      console.warn("EmailJS public key is missing. Check .env and restart dev server.");
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    // ✅ Check for missing environment variables BEFORE sending
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("❌ Missing EmailJS environment variables in .env file");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // ✅ Single sendForm call
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ EmailJS success:", res.status, res.text);
      setStatus("success");
      form.current.reset();
    } catch (err) {
      
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-wrap">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>

      {status === "success" && (
        <div className="status success">✅ Message sent successfully!</div>
      )}
      {status === "error" && (
        <div className="status error">❌ Failed to send message. Check console.</div>
      )}
    </div>
  );
}
