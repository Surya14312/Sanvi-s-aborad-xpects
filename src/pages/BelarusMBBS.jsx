import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function BelarusMBBS() {
  return (
    <div className="belarus-container">
      {/* ✅ Hero Section */}
      <section className="belarus-hero">
        <div className="belarus-hero-content">
          <h1>Study MBBS in Belarus</h1>
          <p>
            Belarus is an emerging destination for Indian students pursuing MBBS due to its affordable tuition fees, globally recognized medical programs, and English-medium instruction. The country emphasizes practical learning with modern hospital exposure and a strong foundation in theoretical knowledge. Belarusian medical degrees are recognized by WHO and NMC, making it a viable option for Indian students aiming to practice medicine in India or abroad.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/belarus/belarus-hero.jpg"
          alt="MBBS in Belarus"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section style={{ padding: "80px 20px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          
        >
          Belarus at a Glance
        </h2>

        <div
          
        >
          {[
            "5–6 medical universities recognized by NMC/WHO",
            "Tuition Fees: $4,000–5,500/year (~₹3.5–4.5 lakh)",
            "Living Costs: $2,500–4,000/year (~₹2–3.5 lakh)",
            "Language of Instruction: English and Russian (English-taught MBBS)",
            "Duration of MBBS: 5 years 9 months – 6 years including internship",
            "Degrees recognized by WHO, NMC, FAIMER",
          ].map((text, index) => (
            <div
              key={index}
              
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Why MBBS in Belarus */}
      <section className="belarus-why">
        <h2>Why Choose Belarus?</h2>
        <ul>
          <li>Affordable tuition fees and low living costs compared to Europe and Asia.</li>
          <li>English-medium MBBS programs suitable for Indian students.</li>
          <li>Modern hospitals and practical exposure included in curriculum.</li>
          <li>Globally recognized medical degree valid for practice in India after NMC licensing.</li>
          <li>Safe, student-friendly environment with a growing international student community.</li>
          <li>Opportunities for internships and research in medical science.</li>
        </ul>
      </section>

      {/* ✅ Benefits for Indian Students */}
      <section className="belarus-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium MBBS eliminates language barriers.</li>
          <li>Cost-effective medical education with high-quality training.</li>
          <li>Graduates eligible for FMGE/NExT exam in India.</li>
          <li>Opportunity to gain international clinical experience.</li>
          <li>Scholarships or fee concessions offered by some universities.</li>
        </ul>
      </section>

     {/* ✅ Top Medical Universities */}
<section className="belarus-universities">
  <h2>Top Medical Universities in Belarus</h2>
  <div className="universities-grid">
    {[
      { name: "Belarusian State Medical University (Minsk)", img: "/assets/belarus/universities/bsmu.jpg" },
      { name: "Gomel State Medical University", img: "/assets/belarus/universities/gomel.jpg" },
      { name: "Vitebsk State Medical University", img: "/assets/belarus/universities/vitebsk.jpg" },
      { name: "Grodno State Medical University", img: "/assets/belarus/universities/grodno.jpg" },
      { name: "Mogilev State Medical University", img: "/assets/belarus/universities/mogilev.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Cost of Studying & Living */}
      <section className="belarus-cost" >
        <h2>Cost of Studying and Living</h2>
        <p>
          Tuition Fees: $4,000 – $5,500/year (~₹3.5–4.5 lakh)<br />
          Living Expenses: $2,500 – $4,000/year (~₹2–3.5 lakh)<br />
          Total MBBS Cost (5.8–6 years): $35,000 – $42,000 (~₹30–35 lakh)
        </p>
      </section>

      {/* ✅ Career Prospects */}
      <section className="belarus-career" >
        <h2>Career Prospects After MBBS</h2>
        <ul>
          <li>Eligible to appear for FMGE/NExT exam in India.</li>
          <li>Opportunities for postgraduate studies in Belarus or other countries.</li>
          <li>Exposure to European medical practices enhances global career prospects.</li>
          <li>Option to work in hospitals, research centers, or pursue specialization abroad.</li>
        </ul>
      </section>

      {/* ✅ Documents & Visa */}
      <section className="belarus-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>10+2 marksheet with Physics, Chemistry, Biology</li>
          <li>NEET qualification certificate</li>
          <li>Passport copy</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Admission letter from university</li>
          <li>Proof of sufficient funds (~$4,000/year)</li>
          <li>Health and travel insurance</li>
          <li>Visa application form</li>
          <li>Recent passport-sized photographs</li>
        </ul>

        <h2>Student Visa for Belarus</h2>
        <p>
          Type: Student Visa<br />
          Requirements: University admission, proof of funds, passport, insurance<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Limited; internships as part of curriculum
        </p>
      </section>
      <section className="belarus-mbbs-student-life">
  <h2>Student Life in Belarus</h2>
  <p>
    Belarus offers a safe, affordable, and student-friendly environment with modern campuses, 
    multicultural communities, and vibrant student life. MBBS students can enjoy internships, 
    networking opportunities, cultural events, and explore the country’s rich history and landscapes.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img 
      src="/images/belarus-mbbs-student-life.jpg" 
      alt="Student Life in Belarus" 
      
    />
  </div>
</section>


      {/* ✅ FAQs */}
      <section className="belarus-faq">
        <h2>FAQs About Studying MBBS in Belarus</h2>
        <div className="faq-item">
          <h4>Is NEET mandatory for Indian students?</h4>
          <p>Yes, NEET qualification is required for admission.</p>
        </div>
        <div className="faq-item">
          <h4>Is English taught MBBS valid in India?</h4>
          <p>Yes, graduates can appear for FMGE/NExT to practice in India.</p>
        </div>
        <div className="faq-item">
          <h4>What is the cost of living in Belarus?</h4>
          <p>$2,500 – $4,000/year including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, some universities offer scholarships or fee concessions.</p>
        </div>
        <div className="faq-item">
          <h4>How long is the MBBS course?</h4>
          <p>5 years 9 months – 6 years including internship.</p>
        </div>
      </section>

      <EnrollSection country="Belarus" />

      <section className="belarus-summary" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <p>
          Planning to pursue MBBS in Belarus? Our consultancy assists Indian students with university selection, NEET guidance, visa processing, and career planning to ensure a smooth and successful medical education journey.
        </p>
      </section>
    </div>
  );
}

export default BelarusMBBS;
