import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function About() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        <h2>About The Sanvi’s Abroad Xpert</h2>
        <p>
          At The Sanvi’s Abroad Xpert, we specialize in coaching for
          international exams such as IELTS, TOEFL, GRE, GMAT, PTE, French, and
          German. Our goal is to empower students to achieve their dream of
          studying abroad through expert guidance and dedicated support.
        </p>
        <p>
          Our institute is led by experienced mentors who are passionate about
          student success. With customized training modules, result-driven
          preparation, and modern classroom infrastructure, we ensure every
          student is well-prepared to achieve excellence.
        </p>
      </div>

      <div className="founder-section">
        <h3>Meet Our Founders</h3>
        <div className="founder-profiles">
          <div className="founder-card">
            <h4 style={{ color: "#c62828" }}>Mrs. V. Sangeetha</h4>
            <p
              style={{
                textAlign: "justify",
                color: "#333333",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.8",
              }}
            >
              A serial entrepreneur who founded Sanvi’s Academy. She has over 10
              years of Experience in Counselling and Administration, Gained in
              both India and Singapore . Sangeetha Specializes in Guiding
              students through Global Education pathways, Offering tailored
              advice on Test Preparation, University Selection, Visa Processes,
              and Career Alignment. Her Empathetic approach and strategic
              Insights have helped Hundreds of Students Secure Placements in Top
              Universities Across the UK, Europe, USA, Japan, Singapore, and
              cannada. Under her leadership, Sanvi’s Academy has grown into a
              Trusted Institution known for its Integrity, Personalized
              Mentorship, and Consistent Success Rates. With a passion for
              empowering youth through education, Sangeetha Continues to
              innovate in the Education Space, Building Strong Global
              Partnerships and Mentoring a Growing Team of Expert Faculty and
              Counsellors.
            </p>
          </div>
          <div className="founder-card">
            <h4 style={{ color: "#c62828" }}>Mr.Vijayarajan</h4>
            <p
              style={{
                textAlign: "justify",
                color: "#333333",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.8",
              }}
            >
              Brings over 26 years of extensive Industry Rich Experience, having
              successfully executed a wide range of Domestic and International
              Projects across diverse Sectors after in Telecome , Difference an
              Power Infrastructure ( transmission and Distribution ) He
              Possesses Deep Insights Into Global Education Systems, Student
              Mobility Trends, and Emerging Career Landscapes. As a highly
              respected Career Counselor and Education Consultant, He has
              mentored of students, Helping them Identify the right Academic
              Pathways and Align their Goals with Evolving Global Opportunities.
              His Strategic guidance Covers Everything From course selection,
              University admissions,Country Selection , course and Study-Abroad
              Counseling to Scholarship Planning and Career Roadmap Development
              . His Holistic Mentoring Approach Empowers Students To make
              Well-Informed, confident decisions about their Academic and
              Professional Futures. With a Passion for Education and a
              Commitment to Student Success, He continues to transform
              Aspirations into Achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
