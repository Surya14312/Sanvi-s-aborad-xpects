import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Dubai() {
  return (
    <div className="dubai-container">
      {/* ✅ Hero Section */}
      <section className="dubai-hero">
        <div className="dubai-hero-content">
          <h1>Study in Dubai</h1>
          <p>
            Dubai is an emerging global education hub offering internationally
            accredited programs, top foreign universities, and a multicultural
            environment. Known for innovation, safety, and modern
            infrastructure, Dubai provides a dynamic study experience with
            access to global job markets.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/dubai-universities/dubai-banner.jpg"
          alt="Study in Dubai"
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
      background: "linear-gradient(135deg, #16a34a, #dc2626)", // 🇦🇪 Dubai UAE green-red gradient
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
    Dubai Education at a Glance
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
      "60+ International Universities & Colleges",
      "AED 40K – AED 100K Tuition Fees",
      "70K+ International Students",
      "Post-Study Work & Internship Opportunities",
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


      {/* ✅ Why Study in Dubai */}
      <section className="dubai-why">
        <h2>Why Choose Dubai?</h2>
        <ul>
          <li>Top International Campuses (UK, US, AUS Universities)</li>
          <li>Modern Infrastructure & Safe Living</li>
          <li>Globally Recognized Degrees</li>
          <li>Industry-Driven Courses & Internships</li>
          <li>Tax-Free Income & Job Opportunities</li>
          <li>Multicultural & English-Speaking City</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="dubai-universities">
        <h2>Top Universities in Dubai</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Birmingham Dubai",
                img: "/assets/dubai-universities/birmingham.jpg",
              },
              {
                name: "Heriot-Watt University Dubai",
                img: "/assets/dubai-universities/heriot.jpg",
              },
              {
                name: "Middlesex University Dubai",
                img: "/assets/dubai-universities/middlesex.jpg",
              },
              {
                name: "University of Wollongong Dubai",
                img: "/assets/dubai-universities/wollongong.jpg",
              },
              {
                name: "Manipal Academy of Higher Education Dubai",
                img: "/assets/dubai-universities/manipal.jpg",
              },
              {
                name: "American University in Dubai (AUD)",
                img: "/assets/dubai-universities/aud.jpg",
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
      <section className="dubai-courses">
        <h2>Popular Courses in Dubai</h2>
        <div className="course-grid">
          {[
            {
              name: "Business & Management",
              img: "/assets/dubai-universities/business.jpg",
            },
            {
              name: "Engineering & IT",
              img: "/assets/dubai-universities/engineering.jpg",
            },
            {
              name: "Artificial Intelligence",
              img: "/assets/dubai-universities/ai.jpg",
            },
            {
              name: "Hospitality & Tourism",
              img: "/assets/dubai-universities/hospitality.jpg",
            },
            {
              name: "Media & Communication",
              img: "/assets/dubai-universities/media.jpg",
            },
            {
              name: "Finance & Accounting",
              img: "/assets/dubai-universities/finance.jpg",
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
      <section className="dubai-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Dubai universities feature high-tech campuses, digital labs,
          innovation hubs, business incubators, and industry-linked learning
          centers that foster creativity and practical skills.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="dubai-cost">
        <h2>Cost of Studying in Dubai</h2>
        <p>
          Tuition fees range from AED 30,000 to AED 90,000 per year, depending
          on the university and program. Living costs average AED 30,000–AED
          50,000 annually.
        </p>
        <h3>Scholarships in Dubai</h3>
        <ul>
          <li>Merit-Based Scholarships by Universities</li>
          <li>Early Application Discounts</li>
          <li>Need-Based Financial Aid</li>
          <li>Corporate & Industry Sponsored Awards</li>
        </ul>
        <img
          src="/assets/dubai-universities/dubai-scholarship.jpg"
          alt="Scholarships in Dubai"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="dubai-career">
        <h2>Career Prospects in Dubai</h2>
        <p>
          Dubai is a business and innovation hub with ample opportunities in IT,
          finance, logistics, tourism, and media. Students benefit from a 1-year
          stay-back visa and internship pathways with multinational companies.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="dubai-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>Language Proficiency (IELTS/TOEFL)</li>
          <li>CV and Statement of Purpose</li>
          <li>Proof of Funds & Accommodation</li>
          <li>University Offer Letter</li>
        </ul>

        <h2>Dubai Student Visa</h2>
        <p>
          Apply for a UAE Student Visa through the admitting university.
          Requirements include admission proof, medical test, Emirates ID,
          financial documents, and visa sponsorship from the institution.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="dubai-life">
        <h2>Student Life in Dubai</h2>
        <p>
          Students in Dubai enjoy a modern lifestyle, world-class amenities,
          desert safaris, international cuisine, festivals, shopping, and easy
          access to global travel.
        </p>
        <img
          src="/assets/dubai-universities/student-life.jpg"
          alt="Student Life in Dubai"
        />
      </section>

      <EnrollSection country="Dubai" />

      {/* ✅ FAQs */}
      <section className="dubai-faq">
        <h2>FAQs About Studying in Dubai</h2>
        <div className="faq-item">
          <h4>Can I study in English in Dubai?</h4>
          <p>
            Yes, all major universities in Dubai offer programs in English,
            especially for international students.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Dubai?</h4>
          <p>
            Students can work part-time with university approval and in
            compliance with UAE labor laws.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is a Dubai degree recognized internationally?</h4>
          <p>
            Yes, degrees from licensed international campuses and accredited UAE
            institutions are widely recognized across the globe.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dubai;
