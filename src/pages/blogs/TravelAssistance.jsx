// src/pages/TravelAssistance.js
import React from "react";

const TravelAssistance = () => {
  return (
    <div className="travel-container">
      {/* Hero Section */}
      <section className="travel-hero">
        <div className="travel-text">
          <h1>Travel Assistance</h1>
          <p>
            Traveling abroad for education can be overwhelming, especially for first-time international students. 
            From booking flights to airport transfers and travel insurance, our travel assistance service ensures a seamless and stress-free journey from your home country to your study destination.
          </p>
        </div>
        <div className="travel-image">
          <img src="/assets/travel.jpg" alt="Travel Assistance" />
        </div>
      </section>

      {/* Why Travel Assistance Is Important */}
      <section className="travel-section">
        <h2>Why Travel Assistance Is Important</h2>
        <ul>
          <li>First-time travelers often face confusion with flight bookings, visa stamps, and baggage restrictions.</li>
          <li>Some countries require pre-departure medical tests or insurance.</li>
          <li>Understanding local travel rules, airport procedures, and immigration protocols is essential.</li>
          <li>Safe and organized travel reduces stress and ensures timely arrival at universities.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="travel-section">
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

      {/* Benefits for Students */}
      <section className="travel-section">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Hassle-free and organized international travel.</li>
          <li>Safety and security from departure to arrival.</li>
          <li>Avoids last-minute mistakes or missed flights.</li>
          <li>Prepares students for smooth transition to their new country.</li>
          <li>Peace of mind for both students and parents.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="travel-section">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> Can you book my flight tickets directly?<br />
           We provide guidance on the best flights and routes, but the actual booking is done by the student or their guardian.</p>
        <p><strong>Q2:</strong> Is travel insurance mandatory?<br />
           For many countries, yes. We guide you on required coverage and help arrange insurance.</p>
        <p><strong>Q3:</strong> Do you assist with airport pickups?<br />
           Yes, we coordinate with local service providers or university transport for smooth transfers.</p>
      </section>

      {/* Call to Action */}
      <section className="travel-cta">
        <h2>Traveling abroad shouldn’t be stressful.</h2>
        <p>
          Let us guide you from booking flights to settling safely at your university — ensuring your journey begins on the right note.
        </p>
        <p>
          Please{" "}
          <a href="/contact" className="contact-link">
            contact us
          </a>{" "}
          to get personalized travel assistance.
        </p>
      </section>
    </div>
  );
};

export default TravelAssistance;
