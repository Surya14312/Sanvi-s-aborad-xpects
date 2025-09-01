import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function GeorgiaMBBS() {
  return (
    <div className="georgia-container">
      {/* Hero Section */}
      <section className="georgia-hero">
        <div className="georgia-hero-content">
          <h1>Study MBBS in Georgia</h1>
          <p>
            Georgia is becoming a popular destination for Indian students pursuing MBBS due to its affordable tuition fees, high-quality education, and English-medium programs. Georgian medical universities are recognized by WHO and NMC, ensuring global acceptance of the degree. The country offers modern medical facilities, practical clinical training, and a safe, student-friendly environment.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <div className="georgia-hero-img">
          <img src="/assets/georgia/georgia-hero.jpg" alt="MBBS in Georgia" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>Georgia at a Glance</h2>
  <div className="stats-grid">
    {[
      "5–6 medical universities recognized by NMC/WHO",
      "Tuition Fees: $4,500–6,500/year (~₹3.5–5 lakh)",
      "Living Costs: $3,000–4,500/year (~₹2.5–3.5 lakh)",
      "Language of Instruction: English and Georgian (English MBBS available)",
      "Duration of MBBS: 6 years including internship",
      "Degrees recognized by WHO, NMC, FAIMER",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why MBBS in Georgia */}
      <section className="georgia-why">
        <h2>Why Choose Georgia?</h2>
        <ul>
          <li>Affordable tuition fees and living costs compared to other countries.</li>
          <li>English-medium MBBS programs suitable for Indian students.</li>
          <li>Globally recognized degree valid for practice in India after NMC licensing.</li>
          <li>Modern teaching hospitals providing practical exposure.</li>
          <li>Safe, student-friendly, and multicultural environment.</li>
          <li>Opportunities for internships and clinical training during course.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="georgia-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-taught MBBS eliminates language barriers.</li>
          <li>Cost-effective education with strong academic quality.</li>
          <li>Eligible to appear for FMGE/NExT exam in India.</li>
          <li>Exposure to European medical practices and modern hospitals.</li>
          <li>Scholarships or fee concessions offered by some universities.</li>
        </ul>
      </section>

     {/* ✅ Top Medical Universities */}
<section className="georgia-universities">
  <h2>Top Medical Universities in Georgia</h2>
  <div className="universities-grid">
    {[
      { name: "Tbilisi State Medical University", img: "/assets/georgia/universities/tbilisi.jpg" },
      { name: "Batumi Shota Rustaveli State University", img: "/assets/georgia/universities/batumi.jpg" },
      { name: "David Tvildiani Medical University", img: "/assets/georgia/universities/david.jpg" },
      { name: "Caucasus International University", img: "/assets/georgia/universities/caucasus.jpg" },
      { name: "East European University", img: "/assets/georgia/universities/east.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Studying & Living */}
      <section className="georgia-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Tuition Fees: $4,500 – $6,500/year (~₹3.5–5 lakh)<br />
          Living Expenses: $3,000 – $4,500/year (~₹2.5–3.5 lakh)<br />
          Total MBBS Cost (6 years): $45,000 – $55,000 (~₹37–45 lakh)
        </p>
      </section>

      {/* Career Prospects */}
      <section className="georgia-career">
        <h2>Career Prospects After MBBS</h2>
        <ul>
          <li>Eligible for FMGE/NExT exam in India to practice medicine.</li>
          <li>Opportunities for postgraduate studies in Georgia or other countries.</li>
          <li>Exposure to modern hospitals enhances global career prospects.</li>
          <li>Possibility to work in research, hospitals, or pursue specialization abroad.</li>
        </ul>
      </section>

      {/* Documents & Visa */}
      <section className="georgia-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>10+2 marksheet with Physics, Chemistry, Biology</li>
          <li>NEET qualification certificate</li>
          <li>Passport copy</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Admission letter from Georgian university</li>
          <li>Proof of sufficient funds (~$4,500/year)</li>
          <li>Health and travel insurance</li>
          <li>Visa application form</li>
          <li>Passport-sized photographs</li>
        </ul>

        <h2>Student Visa for Georgia</h2>
        <p>
          Type: Student Visa<br />
          Requirements: Admission letter, proof of funds, passport, insurance<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 3–5 weeks<br />
          Work Rights: Limited; internships as part of curriculum
        </p>
      </section>
      {/* <section className="georgia-mbbs-student-life">
  <h2>Student Life in Georgia</h2>
  <p>
    Georgia offers a safe and affordable student-friendly environment with modern campuses, 
    vibrant student communities, cultural festivals, and global networking opportunities. 
    MBBS students can enjoy internships, extracurricular activities, and explore the country’s rich culture and landscapes.
  </p>

 
  <div className="student-life-image">
    <img 
      src="/assets/georgia/georgia-mbbs-student-life.jpg" 
      alt="Student Life in Georgia" 
      
    />
  </div>
</section> */}


      {/* FAQs */}
      <section className="georgia-faq">
        <h2>FAQs About Studying MBBS in Georgia</h2>
        <div className="faq-item">
          <h4>Is NEET mandatory for Indian students?</h4>
          <p>Yes, NEET qualification is required for admission.</p>
        </div>
        <div className="faq-item">
          <h4>Is English-taught MBBS valid in India?</h4>
          <p>Yes, graduates can appear for FMGE/NExT to practice in India.</p>
        </div>
        <div className="faq-item">
          <h4>What is the cost of living?</h4>
          <p>$3,000–$4,500/year including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, some universities offer scholarships or fee concessions.</p>
        </div>
        <div className="faq-item">
          <h4>How long is the MBBS course?</h4>
          <p>6 years including internship.</p>
        </div>
      </section>

      <EnrollSection country="Georgia" />

      <section className="georgia-summary">
        <p>
          Planning to pursue MBBS in Georgia? Our consultancy assists Indian students with university selection, NEET compliance, visa applications, and career planning for a smooth and successful medical education journey.
        </p>
      </section>
    </div>
  );
}

export default GeorgiaMBBS;
