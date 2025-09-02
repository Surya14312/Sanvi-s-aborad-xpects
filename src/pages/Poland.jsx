import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Poland() {
  return (
    <div className="poland-container">
      {/* Hero Section */}
      <section className="poland-hero">
        <div className="poland-hero-content">
          <h1>Study in Poland</h1>
          <p>
            Poland has become an attractive destination for international students due to its
            affordable education, growing number of English-taught programs, and strategic location
            in Europe. Polish universities offer globally recognized degrees, high-quality education,
            and excellent opportunities in STEM, medicine, business, and humanities. With a low cost
            of living and vibrant student life, Poland is ideal for Indian students seeking quality
            education in Europe.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/poland/poland-hero.jpg"
          alt="Study in Poland"
          className="poland-hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>Poland at a Glance</h2>
  <div className="stats-grid">
    {[
      "450+ Universities & Institutions (18 public + private)",
      "Tuition Fees: €2,000–6,000/year (medical), €2,000–5,000/year (other programs)",
      "Living Costs: €4,500–6,500/year (~₹4–5.5 lakh)",
      "60,000+ International Students",
      "Language of Instruction: Polish & English",
      "Post-Study Work: 1-year residence permit to seek employment",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study in Poland */}
      <section className="poland-why">
        <h2>Why Choose Poland?</h2>
        <ul>
          <li>Affordable tuition and living costs compared to Western Europe.</li>
          <li>High-quality education recognized worldwide.</li>
          <li>Strong focus on STEM, medical, business, and IT programs.</li>
          <li>English-taught programs widely available, especially in MBBS and engineering.</li>
          <li>Access to EU countries for travel and career opportunities.</li>
          <li>Vibrant student life with cultural and social integration opportunities.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="poland-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Cost-effective education comparable to Western Europe.</li>
          <li>English-taught MBBS programs with WHO and UNESCO recognition.</li>
          <li>Part-time work opportunities and post-study work permits.</li>
          <li>Learn European languages and explore the EU.</li>
          <li>Scholarships from universities and government programs.</li>
        </ul>
      </section>

      {/* Top Universities */}
<section className="poland-universities">
  <h2>Top Universities in Poland</h2>
  <div className="universities-grid">
    {[
      { name: "University of Warsaw", img: "/assets/poland/universities/warsaw.jpg" },
      { name: "Jagiellonian University", img: "/assets/poland/universities/jagiellonian.jpg" },
      { name: "Warsaw University of Technology", img: "/assets/poland/universities/wut.jpg" },
      { name: "Adam Mickiewicz University", img: "/assets/poland/universities/amu.jpg" },
      { name: "Wroclaw University of Science and Technology", img: "/assets/poland/universities/wust.jpg" },
      { name: "Medical University of Warsaw", img: "/assets/poland/universities/muw.jpg" },
      { name: "Medical University of Lodz", img: "/assets/poland/universities/mul.jpg" },
      { name: "Nicolaus Copernicus University", img: "/assets/poland/universities/ncu.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Popular Courses */}
      <section className="poland-courses">
        <h2>Popular Courses in Poland</h2>
        <div className="course-grid">
          {[
            { name: "MBBS / Medicine", img: "/assets/poland/courses/mbbs.jpg" },
            { name: "Engineering (Mechanical, Civil, Electrical, IT)", img: "/assets/poland/courses/engineering.jpg" },
            { name: "Computer Science and Data Science", img: "/assets/poland/courses/computer.jpg" },
            { name: "Business Administration and Management", img: "/assets/poland/courses/business.jpg" },
            { name: "Finance and Economics", img: "/assets/poland/courses/finance.jpg" },
            { name: "International Relations and Law", img: "/assets/poland/courses/law.jpg" },
            { name: "Biotechnology and Life Sciences", img: "/assets/poland/courses/biotech.jpg" },
            { name: "Pharmacy", img: "/assets/poland/courses/pharmacy.jpg" },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost of Study & Scholarships */}
      <section className="poland-cost">
        <div className="cost-container">
          <div className="cost-info">
            <h2>Cost of Studying and Living</h2>
            <p>
              MBBS / Medical: €6,000 – 8,000/year (~₹5.5–7 lakh)<br />
              Other Undergraduate: €2,000 – 5,000/year (~₹1.8–4.5 lakh)<br />
              Postgraduate: €3,000 – 7,000/year (~₹2.5–6 lakh)<br />
              Living Expenses: €350–550/month (~₹30,000–50,000)
            </p>
            <h3>Scholarships</h3>
            <ul>
              <li>University-specific scholarships</li>
              <li>Government scholarship programs</li>
            </ul>
          </div>
          {/* <div className="cost-img-container">
            <img src="/assets/poland/scholarship.jpg" alt="Scholarships in Poland" />
          </div> */}
        </div>
      </section>

      {/* Career Prospects */}
      <section className="poland-career">
        <h2>Career Prospects in Poland</h2>
        <p>
          Strong demand for STEM, IT, medical, and business graduates.<br />
          International students can stay for 12 months post-graduation to seek employment.<br />
          Opportunities to work in Poland or other EU countries.<br />
          Multinational companies in Warsaw, Krakow, and Wroclaw actively hire skilled graduates.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="poland-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL for non-Polish programs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>University acceptance letter</li>
          <li>Proof of sufficient funds (~€4,500/year)</li>
          <li>Health insurance coverage</li>
          <li>Accommodation proof</li>
          <li>Completed visa application form</li>
        </ul>

        <h2>Student Visa for Poland</h2>
        <p>
          Type: National Long-Term Visa (Type D)<br />
          Requirements: Admission letter, proof of funds, health insurance, passport<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 6–8 weeks<br />
          Work Rights: Part-time during studies, full-time during holidays
        </p>
      </section>
      {/* <section className="dubai-student-life">
  <h2>Student Life in Poland</h2>
  <p>
    poland offers a modern and cosmopolitan student lifestyle with world-class campuses, 
    multicultural communities, exciting internships, and vibrant city life. 
    Students enjoy stunning architecture, global networking opportunities, and a safe, dynamic environment.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/poland/poland-student-life.jpg" alt="Student Life in Dubai" />
  </div>
</section> */}


      {/* FAQs */}
      <section className="poland-faq">
        <h2>FAQs About Studying in Poland</h2>
        <div className="faq-item">
          <h4>Are MBBS degrees in Poland recognized in India?</h4>
          <p>Yes, degrees from WHO and UNESCO-recognized universities are valid for licensing exams in India.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, part-time work is allowed; students can also apply for internships.</p>
        </div>
        <div className="faq-item">
          <h4>How much is the cost of living in Poland?</h4>
          <p>€350–€550/month including accommodation and food.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available for Indian students?</h4>
          <p>Yes, universities and government programs offer scholarships for meritorious students.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Poland after graduation?</h4>
          <p>Yes, students can apply for a 12-month residence permit to seek employment.</p>
        </div>
      </section>

      {/* <EnrollSection country="Poland" /> */}

   <section
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "25px 30px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
    fontFamily: '"Segoe UI", Tahoma, sans-serif',
    color: "#333",
    lineHeight: 1.6,
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      marginBottom: "15px",
      color: "#003566",
      fontWeight: "700",
    }}
  >
    Planning to study in Poland?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy assists Indian students with university selection, MBBS
    admissions, visa applications, and career planning to make your study abroad
    journey smooth and affordable.
  </p>
  <button
    onClick={() => (window.location.href = "/contact")}
    style={{
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#fff",
      background: "#003566",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.background = "#002244")}
    onMouseOut={(e) => (e.currentTarget.style.background = "#003566")}
  >
    Apply Now
  </button>
</section>

    </div>
  );
}

export default Poland;