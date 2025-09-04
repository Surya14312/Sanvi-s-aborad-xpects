import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Germany() {
  return (
    <div className="germany-container">
      {/* ✅ Hero Section */}
      <section className="germany-hero">
        <div className="germany-hero-content">
          <h1>Study in Germany</h1>
          <p>
            Germany blends world-class education, strong industry linkages, and low
            (often zero) tuition at public universities. It’s a powerhouse for
            Engineering, Computer Science, Data/AI, Automotive, Renewable Energy,
            Business/Analytics, and Applied Sciences, with extensive English-taught
            programs—especially at the master’s level—and excellent post-study work
            options inside the EU.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/germany/germany-banner.jpg"
          alt="Study in Germany"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
     <section
  style={{
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Germany at a Glance</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    }}
  >
    {[
      "400+ Higher Education Institutions",
      "Public Tuition: €0–€400/semester",
      "350k–500k International Students",
      "18-Month Post-Study Job Permit",
    ].map((text, index) => (
      <div
        key={index}
        style={{
          background: "#f7f9fc",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        {text}
      </div>
    ))}
  </div>
</section>


      {/* ✅ Why Study in Germany */}
      <section className="germany-why">
        <h2>Why Choose Germany?</h2>
        <ul>
          <li>Excellent Value: Low/No Tuition & High Academic Standards</li>
          <li>Applied Learning via Universities of Applied Sciences (FH/HAW)</li>
          <li>Industry Access: Automotive, Pharma, Green Tech, Fintech</li>
          <li>English-Taught Programs Available Especially in STEM & Business</li>
          <li>Schengen Mobility & Central EU Location</li>
          <li>Leading Research Institutes & Innovation Hubs</li>
        </ul>
      </section>

      {/* ✅ Benefits for Indian Students */}
      <section className="germany-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Cost advantage vs US/UK/Canada; part-time work allowed</li>
          <li>High ROI Careers in Engineering, IT, Data/AI, Supply Chain</li>
          <li>English-Taught Programs widely available</li>
          <li>Strong Indian Community across major cities</li>
          <li>Recognized degrees & smooth EU pathways</li>
        </ul>
      </section>
{/* ✅ Top Universities */}
<section className="germany-universities">
  <h2>Top Universities in Germany</h2>
  <div className="universities-grid">
    {[
      { name: "TU Munich (TUM)", img: "/assets/germany/universities/tum.jpg" },
      { name: "LMU Munich", img: "/assets/germany/universities/lmu.jpg" },
      { name: "RWTH Aachen University", img: "/assets/germany/universities/rwth.jpg" },
      { name: "Heidelberg University", img: "/assets/germany/universities/heidelberg.jpg" },
      { name: "KIT – Karlsruhe Institute of Technology", img: "/assets/germany/universities/kit.jpg" },
      { name: "TU Berlin", img: "/assets/germany/universities/tuberlin.jpg" },
      { name: "University of Stuttgart", img: "/assets/germany/universities/stuttgart.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Popular Courses */}
      <section className="germany-courses">
        <h2>Popular Courses in Germany</h2>
        <div className="course-grid">
          {[
            { name: "Mechanical Engineering", img: "/assets/germany/courses/mechanical.jpg" },
{ name: "Automotive Engineering", img: "/assets/germany/courses/automotive.jpg" },
{ name: "Electrical Engineering", img: "/assets/germany/courses/electrical.jpg" },
{ name: "Civil Engineering", img: "/assets/germany/courses/civil.jpg" },
{ name: "Aerospace Engineering", img: "/assets/germany/courses/aerospace.jpg" },
{ name: "Computer Science", img: "/assets/germany/courses/computer-science.jpg" },
{ name: "Machine Learning", img: "/assets/germany/courses/ml.jpg" },
{ name: "AI", img: "/assets/germany/courses/ai.jpg" },

{ name: "Data Science", img: "/assets/germany/courses/data-science.jpg" },
{ name: "Cybersecurity", img: "/assets/germany/courses/cybersecurity.jpg" },
{ name: "Business Administration", img: "/assets/germany/courses/business-administration.jpg" },
// { name: "Management", img: "/assets/germany/courses/management.jpg" },
{ name: "MBA", img: "/assets/germany/courses/mba.jpg" },
{ name: "Supply Chain", img: "/assets/germany/courses/supply-chain.jpg" },
{ name: "Renewable Energy", img: "/assets/germany/courses/renewable-energy.jpg" },
{ name: "Environmental Engineering", img: "/assets/germany/courses/environmental-engineering.jpg" },
{ name: "Design", img: "/assets/germany/courses/design.jpg" },
{ name: "Architecture", img: "/assets/germany/courses/architecture.jpg" },
{ name: "Biotechnology", img: "/assets/germany/courses/biotechnology.jpg" },
{ name: "Pharmaceuticals", img: "/assets/germany/courses/pharmaceuticals.jpg" },
{ name: "Mathematics", img: "/assets/germany/courses/mathematics.jpg" },
// { name: "Statistics", img: "/assets/germany/courses/statistics.jpg" },

          ].map((course, i) => (
                    <Link
                      to={`/courses/Germany/${course.name.toLowerCase().replace(/\s+/g, " ").trim()}`}
                      key={i}
                      className="course-card"
                    >
                      <img src={course.img} alt={course.name} />
                      <p>{course.name}</p>
                    </Link>
                  ))}
        </div>
      </section>

      {/* ✅ Equipment & Infrastructure */}
      {/* <section className="germany-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          German universities offer cutting-edge laboratories, technical workshops,
          research centers, and collaborations with major global industries like BMW,
          Bosch, and Siemens.
        </p>
      </section> */}

      {/* ✅ Cost of Study & Scholarships */}
      <section className="germany-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2>Cost of Studying in Germany</h2>
            <p>
              Public Universities: €0 tuition + €250–€400/semester.
              <br />
              Private Universities: €8,000–€20,000/year depending on program.
              <br />
              Living costs: €900–€1,200/month (rent, food, transport, insurance).
            </p>
            <h3>Scholarships in Germany</h3>
            <ul>
              <li>DAAD Scholarships</li>
              <li>Deutschlandstipendium</li>
              <li>University-Specific Scholarships</li>
              <li>Erasmus+ & Industry-funded Awards</li>
            </ul>
          </div>
          <div >
            {/* <img
              src="/assets/germany/germany-scholarship.jpg"
              alt="Scholarships in Germany"
              
            /> */}
          </div>
        </div>
      </section>

      {/* ✅ Career Prospects */}
     <section
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "25px 30px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
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
    Career Prospects in Germany
  </h2>
  <p
    style={{
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      margin: "0",
    }}
  >
    Germany offers strong opportunities in Engineering, IT, Automotive, Research, and Healthcare.
    Students can work part-time and apply for an 18-month residence permit after graduation,
    with conversion to EU Blue Card possible upon qualifying employment.
  </p>
</section>


      {/* ✅ Documents & Visa */}
      <section className="germany-documents" >
        <h2>Documents Required for Indian Students</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>English/German Proficiency Test (IELTS/TOEFL/TestDaF/DSH)</li>
          <li>SOP, CV, LORs, Portfolio (if applicable)</li>
          <li>Proof of Funds / Scholarship</li>
          <li>APS Certificate (for India, if applicable)</li>
        </ul>

        <h2>Germany Student Visa</h2>
        <p>
          Apply for a National Student Visa (D) with the university admission letter,
          proof of funds (blocked account), health insurance, accommodation proof,
          and completed visa forms. Students can work up to 120 full or 240 half days/year.
        </p>
      </section>



      

      {/* ✅ FAQs */}
      <section className="germany-faq">
        <h2>FAQs About Studying in Germany</h2>
        <div className="faq-item">
          <h4>Is education free in Germany?</h4>
          <p>Most public universities charge no tuition fees; a semester contribution applies.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Germany?</h4>
          <p>Yes, up to 120 full or 240 half days per year.</p>
        </div>
        <div className="faq-item">
          <h4>Do I need to speak German?</h4>
          <p>Many programs are in English, but German helps for internships, jobs, and daily life.</p>
        </div>
        <div className="faq-item">
          <h4>What is a blocked account?</h4>
          <p>A bank account showing you have sufficient funds to support yourself for one year.</p>
        </div>
        <div className="faq-item">
          <h4>How long can I stay after graduation?</h4>
          <p>Up to 18 months on a job-search permit; then you may convert to EU Blue Card.</p>
        </div>
        {/* <EnrollSection country="Germany" /> */}
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
    Plan a tuition-free or low-tuition German degree
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Get a personalized shortlist, funding plan, and visa file—start with a free counseling session today.
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

export default Germany;
