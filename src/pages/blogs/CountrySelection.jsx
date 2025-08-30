// src/pages/CountrySelection.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "./videos/country-hero.mp4"; // ✅ Ensure this file exists

const CountrySelection = () => {
  return (
    <div className="country-selection-container">
      {/* ================= Hero Section ================= */}
      <div className="hero-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          Sorry, your browser doesn’t support embedded videos.
        </video>

        <div className="hero-overlay">
          <h1>Country Selection</h1>
          <p>
            Helping students choose the best study-abroad destination that matches 
            their career goals, lifestyle, and budget.
          </p>
        </div>
      </div>

      {/* ================= Info Section ================= */}
      <div className="info-section">
        <h2>Country Selection</h2>
        <p>
          Choosing the right study-abroad destination is just as important as
          selecting the right course. Each country has its own education
          system, cost of living, post-study opportunities, and lifestyle. Our
          country selection service ensures students make an informed decision
          that matches both their academic goals and personal preferences.
        </p>

        <h3>Why Country Selection is Important</h3>
        <ul>
          <li>
            Different countries specialize in different fields of study (e.g.,
            Germany for Engineering, UK for Business, Switzerland for
            Hospitality).
          </li>
          <li>Tuition fees, scholarships, and living costs vary widely.</li>
          <li>
            Language requirements and teaching styles differ from country to
            country.
          </li>
          <li>
            Post-study work opportunities and immigration policies influence
            long-term career paths.
          </li>
        </ul>

        <h3>How We Help</h3>
        <ul>
          <li>
            Detailed analysis of countries based on the student’s budget, field
            of interest, and lifestyle preferences.
          </li>
          <li>
            Explaining visa rules, work rights, and residency options for each
            country.
          </li>
          <li>
            Sharing insights on the cultural environment and safety for
            international students.
          </li>
          <li>
            Providing data on employment trends and industries in demand in
            different regions.
          </li>
          <li>
            Offering a realistic comparison between multiple destinations
            (Europe vs. North America vs. Asia).
          </li>
        </ul>

        <h3>Popular Study Destinations</h3>
        <ul>
          <li><Link to="/study-in/uk">United Kingdom</Link></li>
          <li><Link to="/study-in/canada">Canada</Link></li>
          <li><Link to="/study-in/germany">Germany</Link></li>
          <li><Link to="/study-in/singapore">Singapore</Link></li>
          <li><Link to="/study-in/ireland">Ireland</Link></li>
          <li><Link to="/study-in/france">France</Link></li>
          <li><Link to="/study-in/switzerland">Switzerland</Link></li>
          <li><Link to="/study-in/netherlands">Netherlands</Link></li>
          <li><Link to="/study-in/mauritius">Mauritius</Link></li>
          <li><Link to="/study-in/italy">Italy</Link></li>
          <li><Link to="/study-in/malaysia">Malaysia</Link></li>
          <li><Link to="/study-in/spain">Spain</Link></li>
          <li><Link to="/study-in/dubai">Dubai</Link></li>
          <li><Link to="/study-in/lithuania">Lithuania</Link></li>
          <li><Link to="/study-in/poland">Poland</Link></li>
          <li><Link to="/study-in/portugal">Portugal</Link></li>
          <li><Link to="/study-in/usa">USA</Link></li>
          <li><Link to="/study-in/malta">Malta</Link></li>
          <li><Link to="/mbbs/china">China</Link></li>
          <li><Link to="/mbbs/georgia">Georgia</Link></li>
          <li><Link to="/mbbs/philippines">Philippines</Link></li>
          <li><Link to="/mbbs/vietnam">Vietnam</Link></li>
          <li><Link to="/mbbs/belarus">Belarus</Link></li>


        </ul>

        <h3>Key Benefits for Students</h3>
        <ul>
          <li>
            Confidence in selecting a country that aligns with personal and
            professional goals.
          </li>
          <li>
            Access to updated information on top study-abroad destinations.
          </li>
          <li>
            Balanced recommendations (cost, quality, lifestyle, opportunities).
          </li>
          <li>
            Saves time and eliminates confusion between popular destinations.
          </li>
        </ul>

        <h3>FAQs</h3>
        <p>
          <strong>Q1: Can I apply to more than one country at the same time?</strong>
          <br />
          Yes, applying to multiple destinations increases your chances, but our
          team helps narrow down options to the most suitable ones.
        </p>
        <p>
          <strong>Q2: Do you suggest only English-speaking countries?</strong>
          <br />
          No, we also recommend non-English-speaking countries that offer
          English-taught programs (e.g., Germany, France, Netherlands).
        </p>

        <blockquote>
          “Not sure whether to choose the UK, Canada, Germany, or another
          destination? Let us help you compare and finalize the best country
          for your academic success.”
        </blockquote>
      </div>
    </div>
  );
};

export default CountrySelection;
