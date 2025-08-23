import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Switzerland() {
  return (
    <div className="switzerland-container">
      {/* ✅ Hero Section */}
      <section className="switzerland-hero">
        <div className="switzerland-hero-content">
          <h1>Study in Switzerland</h1>
          <p>
            Switzerland is a global education hub known for excellence in
            hospitality, business, science, and research. With its high quality
            of life, multicultural environment, and world-class universities,
            Switzerland offers a unique and enriching study experience.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/switzerland-universities/switzerland-banner.jpg"
          alt="Study in Switzerland"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section
  style={{
    padding: "80px 20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  <h2
    style={{
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: "800",
      marginBottom: "40px",
      background: "linear-gradient(135deg, #dc2626, #ffffff)", // 🇨🇭 Switzerland red-white gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1.2px",
      transition: "transform 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) =>
      (e.target.style.transform = "translateY(-3px) scale(1.02)")
    }
    onMouseLeave={(e) =>
      (e.target.style.transform = "translateY(0) scale(1)")
    }
  >
    Switzerland Education at a Glance
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      justifyItems: "center",
      transition: "all 0.4s ease",
    }}
  >
    {[
      "40+ Universities & Institutions",
      "CHF 15K – CHF 40K Tuition Fees",
      "50K+ International Students",
      "Post-Study Work Opportunities",
    ].map((text, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          padding: "28px 20px",
          fontSize: "1.05rem",
          fontWeight: "600",
          color: "#1f2937",
          textAlign: "center",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        }}
      >
        {text}
      </div>
    ))}
  </div>
</section>


      {/* ✅ Why Study in Switzerland */}
      <section className="switzerland-why">
        <h2>Why Choose Switzerland?</h2>
        <ul>
          <li>Top Hospitality & Business Schools</li>
          <li>High Quality of Life & Safety</li>
          <li>Multilingual & Multicultural Environment</li>
          <li>Strong Industry Partnerships</li>
          <li>Excellent Research & Innovation Facilities</li>
          <li>English-Taught Courses Available</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="switzerland-universities">
        <h2>Top Universities in Switzerland</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "ETH Zurich",
                img: "/assets/switzerland-universities/eth.jpg",
              },
              {
                name: "École Polytechnique Fédérale de Lausanne (EPFL)",
                img: "/assets/switzerland-universities/epfl.jpg",
              },
              {
                name: "University of Zurich",
                img: "/assets/switzerland-universities/uzh.jpg",
              },
              {
                name: "University of Geneva",
                img: "/assets/switzerland-universities/geneva.jpg",
              },
              {
                name: "University of Lausanne",
                img: "/assets/switzerland-universities/lausanne.jpg",
              },
              {
                name: "Glion Institute of Higher Education",
                img: "/assets/switzerland-universities/glion.jpg",
              },
            ].map((uni, i) => (
              <div className="uni-card" key={i}>
                <img src={uni.img} alt={uni.name} />
                <p>{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Popular Courses */}
      <section className="switzerland-courses">
        <h2>Popular Courses in Switzerland</h2>
        <div className="course-grid">
          {[
            {
              name: "Hospitality & Tourism Management",
              img: "/assets/switzerland-universities/hospitality.jpg",
            },
            {
              name: "Business & Finance",
              img: "/assets/switzerland-universities/business.jpg",
            },
            {
              name: "International Relations",
              img: "/assets/switzerland-universities/relations.jpg",
            },
            {
              name: "Life Sciences & Medicine",
              img: "/assets/switzerland-universities/medicine.jpg",
            },
            {
              name: "Engineering & Technology",
              img: "/assets/switzerland-universities/engineering.jpg",
            },
            {
              name: "Environmental Studies",
              img: "/assets/switzerland-universities/environment.jpg",
            },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Equipment & Infrastructure */}
      <section className="switzerland-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Swiss institutions offer cutting-edge facilities including modern
          labs, innovation centers, research institutes, and close ties with
          multinational corporations.
        </p>
      </section>

  {/* Cost of Study & Scholarships */}
<section className="switzerland-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Switzerland</h2>
      <p>
        Tuition fees range from CHF 1,000 - CHF 4,000 per semester for public universities, while private universities can charge CHF 20,000 - CHF 40,000 annually. Living costs vary by city, averaging CHF 18,000 - CHF 25,000 per year.
      </p>
      <h3>Scholarships in Switzerland</h3>
      <ul>
        <li>ETH Excellence Scholarships</li>
        <li>Swiss Government Excellence Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/switzerland-universities/switzerland-scholarship.jpg"
        alt="Scholarships in Switzerland"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="switzerland-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Switzerland</h2>
  <p>
    Switzerland offers strong job opportunities in Finance, Engineering, Technology, Pharmaceuticals, and Research. International students can work part-time during studies and may apply for a post-graduation work permit to gain professional experience.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="switzerland-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English, French, or German Proficiency Test (IELTS/TOEFL/DELF/DSH)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Swiss University</li>
  </ul>

  <h2>Switzerland Student Visa</h2>
  <p>
    Apply for a student visa via the Swiss consulate using the university acceptance letter, proof of funds, health insurance, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="switzerland-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/switzerland-universities/student-life.jpg"
        alt="Student Life in Switzerland"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Switzerland</h2>
      <p>
        Switzerland offers a high-quality and multicultural student experience with scenic campuses, vibrant cities, and rich cultural opportunities. Students can enjoy outdoor activities, networking events, festivals, and internships while studying.
      </p>
    </div>

  </div>
</section>

      <EnrollSection country="Switzerland" />

      {/* ✅ FAQs */}
      <section className="switzerland-faq">
        <h2>FAQs About Studying in Switzerland</h2>
        <div className="faq-item">
          <h4>Can I study in English in Switzerland?</h4>
          <p>
            Yes, many programs—especially at Master's level—are taught in
            English, although some universities require basic French or German.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Switzerland expensive for students?</h4>
          <p>
            Living costs are high but manageable with budgeting. Scholarships
            and part-time work can help reduce expenses.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Switzerland?</h4>
          <p>
            Yes, international students can work up to 15 hours per week during
            the semester and full-time during holidays.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Switzerland;
