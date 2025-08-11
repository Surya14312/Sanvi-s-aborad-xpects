import React from "react";

const TravelAssistance = () => {
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

      {/* Call to Action */}
      <div className="travel-cta">
        <h2>Need Travel Help?</h2>
        <p>
          Please{" "}
          <a href="/contact" className="contact-link">
            contact us
          </a>{" "}
          to discuss your travel needs and get personalized assistance.
        </p>
      </div>
    </div>
  );
};

export default TravelAssistance;
