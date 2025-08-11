import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Mauritius() {
  return (
    <div className="mauritius-container">
      {/* ✅ Hero Section */}
      <section className="mauritius-hero">
        <div className="mauritius-hero-content">
          <h1>Study in Mauritius</h1>
          <p>
            Mauritius is a rising star in international education, offering
            quality British-based degrees, affordable tuition, English-medium
            programs, and a peaceful multicultural island lifestyle. With
            partnerships from UK and French institutions, Mauritius delivers
            globally respected qualifications in a tropical setting.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/mauritius-universities/mauritius-banner.jpg"
          alt="Study in Mauritius"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section className="mauritius-highlights">
        <h2>Mauritius Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">10+ International Universities</div>
          <div className="highlight-card">MUR 90K–MUR 160K Tuition Fees</div>
          <div className="highlight-card">5K+ International Students</div>
          <div className="highlight-card">6–12 Months Stay-Back Visa</div>
        </div>
      </section>

      {/* ✅ Why Study in Mauritius */}
      <section className="mauritius-why">
        <h2>Why Choose Mauritius?</h2>
        <ul>
          <li>British-Style Education System</li>
          <li>Affordable Tuition & Cost of Living</li>
          <li>English as Primary Language of Instruction</li>
          <li>Safe, Peaceful & Multicultural Environment</li>
          <li>Degrees from UK, French & Indian Institutions</li>
          <li>Scenic Island Life with Global Connectivity</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="mauritius-universities">
        <h2>Top Universities in Mauritius</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Mauritius",
                img: "/assets/mauritius-universities/uom.jpg",
              },
              {
                name: "Middlesex University Mauritius",
                img: "/assets/mauritius-universities/middlesex.jpg",
              },
              {
                name: "Aberystwyth University Mauritius",
                img: "/assets/mauritius-universities/aberystwyth.jpg",
              },
              {
                name: "Université des Mascareignes",
                img: "/assets/mauritius-universities/mascareignes.jpg",
              },
              {
                name: "Open University of Mauritius",
                img: "/assets/mauritius-universities/open.jpg",
              },
              {
                name: "Rushmore Business School",
                img: "/assets/mauritius-universities/rushmore.jpg",
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
      <section className="mauritius-courses">
        <h2>Popular Courses in Mauritius</h2>
        <div className="course-grid">
          {[
            {
              name: "Business Administration",
              img: "/assets/mauritius-universities/business.jpg",
            },
            {
              name: "Information Technology",
              img: "/assets/mauritius-universities/it.jpg",
            },
            {
              name: "Hospitality & Tourism",
              img: "/assets/mauritius-universities/hospitality.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/mauritius-universities/engineering.jpg",
            },
            {
              name: "Accounting & Finance",
              img: "/assets/mauritius-universities/finance.jpg",
            },
            {
              name: "Health Sciences",
              img: "/assets/mauritius-universities/health.jpg",
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
      <section className="mauritius-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Mauritius universities feature modern labs, smart classrooms, industry
          incubators, and innovative learning environments that align with
          global academic standards.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="mauritius-cost">
        <h2>Cost of Studying in Mauritius</h2>
        <p>
          Tuition fees range from MUR 90,000 to MUR 160,000 per year. Living
          expenses are affordable, ranging from MUR 100,000 to MUR 150,000
          annually depending on location and lifestyle.
        </p>
        <h3>Scholarships in Mauritius</h3>
        <ul>
          <li>Mauritius-Africa Scholarship Scheme</li>
          <li>University-Based Merit Scholarships</li>
          <li>Government Financial Aid Schemes</li>
          <li>Partner Institution Discounts</li>
        </ul>
        <img
          src="/assets/mauritius-universities/mauritius-scholarship.jpg"
          alt="Scholarships in Mauritius"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="mauritius-career">
        <h2>Career Prospects in Mauritius</h2>
        <p>
          Students in Mauritius benefit from growing sectors such as IT,
          finance, tourism, and education. Graduates can apply for a stay-back
          visa for up to 1 year to find employment in local or international
          firms.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="mauritius-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Certificates & Transcripts</li>
          <li>Proof of English Proficiency (IELTS/TOEFL)</li>
          <li>CV and Statement of Purpose</li>
          <li>Bank Statement or Financial Proof</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Mauritius Student Visa</h2>
        <p>
          The visa process involves securing admission, submitting financial and
          medical documents, and applying through the university to the
          Mauritius Passport and Immigration Office.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="mauritius-life">
        <h2>Student Life in Mauritius</h2>
        <p>
          Enjoy the island lifestyle with white sandy beaches, tropical climate,
          cultural diversity, festivals, and a welcoming atmosphere that makes
          student life fun and memorable in Mauritius.
        </p>
        <img
          src="/assets/mauritius-universities/student-life.jpg"
          alt="Student Life in Mauritius"
        />
      </section>
      <EnrollSection country="Mauritius" />

      {/* ✅ FAQs */}
      <section className="mauritius-faq">
        <h2>FAQs About Studying in Mauritius</h2>
        <div className="faq-item">
          <h4>Can I study in English in Mauritius?</h4>
          <p>
            Yes, English is widely used as the medium of instruction across most
            universities in Mauritius.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can international students work part-time in Mauritius?</h4>
          <p>
            Yes, students can work part-time with approval from the Passport and
            Immigration Office.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Mauritius a safe place to study?</h4>
          <p>
            Yes, Mauritius is considered one of the safest and most peaceful
            countries in Africa with a low crime rate and a welcoming society.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Mauritius;
