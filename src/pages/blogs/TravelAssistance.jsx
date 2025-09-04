// src/pages/TravelAssistance.jsx
import React from "react";
import { Link } from "react-router-dom";

const TravelAssistance = () => {
  return (
    <div className="travel-assistance-container">
      {/* ================= Intro ================= */}
      <section className="travel-intro">
        <h1>Travel Assistance</h1>
        <p>
          Traveling abroad for education can be overwhelming, especially for first-time international students. From booking flights to airport transfers and travel insurance, our travel assistance service ensures a seamless and stress-free journey from your home country to your study destination.
        </p>
      </section>

      <hr />

      {/* ================= Why Travel Assistance Is Important ================= */}
      <section className="travel-why-important">
        <h2>Why Travel Assistance Is Important</h2>
        <ul>
          <li>First-time travelers often face confusion with flight bookings, visa stamps, and baggage restrictions.</li>
          <li>Some countries require pre-departure medical tests or insurance.</li>
          <li>Understanding local travel rules, airport procedures, and immigration protocols is essential.</li>
          <li>Safe and organized travel reduces stress and ensures timely arrival at universities.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="travel-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Flight Bookings – Guidance on cost-effective flights and best travel routes.</li>
          <li>Airport Transfers – Assistance with pickups from airport to university or accommodation.</li>
          <li>Travel Insurance – Advice and arrangements for mandatory or optional travel insurance.</li>
          <li>Pre-Departure Checklist – Ensuring you carry all essential documents, tickets, currency, and emergency contacts.</li>
          <li>Accommodation Support – Guidance in booking hostels, dorms, or private rentals before arrival.</li>
          <li>Local Travel Tips – Orientation on public transport, local SIM cards, and essential services.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="travel-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Hassle-free and organized international travel.</li>
          <li>Safety and security from departure to arrival.</li>
          <li>Avoids last-minute mistakes or missed flights.</li>
          <li>Prepares students for smooth transition to their new country.</li>
          <li>Peace of mind for both students and parents.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="travel-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Can you book my flight tickets directly?</strong>
          <p>We provide guidance on the best flights and routes, but the actual booking is done by the student or their guardian.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Is travel insurance mandatory?</strong>
          <p>For many countries, yes. We guide you on required coverage and help arrange insurance.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Do you assist with airport pickups?</strong>
          <p>Yes, we coordinate with local service providers or university transport for smooth transfers.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="travel-callout">
        <blockquote>
          “Traveling abroad shouldn’t be stressful. Let us guide you from booking flights to settling safely at your university — ensuring your journey begins on the right note.”
        </blockquote>
         <div style={{ textAlign: "center", marginTop: "25px" }}>
        <Link to="/contact">
          <button
            style={{
              backgroundColor: "#f95738",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e04325")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f95738")}
          >
            Apply Now
          </button>
        </Link>
      </div>
      </section>
    </div>
  );
};

export default TravelAssistance;
