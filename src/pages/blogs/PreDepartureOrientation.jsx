import React from "react";
import { Link } from "react-router-dom";

const PreDepartureOrientation = () => {
  return (
    <div className="orientation-container">
      <h1>Pre-Departure Orientation</h1>

      <section>
        <h2>Welcome & Introduction</h2>
        <p>
          Congratulations on your admission! This orientation will prepare you
          for your journey ahead and help you start your studies smoothly
          abroad.
        </p>
      </section>

      <section>
        <h2>Travel & Packing Tips</h2>
        <ul>
          <li>
            Ensure you have your passport, visa, travel tickets, and insurance.
          </li>
          <li>Pack appropriate clothing for your destination’s weather.</li>
          <li>Follow baggage weight limits and customs regulations.</li>
          <li>
            Be prepared for airport security checks and transit procedures.
          </li>
        </ul>
      </section>

      <section>
        <h2>Financial Preparedness</h2>
        <ul>
          <li>Exchange currency beforehand or plan to withdraw abroad.</li>
          <li>Learn how to open a local bank account.</li>
          <li>Create a budget for your expenses and save emergency funds.</li>
        </ul>
      </section>

      <section>
        <h2>Health & Safety</h2>
        <ul>
          <li>Carry your health insurance card and know how to use it.</li>
          <li>Complete necessary vaccinations before departure.</li>
          <li>Save emergency contacts including your country’s embassy.</li>
          <li>Stay aware of your surroundings and local safety tips.</li>
        </ul>
      </section>

      <section>
        <h2>Accommodation & Living</h2>
        <ul>
          <li>Know your housing arrangements and what to expect on arrival.</li>
          <li>Set up utilities and internet as soon as possible.</li>
          <li>Respect local customs and roommate agreements.</li>
        </ul>
      </section>

      <section>
        <h2>Academic Preparation</h2>
        <ul>
          <li>Attend university orientation sessions.</li>
          <li>Connect with academic advisors and student services.</li>
          <li>Manage your time well and plan your study schedule.</li>
        </ul>
      </section>

      <section>
        <h2>Communication</h2>
        <ul>
          <li>Set up a local SIM card or international phone plan.</li>
          <li>Stay in touch with family and friends regularly.</li>
          <li>Download emergency and communication apps.</li>
        </ul>
      </section>

      <section>
        <h2>Legal & Immigration Information</h2>
        <ul>
          <li>Understand and follow your visa conditions strictly.</li>
          <li>Register with local authorities if required.</li>
          <li>Be aware of laws and regulations in your host country.</li>
        </ul>
      </section>

      <section>
        <h2>Social & Cultural Integration</h2>
        <ul>
          <li>Join student clubs and social groups.</li>
          <li>Be open to learning and adapting to new cultures.</li>
          <li>Reach out for support if you experience culture shock.</li>
        </ul>
      </section>

      <section>
        <h2>Q&A and Contact Info</h2>
        <p>
          For any questions, contact your education consultant or visit our
          website. Emergency help lines and embassy contacts should always be
          saved on your phone.
        </p>
      </section>
    </div>
  );
};

export default PreDepartureOrientation;
