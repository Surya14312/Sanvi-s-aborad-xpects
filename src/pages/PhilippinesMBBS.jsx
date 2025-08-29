import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function PhilippinesMBBS() {
  return (
    <div className="philippines-container">
      {/* Hero Section */}
      <section className="philippines-hero">
        <div className="philippines-hero-content">
          <h1>Study MBBS in the Philippines</h1>
          <p>
            The Philippines has emerged as a top destination for Indian students pursuing MBBS due to its affordable tuition, English-medium education, and globally recognized degrees. The country follows the American curriculum for medicine, ensuring a strong theoretical and practical foundation. With modern medical facilities, experienced faculty, and exposure to international healthcare standards, the Philippines offers an excellent platform for aspiring doctors.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/philippines/philippines-hero.jpg"
          alt="MBBS in Philippines"
          className="philippines-hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="philippines-glance">
        <h2 className="glance-heading">Philippines at a Glance</h2>
        <div className="philippines-stats-grid">
          {[
            "20+ medical colleges recognized by MCI/NMC",
            "Tuition Fees: $3,000–6,000/year (~₹2.5–5 lakh)",
            "Living Costs: $3,000–5,000/year (~₹2.5–4 lakh)",
            "Language of Instruction: English",
            "Duration of MBBS: 5.5–6 years including internship",
            "Degrees recognized by WHO, NMC, FAIMER",
          ].map((text, index) => (
            <div key={index} className="philippines-stat-card">{text}</div>
          ))}
        </div>
      </section>

      {/* Why MBBS in Philippines */}
      <section className="philippines-why">
        <h2>Why Choose the Philippines?</h2>
        <ul>
          <li>English-medium MBBS programs suitable for Indian students.</li>
          <li>Affordable tuition fees and living costs compared to Europe, China, or the USA.</li>
          <li>Globally recognized degrees valid for practice in India after NMC screening.</li>
          <li>Experienced faculty and exposure to advanced medical technology.</li>
          <li>Opportunity for practical training in hospitals with diverse patient cases.</li>
          <li>Close cultural and climate similarity to India ensures easy adaptation.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="philippines-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English as the medium of instruction eliminates language barriers.</li>
          <li>Affordable education with high-quality training.</li>
          <li>Indian students can appear for FMGE/NExT exam in India after graduation.</li>
          <li>Opportunity to gain international exposure and clinical skills.</li>
          <li>Scholarships and financial assistance available in some universities.</li>
        </ul>
      </section>

    {/* Top Medical Universities */}
<section className="philippines-universities">
  <h2>Top Medical Universities in Philippines</h2>
  <div className="universities-grid">
    {[
      { name: "University of Santo Tomas (UST)", img: "/assets/philippines/universities/ust.jpg" },
      { name: "Cebu Doctors’ University", img: "/assets/philippines/universities/cebu.jpg" },
      { name: "San Beda College of Medicine", img: "/assets/philippines/universities/sanbeda.jpg" },
      { name: "Far Eastern University", img: "/assets/philippines/universities/feu.jpg" },
      { name: "Angeles University Foundation", img: "/assets/philippines/universities/angeles.jpg" },
      { name: "University of Perpetual Help System DALTA", img: "/assets/philippines/universities/perpetual.jpg" },
      { name: "De La Salle Health Sciences Institute", img: "/assets/philippines/universities/delasalle.jpg" },
      { name: "Lyceum-Northwestern University", img: "/assets/philippines/universities/lyceum.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Studying & Living */}
      <section className="philippines-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Tuition Fees: $3,000 – $6,000/year (~₹2.5–5 lakh)<br />
          Living Expenses: $250–$400/month (~₹20,000–33,000)<br />
          Total MBBS Cost (5.5–6 years): $30,000 – $40,000 (~₹25–33 lakh)
        </p>
      </section>

      {/* Career Prospects */}
      <section className="philippines-career">
        <h2>Career Prospects After MBBS</h2>
        <ul>
          <li>Eligible to appear for FMGE/NExT in India to practice medicine.</li>
          <li>Opportunities for residency or postgraduate studies in the Philippines, USA, or other countries.</li>
          <li>Exposure to global healthcare practices enhances career prospects.</li>
          <li>Potential for research and specialization in diverse medical fields.</li>
        </ul>
      </section>

      {/* Documents & Visa */}
      <section className="philippines-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>10+2 marksheet with Physics, Chemistry, Biology</li>
          <li>NEET qualification certificate (mandatory)</li>
          <li>Passport copy</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Admission letter from the university</li>
          <li>Proof of sufficient funds (~$5,000/year)</li>
          <li>Health and travel insurance</li>
          <li>Visa application form</li>
          <li>Recent passport-sized photographs</li>
        </ul>

        <h2>Student Visa for Philippines</h2>
        <p>
          Type: Student Visa (9F)<br />
          Requirements: University admission, proof of funds, passport, insurance<br />
          Visa Duration: Course duration<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Limited; mostly internships as part of curriculum
        </p>
      </section>
      <section className="philippines-student-life">
  <h2>Student Life in the Philippines</h2>
  <p>
    The Philippines offers a vibrant student lifestyle with friendly communities, 
    affordable living, tropical beaches, and rich cultural traditions. 
    Students enjoy modern campuses, festivals, internships, and opportunities to explore islands and cities.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/philippines/philippines-student-life.jpg" alt="Student Life in the Philippines" />
  </div>
</section>


      {/* FAQs */}
      <section className="philippines-faq">
        <h2>FAQs About Studying MBBS in Philippines</h2>
        <div className="faq-item">
          <h4>Is NEET mandatory for Indian students?</h4>
          <p>Yes, NEET qualification is required for admission in the Philippines.</p>
        </div>
        <div className="faq-item">
          <h4>Is English taught MBBS valid in India?</h4>
          <p>Yes, graduates are eligible to appear for FMGE/NExT exam conducted by NMC in India.</p>
        </div>
        <div className="faq-item">
          <h4>What is the cost of living?</h4>
          <p>$250–$400/month (~₹20,000–33,000).</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, some universities offer scholarships or fee concessions.</p>
        </div>
        <div className="faq-item">
          <h4>How long is the MBBS course?</h4>
          <p>5.5–6 years including internship.</p>
        </div>
      </section>

      <EnrollSection country="Philippines" />

      <section className="philippines-summary">
        <p>
          Planning to pursue MBBS in the Philippines? Our consultancy assists Indian students with university admissions, NEET guidance, visa applications, and career planning to ensure a smooth and successful medical education journey.
        </p>
      </section>
    </div>
  );
}

export default PhilippinesMBBS;