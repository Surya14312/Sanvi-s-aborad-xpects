import React from "react";
import { Link } from "react-router-dom";

function Ireland() {
  return (
    <div className="ireland-container">
      {/* ✅ Hero Section */}
      <section className="ireland-hero">
        <div className="ireland-hero-content">
          <h1>Study in Ireland</h1>
          <p>
            Ireland is a leading destination for international students,
            offering globally recognized degrees, a welcoming culture, and a
            strong economy. Its English-speaking environment and growing tech
            sector make it ideal for higher education and career prospects.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/ireland-universities/ireland-banner.jpg"
          alt="Study in Ireland"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section className="ireland-highlights">
        <h2>Ireland Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">7 Public Universities</div>
          <div className="highlight-card">€10K - €25K Tuition Fees</div>
          <div className="highlight-card">35K+ International Students</div>
          <div className="highlight-card">Post-Study Work Visa</div>
        </div>
      </section>

      {/* ✅ Why Study in Ireland */}
      <section className="ireland-why">
        <h2>Why Choose Ireland?</h2>
        <ul>
          <li>English-Speaking Country in the EU</li>
          <li>Strong Presence of Global Tech Companies</li>
          <li>2-Year Stay-Back Visa for Graduates</li>
          <li>World-Ranked Universities</li>
          <li>Safe & Friendly Communities</li>
          <li>Affordable Cost Compared to UK/US</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="ireland-universities">
        <h2>Top Universities in Ireland</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Trinity College Dublin",
                img: "/assets/ireland-universities/trinity.jpg",
              },
              {
                name: "University College Dublin",
                img: "/assets/ireland-universities/ucd.jpg",
              },
              {
                name: "University of Galway",
                img: "/assets/ireland-universities/galway.jpg",
              },
              {
                name: "University College Cork",
                img: "/assets/ireland-universities/cork.jpg",
              },
              {
                name: "Dublin City University",
                img: "/assets/ireland-universities/dcu.jpg",
              },
              {
                name: "Technological University Dublin",
                img: "/assets/ireland-universities/tud.jpg",
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
      <section className="ireland-courses">
        <h2>Popular Courses in Ireland</h2>
        <div className="course-grid">
          {[
            {
              name: "Data Science & AI",
              img: "/assets/ireland-universities/data-science.jpg",
            },
            {
              name: "Pharmaceutical Sciences",
              img: "/assets/ireland-universities/pharma.jpg",
            },
            {
              name: "Computer Science",
              img: "/assets/ireland-universities/computer.jpg",
            },
            {
              name: "Business & Management",
              img: "/assets/ireland-universities/business.jpg",
            },
            {
              name: "Cybersecurity",
              img: "/assets/ireland-universities/cyber.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/ireland-universities/engineering.jpg",
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
      <section className="ireland-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Irish universities offer modern labs, smart classrooms, innovation
          centers, and strong links with global industry leaders.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="ireland-cost">
        <h2>Cost of Studying in Ireland</h2>
        <p>
          Tuition fees range from €10,000 to €25,000 annually. Living costs vary
          between €7,000 and €12,000 per year depending on city and lifestyle.
        </p>
        <h3>Scholarships in Ireland</h3>
        <ul>
          <li>Government of Ireland Scholarships</li>
          <li>University-Specific Scholarships</li>
          <li>HEA International Education Scholarships</li>
          <li>Merit-Based & Need-Based Aid</li>
        </ul>
        <img
          src="/assets/ireland-universities/ireland-scholarship.jpg"
          alt="Scholarships in Ireland"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="ireland-career">
        <h2>Career Prospects in Ireland</h2>
        <p>
          Ireland is a European tech and pharma hub with job openings in IT,
          biotech, finance, and more. International students benefit from a
          2-year post-study work visa and career services support.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="ireland-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts</li>
          <li>Proof of English Proficiency (IELTS/TOEFL)</li>
          <li>Statement of Purpose</li>
          <li>Proof of Financial Means</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Student Visa Process</h2>
        <p>
          Apply for a “D” Study Visa. Submit academic and financial documents,
          acceptance letter, passport, and attend an interview if required.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="ireland-life">
        <h2>Student Life in Ireland</h2>
        <p>
          Ireland offers a vibrant student life with music, sports, culture,
          travel, and friendly locals. Universities encourage clubs and
          community activities.
        </p>
        <img
          src="/assets/ireland-universities/student-life.jpg"
          alt="Student Life in Ireland"
        />
      </section>

      {/* ✅ FAQs */}
      <section className="ireland-faq">
        <h2>FAQs About Studying in Ireland</h2>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>
            Yes, students can work part-time up to 20 hours/week during term and
            40 hours/week during holidays.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is IELTS required for Ireland?</h4>
          <p>
            Yes, IELTS (or equivalent test) is generally required with a minimum
            score of 6.0 overall.
          </p>
        </div>
        <div className="faq-item">
          <h4>Do I get a stay-back visa?</h4>
          <p>
            Yes, Ireland offers a 2-year stay-back visa for postgraduate
            students to seek employment.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ireland;
