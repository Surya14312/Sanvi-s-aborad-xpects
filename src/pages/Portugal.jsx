// src/pages/Portugal.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Portugal() {
  return (
    <div className="portugal-container">
      
      {/* Hero Section */}
      <section className="portugal-hero">
        <div className="portugal-hero-content">
          <h1>Study in Portugal</h1>
          <p>
            Portugal is an emerging destination for international students due to its high-quality
            education, affordable tuition, and vibrant culture. Known for its universities with
            strong research output, Portugal offers a safe, multicultural, and welcoming environment
            for students. The country’s strategic location in Europe, coupled with English-taught
            programs, makes it an attractive choice for Indian students seeking quality education abroad.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/portugal/portugal-hero.jpg"
          alt="Study in Portugal"
          className="portugal-hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>Portugal at a Glance</h2>
  <div className="stats-grid">
    {[
      "50+ Universities & Institutions (public/private universities, polytechnics, business schools)",
      "Tuition Fees: €1,500–5,000/year (public), €5,000–15,000/year (private)",
      "Living Costs: €7,000–12,000/year (~₹6–10 lakh)",
      "50,000+ International Students",
      "Language of Instruction: Portuguese & English",
      "Post-Study Work: Stay-back permit for up to 12 months",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study in Portugal */}
      <section className="portugal-why">
        <h2>Why Choose Portugal?</h2>
        <ul>
          <li>Affordable tuition and living costs compared to Western Europe.</li>
          <li>Increasing availability of English-taught programs.</li>
          <li>Safe and student-friendly environment with a rich cultural experience.</li>
          <li>Strong focus on research, STEM, business, and arts programs.</li>
          <li>Opportunities for internships and part-time work.</li>
          <li>Easy access to EU countries for travel and employment.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="portugal-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Study in high-quality universities at affordable costs.</li>
          <li>Scholarships: Government of Portugal & university awards.</li>
          <li>Work up to 20 hours/week during studies and full-time during vacations.</li>
          <li>Exposure to European industries and internships.</li>
          <li>Option to stay 12 months after graduation to seek employment.</li>
        </ul>
      </section>

    {/* Top Universities */}
<section className="portugal-universities">
  <h2>Top Universities in Portugal</h2>
  <div className="universities-grid">
    {[
      { name: "University of Lisbon", img: "/assets/portugal/universities/aveiro.jpg" },
      { name: "University of Porto", img: "/assets/portugal/universities/porto.jpg" },
      { name: "University of Coimbra", img: "/assets/portugal/universities/coimbra.jpg" },
      { name: "Nova University Lisbon", img: "/assets/portugal/universities/nova.jpg" },
      { name: "University of Minho", img: "/assets/portugal/universities/minho.jpg" },
      { name: "ISCTE – University Institute of Lisbon", img: "/assets/portugal/universities/iscte.jpg" },
      { name: "Catholic University of Portugal", img: "/assets/portugal/universities/catholic.jpg" },
      { name: "University of Aveiro", img: "/assets/portugal/universities/aveiro.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Popular Courses */}
      <section className="portugal-courses">
        <h2>Popular Courses in Portugal</h2>
        <div className="course-grid">
          {[
           { name: "Business & Management", img: "/assets/portugal/courses/business-administration.jpg" },
// { name: "Management", img: "/assets/portugal/courses/management.jpg" },
{ name: "Computer Science", img: "/assets/portugal/courses/computer-science.jpg" },
{ name: "Data Science", img: "/assets/portugal/courses/data-science.jpg" },
{ name: "Civil Engineering", img: "/assets/portugal/courses/civil.jpg" },
{ name: "Mechanical Engineering", img: "/assets/portugal/courses/mechanical.jpg" },
{ name: "Electrical Engineering", img: "/assets/portugal/courses/electrical.jpg" },
{ name: "IT", img: "/assets/portugal/courses/software.jpg" },
{ name: "Hospitality Management", img: "/assets/portugal/courses/hospitality.jpg" },
{ name: "Tourism Management", img: "/assets/portugal/courses/tourism.jpg" },
{ name: "Finance", img: "/assets/portugal/courses/finance.jpg" },
{ name: "Accounting", img: "/assets/portugal/courses/accounting.jpg" },
{ name: "Arts", img: "/assets/portugal/courses/arts.jpg" },
{ name: "Design", img: "/assets/portugal/courses/design.jpg" },
{ name: "Architecture", img: "/assets/portugal/courses/architecture.jpg" },
{ name: "International Relations", img: "/assets/portugal/courses/international-relations.jpg" },
{ name: "Political Science", img: "/assets/portugal/courses/political-science.jpg" },
{ name: "Life Sciences", img: "/assets/portugal/courses/life-sciences.jpg" },
{ name: "Biotechnology", img: "/assets/portugal/courses/biotechnology.jpg" },

          ].map((course, i) => (
                    <Link
                      to={`/courses/Portugal/${course.name.toLowerCase().replace(/\s+/g, " ").trim()}`}
                      key={i}
                      className="course-card"
                    >
                      <img src={course.img} alt={course.name} />
                      <p>{course.name}</p>
                    </Link>
                  ))}
        </div>
      </section>

      {/* Cost & Scholarships */}
      <section className="portugal-cost">
        <div className="cost-container">
          <div className="cost-info">
            <h2>Cost of Studying and Living</h2>
            <p>
              Undergraduate: €1,500 – 4,500/year (~₹1.5–4 lakh)<br />
              Postgraduate: €3,000 – 15,000/year (~₹2.5–12 lakh)<br />
              Living Expenses: €600–1,000/month (~₹50,000–85,000)
            </p>
            <h3>Scholarships</h3>
            <ul>
              <li>Government of Portugal scholarships</li>
              <li>University-specific awards</li>
            </ul>
          </div>
          {/* <div className="cost-img-container">
            <img src="/assets/portugal/scholarships.jpg" alt="Scholarships in Portugal" />
          </div> */}
        </div>
      </section>

      {/* Career Prospects */}
      <section className="portugal-career">
        <h2>Career Prospects in Portugal</h2>
        <p>
          Growing demand for graduates in business, IT, engineering, hospitality, and tourism.<br />
          International students can stay up to 12 months post-graduation to search for employment.<br />
          Opportunities with multinational companies in Lisbon, Porto, and other major cities.<br />
          Skills in English and Portuguese enhance employability in European job markets.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="portugal-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English proficiency (IELTS/TOEFL)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>University acceptance letter</li>
          <li>Proof of sufficient funds (~€7,000/year)</li>
          <li>Proof of accommodation</li>
          <li>Health insurance coverage</li>
          <li>Completed visa application form</li>
        </ul>

        <h2>Student Visa for Portugal</h2>
        <p>
          Type: Long-term Student Visa (Type D)<br />
          Requirements: Admission letter, proof of funds, health insurance, passport<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Part-time work allowed during studies (up to 20 hours/week)
        </p>
      </section>
      {/* <section className="portugal-student-life">
  <h2>Student Life in Portugal</h2>
  <p>
    Portugal offers a welcoming student lifestyle with historic universities, affordable living,
    sunny weather, delicious cuisine, and a relaxed Mediterranean culture. 
    Students enjoy festivals, cultural traditions, and opportunities to explore beautiful coastlines and cities.
  </p>

  
  <div className="student-life-image">
    <img src="/assets/portugal/portugal-student-life.jpg" alt="Student Life in Portugal" />
  </div>
</section> */}


      {/* FAQs */}
      <section className="portugal-faq">
        <h2>FAQs About Studying in Portugal</h2>
        <div className="faq-item">
          <h4>Are English-taught programs available for international students?</h4>
          <p>Yes, many universities offer undergraduate and postgraduate programs in English.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 20 hours/week during term and full-time during holidays.</p>
        </div>
        <div className="faq-item">
          <h4>How much is the cost of living?</h4>
          <p>€600–1,000/month (~₹50,000–85,000), including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, both government and university scholarships are available for meritorious international students.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Portugal after graduation?</h4>
          <p>Yes, international students can apply for a stay-back permit for up to 12 months to seek employment.</p>
        </div>
      </section>

      {/* <EnrollSection country="Portugal" /> */}

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
    Planning to study in Portugal?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy guides Indian students through admissions, scholarships,
    visa processing, and career planning to make your study abroad journey seamless.
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

export default Portugal;