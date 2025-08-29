import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function ChinaMBBS() {
  const stats = [
    "50+ medical universities recognized by NMC/WHO",
    "Tuition Fees: $3,500–8,000/year (~₹3–6.5 lakh)",
    "Living Costs: $2,500–5,000/year (~₹2–4 lakh)",
    "Language of Instruction: English and Chinese (English MBBS available)",
    "Duration of MBBS: 6 years including internship",
    "Degrees recognized by WHO, NMC, FAIMER",
  ];



  return (
    <div className="china-container">
      {/* Hero Section */}
      <section className="china-hero">
        <div className="china-hero-content">
          <h1>Study MBBS in China</h1>
          <p>
            China is one of the top choices for Indian students pursuing MBBS due to its affordable tuition, globally recognized medical degrees, modern infrastructure, and English-medium programs. Chinese medical universities follow an international curriculum and provide hands-on clinical training in advanced hospitals. MBBS from China is recognized by WHO and NMC in India, making it an attractive destination for aspiring doctors.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img src="/assets/china/china-hero.jpg" alt="MBBS in China" className="hero-img" />
      </section>

      {/* Quick Stats */}
      <section className="china-stats">
        <h2>China at a Glance</h2>
        <div className="stats-grid">
          {stats.map((text, index) => (
            <div className="stat-card" key={index}>{text}</div>
          ))}
        </div>
      </section>

      {/* Why China */}
      <section className="china-why">
        <h2>Why Choose China?</h2>
        <ul>
          <li>Affordable tuition and low living costs compared to Western countries.</li>
          <li>English-taught MBBS programs suitable for Indian students.</li>
          <li>Modern teaching hospitals providing practical exposure.</li>
          <li>Globally recognized degrees valid for practice in India after NMC screening.</li>
          <li>Safe and multicultural environment with growing Indian student community.</li>
          <li>Opportunities for clinical training and research in top hospitals.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="china-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium MBBS eliminates language barriers.</li>
          <li>Cost-effective education with high-quality training.</li>
          <li>Graduates eligible for FMGE/NExT exam in India.</li>
          <li>Exposure to Chinese medical system and modern healthcare facilities.</li>
          <li>Scholarships offered by Chinese government and universities.</li>
        </ul>
      </section>

     {/* ✅ Top Medical Universities */}
<section className="china-universities">
  <h2>Top Medical Universities in China</h2>
  <div className="universities-grid">
    {[
      { name: "Peking University Health Science Center", img: "/assets/china/universities/u1.jpg" },
      { name: "Fudan University", img: "/assets/china/universities/u2.jpg" },
      { name: "Shanghai Jiao Tong University School of Medicine", img: "/assets/china/universities/u3.jpg" },
      { name: "Zhejiang University School of Medicine", img: "/assets/china/universities/u4.jpg" },
      { name: "Capital Medical University", img: "/assets/china/universities/u5.jpg" },
      { name: "Tianjin Medical University", img: "/assets/china/universities/u6.jpg" },
      { name: "Southern Medical University", img: "/assets/china/universities/u7.jpg" },
      { name: "Wuhan University", img: "/assets/china/universities/u8.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost */}
      <section className="china-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Tuition Fees: $3,500 – $8,000/year (~₹3–6.5 lakh)<br />
          Living Expenses: $2,500 – $5,000/year (~₹2–4 lakh)<br />
          Total MBBS Cost (6 years): $35,000 – $45,000 (~₹30–37 lakh)
        </p>
      </section>

      {/* Career */}
      <section className="china-career">
        <h2>Career Prospects After MBBS</h2>
        <ul>
          <li>Eligible to appear for FMGE/NExT in India to practice medicine.</li>
          <li>Opportunities for postgraduate studies in China, India, or other countries.</li>
          <li>Exposure to advanced hospitals enhances global career prospects.</li>
          <li>Possibility of research and specialization in clinical or biomedical fields.</li>
        </ul>
      </section>

      {/* Documents & Visa */}
      <section className="china-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>10+2 marksheet with Physics, Chemistry, Biology</li>
          <li>NEET qualification certificate</li>
          <li>Passport copy</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Admission letter from Chinese university</li>
          <li>Proof of sufficient funds (~$5,000/year)</li>
          <li>Health and travel insurance</li>
          <li>Visa application form</li>
          <li>Passport-sized photographs</li>
        </ul>

        <h2>Student Visa for China</h2>
        <p>
          Type: X1 (study  6 months) / X2 (study ≤ 6 months)<br />
          Requirements: Admission letter, proof of funds, passport, health certificate<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Limited; internships allowed as part of curriculum
        </p>
      </section>
      <section className="china-mbbs-student-life">
  <h2>Student Life in China</h2>
  <p>
    China offers a dynamic and student-friendly environment with modern campuses, 
    multicultural communities, and a rich cultural heritage. MBBS students can enjoy internships, 
    networking opportunities, festivals, and explore China’s historic cities and natural landscapes.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img 
      src="/assets/china/china-mbbs-student-life.jpg" 
      alt="Student Life in China" 

    />
  </div>
</section>


      {/* FAQs */}
      <section className="china-faq">
        <h2>FAQs About Studying MBBS in China</h2>
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
          <p>$2,500–$5,000/year (~₹2–4 lakh) including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, Chinese government and universities provide scholarships for international students.</p>
        </div>
        <div className="faq-item">
          <h4>How long is the MBBS course?</h4>
          <p>6 years including internship.</p>
        </div>
      </section>

      {/* Enroll Section */}
      <EnrollSection country="China" />

      {/* Summary */}
      <section className="china-summary">
        <p>
          Planning to pursue MBBS in China? Our consultancy guides Indian students through university selection, NEET compliance, visa processing, and career planning for a successful medical education journey.
        </p>
      </section>
    </div>
  );
}

export default ChinaMBBS;
