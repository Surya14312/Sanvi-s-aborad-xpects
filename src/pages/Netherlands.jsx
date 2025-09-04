import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Netherlands() {
  return (
    <div className="netherlands-container">
      {/* Hero Section */}
      <section className="netherlands-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Study in Netherlands</h1>
            <p>
              The Netherlands is one of Europe’s top study destinations, known
              for its innovative teaching style, world-class universities, and
              multicultural environment. With over 2,000 English-taught
              programs, affordable tuition, and strong career opportunities, it
              attracts thousands of international students every year.
            </p>
            <Link to="/contact" className="apply-btn">
              Apply Now
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="/assets/netherlands/netherlands-banner.jpg"
              alt="Study in Netherlands"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>Netherlands at a Glance</h2>
  <div className="stats-grid">
    {[
      "50+ Universities & Institutions (13 Research, 36 Applied Sciences)",
      "Top: University of Amsterdam, TU Delft, Utrecht, Erasmus, Leiden",
      "Tuition: €6,000 – €20,000/year (~₹5.5–18 lakh)",
      "Living: €800 – €1,200/month (~₹70K – 1 lakh)",
      "115,000+ International Students from 160+ countries",
      "2,000+ English-taught programs",
      "1-Year Orientation Visa after graduation",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study */}
      <section className="netherlands-why">
        <h2>Why Choose Netherlands?</h2>
        <ul>
          <li>Globally recognized research & applied science universities</li>
          <li>2,000+ English-taught programs</li>
          <li>Affordable tuition compared to UK & USA</li>
          <li>One-year post-study Orientation Visa</li>
          <li>
            Strong industries: Engineering, Logistics, Agriculture, Finance, IT
          </li>
          <li>Safe, multicultural, inclusive society</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="netherlands-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Top-ranked universities with affordable tuition</li>
          <li>Programs focused on employability & practical training</li>
          <li>High demand in tech, logistics, finance</li>
          <li>Easy travel access to other EU countries</li>
          <li>Scholarship opportunities for Indian students</li>
        </ul>
      </section>

     {/* Top Universities */}
{/* Top Universities in Netherlands */}
<section className="netherlands-universities">
  <h2>Top Universities in Netherlands</h2>
  <div className="universities-grid">
    {[
      { name: "University of Amsterdam", img: "/assets/netherlands/universities/u1.jpg" },
      { name: "Delft University of Technology (TU Delft)", img: "/assets/netherlands/universities/u2.jpg" },
      { name: "Utrecht University", img: "/assets/netherlands/universities/u3.jpg" },
      { name: "Erasmus University Rotterdam", img: "/assets/netherlands/universities/u4.jpg" },
      { name: "Leiden University", img: "/assets/netherlands/universities/u5.jpg" },
      { name: "Vrije Universiteit Amsterdam", img: "/assets/netherlands/universities/u6.jpg" },
      { name: "Wageningen University & Research", img: "/assets/netherlands/universities/u7.jpg" },
      { name: "Eindhoven University of Technology", img: "/assets/netherlands/universities/u8.jpg" },
      { name: "Maastricht University", img: "/assets/netherlands/universities/u9.jpg" }
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img 
          src={uni.img} 
          alt={uni.name} 
          onError={(e) => { e.target.onerror = null; e.target.src = "/assets/destinations/default.jpg"; }}
        />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>




     {/* Popular Courses */}
<section className="netherlands-courses">
  <h2>Popular Courses in Netherlands</h2>
  <div className="course-grid">
    {[
      { name: "Business Administration", img: "/assets/netherlands/courses/business-administration.jpg" },
// { name: "Management", img: "/assets/netherlands/courses/management.jpg" },
{ name: "Civil Engineering", img: "/assets/netherlands/courses/civil.jpg" },
{ name: "Mechanical Engineering", img: "/assets/netherlands/courses/mechanical.jpg" },
{ name: "Electrical Engineering", img: "/assets/netherlands/courses/electrical.jpg" },
{ name: "Aerospace Engineering", img: "/assets/netherlands/courses/aerospace.jpg" },
{ name: "Computer Science", img: "/assets/netherlands/courses/computer-science.jpg" },
{ name: "Data Science", img: "/assets/netherlands/courses/data-science.jpg" },
{ name: "Logistics", img: "/assets/netherlands/courses/logistics.jpg" },
{ name: "Supply Chain Management", img: "/assets/netherlands/courses/supply-chain.jpg" },
{ name: "Environmental Science", img: "/assets/netherlands/courses/environmental-science.jpg" },
{ name: "Sustainability", img: "/assets/netherlands/courses/sustainability.jpg" },
{ name: "Agriculture", img: "/assets/netherlands/courses/agriculture.jpg" },
{ name: "Food Technology", img: "/assets/netherlands/courses/food-technology.jpg" },
{ name: "Finance", img: "/assets/netherlands/courses/finance.jpg" },
{ name: "Economics", img: "/assets/netherlands/courses/economics.jpg" },
{ name: "Artificial Intelligence", img: "/assets/netherlands/courses/ai.jpg" },
{ name: "Law", img: "/assets/netherlands/courses/law.jpg" },
{ name: "International Relations", img: "/assets/netherlands/courses/international-relations.jpg" },

    ].map((course, i) => (
              <Link
                to={`/courses/Netherlands/${course.name.toLowerCase().replace(/\s+/g, " ").trim()}`}
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
      <section className="netherlands-cost">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>Bachelor’s:</strong> €6,000 – €12,000/year (~₹5.5–11 lakh)
          <br />
          <strong>Master’s:</strong> €8,000 – €20,000/year (~₹7.5–18 lakh)
          <br />
          <strong>Living:</strong> €800 – €1,200/month (~₹70K – 1 lakh)
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>Holland Scholarship</li>
          <li>Orange Tulip Scholarship</li>
          <li>University-specific scholarships</li>
          <li>International student aid programs</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="netherlands-career">
        <h2>Career Prospects</h2>
        <p>
          Major industries: Engineering, Logistics, Finance, Agriculture, IT,
          Renewable Energy. Graduates can apply for a 1-year Orientation Visa to
          seek jobs. Cities like Amsterdam, Rotterdam, Eindhoven, Utrecht have
          strong job markets.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="netherlands-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English test scores (IELTS/TOEFL)</li>
          <li>GRE/GMAT (for some programs)</li>
          <li>SOP, LORs, CV/Resume, Passport copy</li>
          <li>Offer letter</li>
          <li>Proof of funds (~€950/month for living expenses)</li>
          <li>Health insurance</li>
        </ul>
        <h2>Student Visa (MVV & Residence Permit)</h2>
        <p>
          Valid for course duration + 1-year Orientation Visa. Processing time:
          2–3 months. Work rights: Up to 16 hrs/week during term & full-time
          during summer.
        </p>
      </section>

      {/* Student Life */}
     {/* <section className="netherlands-student-life">
  <h2>Student Life in the Netherlands</h2>
  <p>
    The Netherlands offers modern campuses, multicultural cities, vibrant cultural festivals,
    and excellent travel opportunities across Europe. Students enjoy part-time jobs, internships,
    and global networking opportunities while experiencing Dutch culture.
  </p>

  
  <div className="student-life-image">
    <img src="/assets/netherlands/netherlands-student-life.jpg" alt="Student Life in the Netherlands" />
  </div>
</section> */}


      {/* FAQs */}
      <section className="netherlands-faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Do I need Dutch to study?</h4>
          <p>No, 2,000+ programs are in English, but Dutch helps for jobs.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>Yes, up to 16 hrs/week during term & full-time in summer.</p>
        </div>
        <div className="faq-item">
          <h4>What is the Orientation Visa?</h4>
          <p>A 1-year visa to find jobs after graduation.</p>
        </div>
        <div className="faq-item">
          <h4>Is it expensive?</h4>
          <p>Cheaper than UK/USA, plus scholarships available.</p>
        </div>
        <div className="faq-item">
          <h4>Can I settle there?</h4>
          <p>
            Yes, many transition from Orientation Visa to work/residence
            permits.
          </p>
        </div>
        
      {/* Enroll CTA */}
      {/* <EnrollSection country="Netherlands" /> */}

        
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
    Looking to study in the Netherlands?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    From world-class universities to excellent job prospects, our consultancy
    helps you with admissions, scholarships, and visa applications.
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

      </section>
      
    </div>
  );
}

export default Netherlands;