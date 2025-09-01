import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Lithuania() {
  return (
    <div className="lithuania-container">
      {/* Hero Section */}
      <section className="lithuania-hero">
        <div className="lithuania-hero-content">
          <h1>Study in Lithuania</h1>
          <p>
            Lithuania is an emerging study destination in Europe offering affordable education, high-quality programs, and a safe, multicultural environment. Its universities are recognized across the EU, and the country provides English-taught programs in STEM, law, business, and social sciences. Lithuania is ideal for Indian students seeking cost-effective education combined with opportunities for research, internships, and European exposure.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/lithuania/lithuania-hero.jpg"
          alt="Study in Lithuania"
          className="hero-img"
        />
      </section>

      {/* Quick Stats */}
     <section className="stats-section">
  <h2>Lithuania at a Glance</h2>
  <div className="stats-grid">
    {[
      "15+ universities + 40+ colleges and private institutions",
      "Tuition Fees: €3,000–11,000/year (~₹2.5–9 lakh)",
      "Living Costs: €6,000–9,000/year (~₹5–7 lakh)",
      "10,000+ International Students",
      "Language of Instruction: English and Lithuanian",
      "Post-Study Work: Stay-back permit up to 12 months",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study in Lithuania */}
      <section className="lithuania-why">
        <h2>Why Choose Lithuania?</h2>
        <ul>
          <li>Affordable tuition fees and cost of living compared to Western Europe.</li>
          <li>High-quality education with EU-recognized degrees.</li>
          <li>English-taught programs in STEM, law, business, and social sciences.</li>
          <li>Safe, student-friendly, and multicultural environment.</li>
          <li>Opportunities for internships and part-time work during studies.</li>
          <li>Strong focus on innovation, research, and applied learning.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="lithuania-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-taught programs eliminate language barriers.</li>
          <li>Cost-effective study and living environment.</li>
          <li>Access to European universities and research networks.</li>
          <li>Scholarships available from Lithuanian universities and government programs.</li>
          <li>Opportunity to stay in Lithuania for 12 months post-graduation for job search.</li>
        </ul>
      </section>

      {/* Top Universities */}
<section className="lithuania-universities">
  <h2>Top Universities in Lithuania</h2>
  <div className="universities-grid">
    {[
      { name: "Vilnius University", img: "/assets/lithuania/universities/vu.jpg" },
      { name: "Kaunas University of Technology", img: "/assets/lithuania/universities/kut.jpg" },
      { name: "Vytautas Magnus University", img: "/assets/lithuania/universities/vmu.jpg" },
      { name: "ISM University of Management and Economics", img: "/assets/lithuania/universities/ism.jpg" },
      { name: "Mykolas Romeris University", img: "/assets/lithuania/universities/mru.jpg" },
      { name: "Vilnius Gediminas Technical University", img: "/assets/lithuania/universities/vgtu.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Popular Courses */}
<section className="lithuania-courses">
  <h2>Popular Courses in Lithuania</h2>
  <div className="course-grid">
    {[
      { name: "Computer Science", img: "/assets/lithuania/courses/computer-science.jpg" },
      { name: "Data Science", img: "/assets/lithuania/courses/data-science.jpg" },
      { name: "Engineering (Mechanical, Electrical, Civil)", img: "/assets/lithuania/courses/engineering.jpg" },
      { name: "Law and International Relations", img: "/assets/lithuania/courses/law.jpg" },
      { name: "Business Administration and Management", img: "/assets/lithuania/courses/business.jpg" },
      { name: "Finance and Economics", img: "/assets/lithuania/courses/finance.jpg" },
      { name: "Life Sciences and Biotechnology", img: "/assets/lithuania/courses/biotech.jpg" },
      { name: "Arts, Design, and Communication", img: "/assets/lithuania/courses/arts.jpg" },
      { name: "Hospitality and Tourism Management", img: "/assets/lithuania/courses/hospitality.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Study & Living */}
      <section className="lithuania-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Undergraduate Tuition Fees: €3,000–8,000/year (~₹2.5–6.5 lakh)<br />
          Postgraduate Tuition Fees: €4,000–11,000/year (~₹3.5–9 lakh)<br />
          Living Expenses: €500–750/month (~₹45,000–65,000)
        </p>
      </section>

      {/* Career Prospects */}
      <section className="lithuania-career">
        <h2>Career Prospects in Lithuania</h2>
        <p>
          Strong demand for graduates in IT, engineering, business, law, and finance.<br />
          International students can stay for up to 12 months post-graduation to seek employment.<br />
          Opportunities to work in multinational companies or local startups in Vilnius, Kaunas, and Klaipeda.<br />
          Lithuania’s position in the EU allows networking and career exposure across Europe.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="lithuania-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>Acceptance letter from Lithuanian university</li>
          <li>Proof of sufficient funds (~€6,000/year)</li>
          <li>Health insurance coverage</li>
          <li>Proof of accommodation</li>
          <li>Completed visa application form</li>
        </ul>

        <h2>Student Visa for Lithuania</h2>
        <p>
          Type: National Long-Term Study Visa (D Visa)<br />
          Requirements: Admission letter, proof of funds, health insurance, passport<br />
          Visa Duration: Course duration + 3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Part-time work allowed during studies (up to 20 hours/week)
        </p>
      </section>
      {/* <section className="lithuania-student-life">
  <h2>Student Life in Lithuania</h2>
  <p>
    Lithuania offers a safe and affordable student lifestyle with historic universities, 
    vibrant city life, and a welcoming community. Students enjoy cultural events, internships, 
    networking opportunities, and a rich academic and social experience.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/lithuania/lithuania-student-life.jpg" alt="Student Life in Lithuania" />
  </div>
</section> */}


      {/* FAQs */}
      <section className="lithuania-faq">
        <h2>FAQs About Studying in Lithuania</h2>
        <div className="faq-item">
          <h4>Are English-taught programs available for international students?</h4>
          <p>Yes, most STEM, law, and business programs are offered in English.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 20 hours/week during term time.</p>
        </div>
        <div className="faq-item">
          <h4>How much is the cost of living in Lithuania?</h4>
          <p>€500–750/month including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, universities and government programs provide scholarships for international students.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Lithuania after graduation?</h4>
          <p>Yes, students can apply for a stay-back permit up to 12 months to seek employment.</p>
        </div>
      </section>

      <EnrollSection country="Lithuania" />

      <section className="lithuania-summary">
        <p>
          Planning to study in Lithuania? Our consultancy assists Indian students with university selection, scholarship applications, visa guidance, and career planning for a seamless study abroad experience.
        </p>
      </section>
    </div>
  );
}

export default Lithuania;