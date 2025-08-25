import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function UK() {
  return (
    <div className="uk-container">
      {/* Hero Section */}
      <section className="uk-hero">
       <section
  style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "60px",
  }}
>
  {/* Text Content */}
  <div
    style={{
      flex: "1 1 300px", // grows and shrinks
      minWidth: "280px",
      maxWidth: "600px",
    }}
  >
    <h1
      style={{
        fontSize: "clamp(2rem, 6vw, 3rem)",
        marginBottom: "20px",
        lineHeight: "1.2",
      }}
    >
      Study in the UK
    </h1>
    <p
      style={{
        fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
        lineHeight: "1.6",
      }}
    >
      The United Kingdom is one of the most popular destinations for
      international students, offering world-class education, cultural
      diversity, and excellent career opportunities. With globally
      recognized universities and vibrant cities, the UK promises a bright
      future for students.
    </p>
    <Link
      to="/contact"
      style={{
        display: "inline-block",
        marginTop: "20px",
        padding: "12px 25px",
        backgroundColor: "#2563eb",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "clamp(0.9rem, 2vw, 1rem)",
      }}
    >
      Apply Now
    </Link>
  </div>

  {/* Hero Image */}
  <img
    src="/assets/uk-universities/uk-banner.jpg"
    alt="Study in UK"
    style={{
      flex: "1 1 300px",
      minWidth: "280px",
      width: "100%",
      maxWidth: "600px",
      borderRadius: "16px",
      objectFit: "cover",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />
</section>
      </section>

      {/* Quick Stats */}
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
      background: "linear-gradient(135deg, #2563eb, #1e3a8a)", // brand gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1.2px",
      transition: "transform 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px) scale(1.02)")}
    onMouseLeave={(e) => (e.target.style.transform = "translateY(0) scale(1)")}
  >
    UK Education at a Glance
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
      "150+ Universities",
      "€11K - €35K Tuition Fees",
      "600K+ International Students",
      "2-Year Graduate Immigration Route",
    ].map((text, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
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


      {/* Why Study in UK */}
      <section className="uk-why">
        <h2>Why Choose the UK?</h2>
        <ul>
          <li>Prestigious Universities & Globally Recognized Degrees</li>
          <li>15 of the World's Top 100 Universities</li>
          <li>Sandwich Programs (Study + Work Experience)</li>
          <li>Gateway to Europe for Travel & Opportunities</li>
          <li>Work up to 20 hours per week during term</li>
          <li>Shorter Degree Programs (3 Years UG, 1 Year PG)</li>
        </ul>
      </section>

      {/* Top Universities with Marquee */}
      <section className="uk-universities">
        <h2>Top Universities in the UK</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Oxford",
                img: "/assets/uk-universities/oxford.jpg",
              },
              {
                name: "University of Cambridge",
                img: "/assets/uk-universities/cambridge.jpg",
              },
              {
                name: "Imperial College London",
                img: "/assets/uk-universities/imperial.jpg",
              },
              {
                name: "University College London",
                img: "/assets/uk-universities/ucl.jpg",
              },
              {
                name: "University of Edinburgh",
                img: "/assets/uk-universities/edinburgh.jpg",
              },
              {
                name: "King’s College London",
                img: "/assets/uk-universities/kcl.jpg",
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

      {/* Popular Courses */}
      <section className="uk-courses">
        <h2>Popular Courses in the UK</h2>
        <div className="course-grid">
          {[
            {
              name: "Business & Management",
              img: "/assets/uk-universities/business.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/uk-universities/engineering.jpg",
            },
            {
              name: "Medicine",
              img: "/assets/uk-universities/medicine.jpg",
            },
            {
              name: "Law",
              img: "/assets/uk-universities/law.jpg",
            },
            {
              name: "Computer Science",
              img: "/assets/uk-universities/computer-science.jpg",
            },
            {
              name: "Arts & Design",
              img: "/assets/uk-universities/arts-design.jpg",
            },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost of Study & Scholarships */}
<section className="uk-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
    
    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in the UK</h2>
      <p>
        Tuition fees range between €11,000 - €35,000 annually. Living costs
        vary by city, averaging €10,000 - €12,000 per year in London and less
        in other cities.
      </p>
      <h3>Scholarships in the UK</h3>
      <ul>
        <li>Chevening Scholarships</li>
        <li>Commonwealth Scholarships</li>
        <li>GREAT Scholarships</li>
        <li>University-Specific Grants</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/uk-universities/uk-scholarship.jpg"
        alt="Scholarships in the UK"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="uk-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in the UK</h2>
  <p>
    The UK offers excellent job opportunities for graduates, particularly
    in fields like Finance, Technology, Healthcare, and Engineering. The
    2-Year Graduate Immigration Route allows students to gain work
    experience after studies.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="uk-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English Proficiency Test (IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a UK University</li>
  </ul>

  <h2>UK Student Visa</h2>
  <p>
    Apply for the Tier 4 (General) Student Visa. The process requires a
    Confirmation of Acceptance for Studies (CAS), financial documents, and
    health surcharge payment.
  </p>
</section>

{/* Student Life */}
<section className="uk-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/uk-universities/student-life.jpg"
        alt="Student Life in UK"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in the UK</h2>
      <p>
        The UK offers a multicultural environment with vibrant cities,
        historic landmarks, and excellent student facilities. Students enjoy
        discounts on travel, cultural events, and more.
      </p>
    </div>

  </div>
</section>
<EnrollSection country="UK" />

      {/* FAQ Section */}
      <section className="uk-faq">
        <h2>FAQs About Studying in the UK</h2>
        <div className="faq-item">
          <h4>What is the average tuition fee in the UK?</h4>
          <p>
            It ranges from €11,000 to €35,000 per year depending on the course
            and university.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>
            Yes, international students can work up to 20 hours per week during
            term time.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is IELTS mandatory?</h4>
          <p>
            Most universities require IELTS or an equivalent English proficiency
            test score.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UK;
