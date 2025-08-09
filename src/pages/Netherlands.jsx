import React from "react";
import { Link } from "react-router-dom";

function Netherlands() {
  return (
    <div className="netherlands-container">
      {/* ✅ Hero Section */}
      <section className="netherlands-hero">
        <div className="netherlands-hero-content">
          <h1>Study in Netherlands</h1>
          <p>
            The Netherlands is renowned for its innovative teaching methods,
            high-quality universities, and strong international reputation. With
            over 2,000 programs taught in English, affordable tuition, and a
            welcoming, multicultural society, it’s a top destination for global
            students.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/netherlands-universities/netherlands-banner.jpg"
          alt="Study in Netherlands"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section className="netherlands-highlights">
        <h2>Netherlands Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">50+ Universities</div>
          <div className="highlight-card">€6K–€15K Tuition Fees</div>
          <div className="highlight-card">100K+ International Students</div>
          <div className="highlight-card">1-Year Stay-Back Visa</div>
        </div>
      </section>

      {/* ✅ Why Study in Netherlands */}
      <section className="netherlands-why">
        <h2>Why Choose Netherlands?</h2>
        <ul>
          <li>Top-Ranked Universities & Research Institutes</li>
          <li>2,000+ English-Taught Programs</li>
          <li>Affordable Tuition Compared to Other EU Countries</li>
          <li>Safe, Welcoming, and Multicultural Environment</li>
          <li>Excellent Public Transport and Infrastructure</li>
          <li>Strong Focus on Innovation and Sustainability</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="netherlands-universities">
        <h2>Top Universities in Netherlands</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Delft University of Technology (TU Delft)",
                img: "/assets/netherlands-universities/tudelft.jpg",
              },
              {
                name: "University of Amsterdam",
                img: "/assets/netherlands-universities/uva.jpg",
              },
              {
                name: "Eindhoven University of Technology",
                img: "/assets/netherlands-universities/eindhoven.jpg",
              },
              {
                name: "Wageningen University & Research",
                img: "/assets/netherlands-universities/wur.jpg",
              },
              {
                name: "Leiden University",
                img: "/assets/netherlands-universities/leiden.jpg",
              },
              {
                name: "Utrecht University",
                img: "/assets/netherlands-universities/utrecht.jpg",
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
      <section className="netherlands-courses">
        <h2>Popular Courses in Netherlands</h2>
        <div className="course-grid">
          {[
            {
              name: "Engineering & Technology",
              img: "/assets/netherlands-universities/engineering.jpg",
            },
            {
              name: "Business & Management",
              img: "/assets/netherlands-universities/business.jpg",
            },
            {
              name: "Computer Science & AI",
              img: "/assets/netherlands-universities/computer-science.jpg",
            },
            {
              name: "Agricultural & Environmental Sciences",
              img: "/assets/netherlands-universities/environment.jpg",
            },
            {
              name: "Life Sciences & Health",
              img: "/assets/netherlands-universities/health.jpg",
            },
            {
              name: "Social Sciences & Humanities",
              img: "/assets/netherlands-universities/humanities.jpg",
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
      <section className="netherlands-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Dutch universities offer modern labs, innovation centers, digital
          libraries, and advanced research facilities that foster creativity,
          experimentation, and global innovation.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="netherlands-cost">
        <h2>Cost of Studying in Netherlands</h2>
        <p>
          Tuition fees range from €6,000 to €15,000 annually for international
          students. Living expenses are approximately €10,000–€12,000 per year
          including accommodation, food, and transport.
        </p>
        <h3>Scholarships in Netherlands</h3>
        <ul>
          <li>Holland Scholarship</li>
          <li>Orange Tulip Scholarship (OTS)</li>
          <li>Erasmus+ Exchange Scholarships</li>
          <li>University-Specific & Merit-Based Grants</li>
        </ul>
        <img
          src="/assets/netherlands-universities/netherlands-scholarship.jpg"
          alt="Scholarships in Netherlands"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="netherlands-career">
        <h2>Career Prospects in Netherlands</h2>
        <p>
          The Netherlands is home to major international companies and startups
          in tech, logistics, sustainability, and design. Graduates can apply
          for a 1-year orientation visa (zoekjaar) to work and gain experience
          after graduation.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="netherlands-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Degree</li>
          <li>Proof of English Proficiency (IELTS/TOEFL)</li>
          <li>Motivation Letter & CV</li>
          <li>Proof of Sufficient Financial Means</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Netherlands Student Visa</h2>
        <p>
          Students need to apply for a residence permit (MVV + VVR) via the
          university. The process includes submitting documents, paying visa
          fees, and receiving the IND approval.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="netherlands-life">
        <h2>Student Life in Netherlands</h2>
        <p>
          Experience an inclusive, bike-friendly, and vibrant student life.
          Enjoy cultural festivals, cafes, travel across Europe, and strong
          student communities while studying in the Netherlands.
        </p>
        <img
          src="/assets/netherlands-universities/student-life.jpg"
          alt="Student Life in Netherlands"
        />
      </section>

      {/* ✅ FAQs */}
      <section className="netherlands-faq">
        <h2>FAQs About Studying in Netherlands</h2>
        <div className="faq-item">
          <h4>Are programs taught in English?</h4>
          <p>
            Yes, over 2,000 programs are offered in English across bachelor's,
            master's, and doctoral levels.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can international students work part-time?</h4>
          <p>
            Yes, students from outside the EU/EEA can work up to 16 hours/week
            or full-time during holidays with a work permit.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is the Netherlands safe for international students?</h4>
          <p>
            Yes, the Netherlands is known for its safety, quality of life, and
            strong student support services.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Netherlands;
