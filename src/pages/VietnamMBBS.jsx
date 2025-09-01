// src/pages/VietnamMBBS.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function VietnamMBBS() {
  return (
    <div className="vietnam-container">
      
      {/* Hero Section */}
      <section className="vietnam-hero">
        <div className="vietnam-hero-content">
          <h1>Study MBBS in Vietnam</h1>
          <p>
            Vietnam is gaining popularity among Indian students for MBBS due to its affordable tuition fees, English-medium medical programs, and globally recognized degrees. Vietnamese medical universities provide modern infrastructure, practical clinical training, and exposure to diverse healthcare settings. MBBS degrees from Vietnam are recognized by WHO and NMC in India, making it a viable option for aspiring doctors.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img src="/assets/vietnam/vietnam-hero.jpg" alt="MBBS in Vietnam" className="hero-img" />
      </section>

      {/* Quick Stats */}
     <section className="stats-section">
  <h2>Vietnam at a Glance</h2>
  <div className="stats-grid">
    {[
      "10+ medical universities recognized by NMC/WHO",
      "Tuition Fees: $4,000–6,000/year (~₹3.5–5 lakh)",
      "Living Costs: $2,500–4,000/year (~₹2–3.5 lakh)",
      "Language of Instruction: English and Vietnamese (English MBBS available)",
      "Duration of MBBS: 6 years including internship",
      "Degrees recognized by WHO, NMC, FAIMER",
    ].map((text, index) => (
      <div key={index} className="stat-card">{text}</div>
    ))}
  </div>
</section>


      {/* Why MBBS */}
      <section className="vietnam-why">
        <h2>Why Choose Vietnam?</h2>
        <ul>
          <li>Affordable tuition fees and low living costs.</li>
          <li>English-medium MBBS programs suitable for Indian students.</li>
          <li>Modern hospitals and practical exposure included in curriculum.</li>
          <li>Globally recognized degree valid for practice in India after NMC screening.</li>
          <li>Safe, student-friendly, and multicultural environment.</li>
          <li>Opportunities for internships and research during medical studies.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="vietnam-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-taught MBBS eliminates language barriers.</li>
          <li>Cost-effective education with strong academic standards.</li>
          <li>Eligible for FMGE/NExT exam in India.</li>
          <li>Exposure to international healthcare systems and clinical experience.</li>
          <li>Scholarships or fee concessions available in some universities.</li>
        </ul>
      </section>

     {/* Top Medical Universities */}
<section className="vietnam-universities">
  <h2>Top Medical Universities in Vietnam</h2>
  <div className="universities-grid">
    {[
      { name: "Hanoi Medical University", img: "/assets/vietnam/universities/hanoi.jpg" },
      { name: "University of Medicine and Pharmacy Ho Chi Minh City", img: "/assets/vietnam/universities/hcmc.jpg" },
      { name: "Hue University of Medicine and Pharmacy", img: "/assets/vietnam/universities/hue.jpg" },
      { name: "Can Tho University of Medicine and Pharmacy", img: "/assets/vietnam/universities/cantho.jpg" },
      { name: "Hai Phong University of Medicine and Pharmacy", img: "/assets/vietnam/universities/haiphong.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Studying & Living */}
      <section className="vietnam-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Tuition Fees: $4,000 – $6,000/year (~₹3.5–5 lakh)<br />
          Living Expenses: $2,500 – $4,000/year (~₹2–3.5 lakh)<br />
          Total MBBS Cost (6 years): $40,000 – $45,000 (~₹33–37 lakh)
        </p>
      </section>

      {/* Career Prospects */}
      <section className="vietnam-career">
        <h2>Career Prospects After MBBS</h2>
        <ul>
          <li>Eligible to appear for FMGE/NExT in India to practice medicine.</li>
          <li>Opportunities for postgraduate studies in Vietnam, India, or other countries.</li>
          <li>Exposure to modern hospitals enhances global career prospects.</li>
          <li>Opportunities to work in hospitals, research centers, or pursue specialization abroad.</li>
        </ul>
      </section>

      {/* Documents & Visa */}
      <section className="vietnam-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>10+2 marksheet with Physics, Chemistry, Biology</li>
          <li>NEET qualification certificate</li>
          <li>Passport copy</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Admission letter from Vietnamese university</li>
          <li>Proof of sufficient funds (~$4,000/year)</li>
          <li>Health and travel insurance</li>
          <li>Visa application form</li>
          <li>Passport-sized photographs</li>
        </ul>
        <h2>Student Visa for Vietnam</h2>
        <p>
          Type: Student Visa<br />
          Requirements: Admission letter, proof of funds, passport, insurance<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Limited; internships allowed as part of curriculum
        </p>
      </section>
      {/* <section className="vietnam-student-life">
  <h2>Student Life</h2>
  <p>
    Vietnam offers a unique student lifestyle with affordable living, rich cultural traditions,
    vibrant street food, friendly communities, and opportunities to explore beautiful landscapes
    from bustling cities to serene countryside.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/vietnam/vietnam-student-life.jpg" alt="Student Life in Vietnam" />
  </div>
</section> */}


      {/* FAQs */}
      <section className="vietnam-faq">
        <h2>FAQs About Studying MBBS in Vietnam</h2>
        <div className="faq-item">
          <h4>Is NEET mandatory for Indian students?</h4>
          <p>Yes, NEET qualification is required for admission.</p>
        </div>
        <div className="faq-item">
          <h4>Is English-taught MBBS valid in India?</h4>
          <p>Yes, graduates are eligible for FMGE/NExT to practice in India.</p>
        </div>
        <div className="faq-item">
          <h4>What is the cost of living?</h4>
          <p>$2,500–$4,000/year including accommodation, food, and transport.</p>
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

      <EnrollSection country="Vietnam" />

      <section className="vietnam-summary">
        <p>
          Planning to pursue MBBS in Vietnam? Our consultancy assists Indian students with university selection, NEET compliance, visa processing, and career planning for a smooth and successful medical education journey.
        </p>
      </section>
    </div>
  );
}

export default VietnamMBBS;