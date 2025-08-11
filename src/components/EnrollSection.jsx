// components/EnrollSection.jsx
import React from "react";
import { Link } from "react-router-dom";

function EnrollSection({ country }) {
  return (
    <section className={`${country.toLowerCase()}-enroll`}>
      <h2>Ready to Begin Your {country} Journey?</h2>
      <p>
        Contact us today to get personalized guidance for studying in {country}.
      </p>
      <Link to="/contact" className="enroll-btn">
        Enroll Now
      </Link>
    </section>
  );
}

export default EnrollSection;
