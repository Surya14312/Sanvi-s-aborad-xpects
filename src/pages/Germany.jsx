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
            Germany is one of the most popular destinations for international
            students, known for its tuition-free education at public
            universities, strong academic reputation, and innovative research
            facilities. With a high standard of living and globally recognized
            degrees, Germany offers a top-notch study experience.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/germany-universities/germany-banner.jpg"
          alt="Study in Germany"
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
      background: "linear-gradient(135deg, #000000, #dc2626)", // 🇩🇪 Germany black-red gradient
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
    Germany Education at a Glance
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
      "300+ Public Universities",
      "Low to No Tuition Fees",
      "400K+ International Students",
      "18-Month Post-Study Work Permit",
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


      {/* ✅ Why Study in Germany */}
      <section className="germany-why">
        <h2>Why Choose Germany?</h2>
        <ul>
          <li>Tuition-Free Education at Public Universities</li>
          <li>Global Recognition of German Degrees</li>
          <li>Strong Engineering & Tech Education</li>
          <li>Courses Available in English</li>
          <li>Opportunity to Work While Studying</li>
          <li>Rich History, Culture & Safe Environment</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="germany-universities">
        <h2>Top Universities in Germany</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Technical University of Munich (TUM)",
                img: "/assets/germany-universities/tum.jpg",
              },
              {
                name: "Ludwig Maximilian University of Munich (LMU)",
                img: "/assets/germany-universities/lmu.jpg",
              },
              {
                name: "Heidelberg University",
                img: "/assets/germany-universities/heidelberg.jpg",
              },
              {
                name: "RWTH Aachen University",
                img: "/assets/germany-universities/rwth.jpg",
              },
              {
                name: "University of Freiburg",
                img: "/assets/germany-universities/freiburg.jpg",
              },
              {
                name: "University of Stuttgart",
                img: "/assets/germany-universities/stuttgart.jpg",
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
      <section className="germany-courses">
        <h2>Popular Courses in Germany</h2>
        <div className="course-grid">
          {[
            {
              name: "Mechanical Engineering",
              img: "/assets/germany-universities/mechanical.jpg",
            },
            {
              name: "Computer Science & IT",
              img: "/assets/germany-universities/computer.jpg",
            },
            {
              name: "Automobile Engineering",
              img: "/assets/germany-universities/automobile.jpg",
            },
            {
              name: "Business & Economics",
              img: "/assets/germany-universities/business.jpg",
            },
            {
              name: "Artificial Intelligence",
              img: "/assets/germany-universities/ai.jpg",
            },
            {
              name: "Renewable Energy",
              img: "/assets/germany-universities/renewable.jpg",
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
      <section className="germany-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          German universities offer cutting-edge laboratories, technical
          workshops, research centers, and collaborations with major global
          industries like BMW, Bosch, and Siemens.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="germany-cost">
        <h2>Cost of Studying in Germany</h2>
        <p>
          Most public universities charge little to no tuition fees. Semester
          contributions range between €250–€500. Living costs are approximately
          €8,000–€11,000 per year.
        </p>
        <h3>Scholarships in Germany</h3>
        <ul>
          <li>DAAD Scholarships</li>
          <li>Erasmus+ Program</li>
          <li>Deutschlandstipendium</li>
          <li>University-Specific Scholarships</li>
        </ul>
        <img
          src="/assets/germany-universities/germany-scholarship.jpg"
          alt="Scholarships in Germany"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="germany-career">
        <h2>Career Prospects in Germany</h2>
        <p>
          Germany is Europe’s industrial powerhouse with high demand in
          engineering, IT, automotive, and renewable energy sectors. Students
          benefit from internships, strong industry ties, and an 18-month
          post-study work visa.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="germany-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>Language Proficiency (IELTS/TOEFL/TestDaF)</li>
          <li>CV and Statement of Purpose</li>
          <li>Proof of Funds (Blocked Account)</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Germany Student Visa</h2>
        <p>
          Apply for a national visa (Type D). Key steps include creating a
          blocked account, completing the visa form, submitting required
          documents, and attending a visa interview.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="germany-life">
        <h2>Student Life in Germany</h2>
        <p>
          Students in Germany enjoy an affordable, safe, and multicultural
          environment with public transportation, vibrant festivals, and access
          to travel across Europe via the Schengen Zone.
        </p>
        <img
          src="/assets/germany-universities/student-life.jpg"
          alt="Student Life in Germany"
        />
      </section>
      <EnrollSection country="Germany" />

      {/* ✅ FAQs */}
      <section className="germany-faq">
        <h2>FAQs About Studying in Germany</h2>
        <div className="faq-item">
          <h4>Is education free in Germany?</h4>
          <p>
            Yes, most public universities in Germany charge no tuition fees for
            international students.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Germany?</h4>
          <p>
            Yes, students can work part-time for up to 120 full or 240 half days
            per year.
          </p>
        </div>
        <div className="faq-item">
          <h4>Do I need to speak German?</h4>
          <p>
            Many programs are available in English, especially at Master's
            level, but basic German is useful for daily life and part-time jobs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Germany;
