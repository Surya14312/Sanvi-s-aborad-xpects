import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Malta() {
  return (
    <div className="malta-container">
      {/* Hero Section */}
      <section className="malta-hero">
        <div className="malta-hero-content">
          <h1>Study in Malta</h1>
          <p>
            Malta is a growing destination for international students due to its English-medium education, affordable tuition, and Mediterranean lifestyle. It offers high-quality programs in business, law, IT, hospitality, and healthcare. Malta’s universities have strong European and international recognition, and the country’s safe, multicultural environment makes it ideal for Indian students seeking a unique study abroad experience.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/malta/malta-hero.jpg"
          alt="Study in Malta"
          className="hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="malta-glance">
        <h2>Malta at a Glance</h2>
        <div className="glance-grid">
          {[
            "4 universities + several specialized institutes",
            "Tuition Fees: €4,000–10,000/year (~₹3.5–8 lakh)",
            "Living Costs: €8,000–12,000/year (~₹7–10 lakh)",
            "10,000+ International Students",
            "Language of Instruction: English",
            "Post-Study Work: 6 months–1 year stay-back options",
          ].map((text, index) => (
            <div key={index} className="glance-card">{text}</div>
          ))}
        </div>
      </section>

      {/* Why Study in Malta */}
      <section className="malta-why">
        <h2>Why Choose Malta?</h2>
        <ul>
          <li>English-speaking country, simplifying adaptation for Indian students.</li>
          <li>Affordable tuition fees and lower cost of living compared to Western Europe.</li>
          <li>Strong focus on business, law, hospitality, IT, and healthcare programs.</li>
          <li>Safe, student-friendly, and multicultural environment.</li>
          <li>Easy access to the EU for travel and internships.</li>
          <li>Smaller class sizes allow personalized learning and better industry connections.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="malta-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium programs eliminate language barriers.</li>
          <li>Affordable education and cost-effective living.</li>
          <li>Opportunities for part-time work and internships.</li>
          <li>Close connections with European companies for career prospects.</li>
          <li>Scholarships available from universities and government programs.</li>
        </ul>
      </section>

     {/* Top Universities */}
<section className="malta-universities">
  <h2>Top Universities in Malta</h2>
  <div className="universities-grid">
    {[
      { name: "University of Malta", img: "/assets/malta/universities/umalta.jpg" },
      { name: "Malta College of Arts, Science and Technology (MCAST)", img: "/assets/malta/universities/mcast.jpg" },
      { name: "European Institute of Education", img: "/assets/malta/universities/eie.jpg" },
      { name: "American University of Malta", img: "/assets/malta/universities/aum.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>
{/* ✅ Popular Courses */}
<section className="malta-courses">
  <h2>Popular Courses in Malta</h2>
  <div className="course-grid">
    {[
      { name: "Business Administration and Management", img: "/assets/malta/courses/business.jpg" },
      { name: "Hospitality and Tourism Management", img: "/assets/malta/courses/hospitality.jpg" },
      { name: "Law and International Relations", img: "/assets/malta/courses/law.jpg" },
      { name: "Computer Science and IT", img: "/assets/malta/courses/computer-science.jpg" },
      { name: "Finance and Accounting", img: "/assets/malta/courses/finance.jpg" },
      { name: "Arts, Design, and Communication", img: "/assets/malta/courses/arts.jpg" },
      { name: "Health Sciences and Nursing", img: "/assets/malta/courses/health.jpg" },
      { name: "Maritime Studies", img: "/assets/malta/courses/maritime.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Study & Living */}
      <section className="malta-cost">
        <h2>Cost of Studying and Living</h2>
        <p>
          Undergraduate Tuition Fees: €4,000–7,000/year (~₹3.5–6 lakh)<br />
          Postgraduate Tuition Fees: €5,000–10,000/year (~₹4–8 lakh)<br />
          Living Expenses: €700–1,000/month (~₹60,000–85,000)
        </p>
      </section>

      {/* Career Prospects */}
      <section className="malta-career">
        <h2>Career Prospects in Malta</h2>
        <p>
          Growing demand for graduates in business, IT, healthcare, hospitality, and maritime sectors.<br />
          International students can stay for 6 months to 1 year post-graduation to seek employment.<br />
          Opportunities in multinational companies, financial institutions, and hospitality enterprises.<br />
          Small but growing economy provides access to EU-wide networks for skilled professionals.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="malta-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English proficiency (IELTS/TOEFL)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>Acceptance letter from Maltese university</li>
          <li>Proof of sufficient funds (~€7,000/year)</li>
          <li>Health insurance coverage</li>
          <li>Proof of accommodation</li>
          <li>Completed visa application form</li>
        </ul>

        <h2>Student Visa for Malta</h2>
        <p>
          Type: Long-Stay Study Visa<br />
          Requirements: Admission letter, proof of funds, health insurance, passport<br />
          Visa Duration: Course duration + 1–3 months<br />
          Processing Time: 4–6 weeks<br />
          Work Rights: Part-time work allowed during studies; full-time during holidays if permitted
        </p>
      </section>
      <section className="malta-student-life">
  <h2>Student Life in Malta</h2>
  <p>
    Malta offers a vibrant student lifestyle with historic campuses, Mediterranean culture,
    affordable living, and beautiful coastlines. Students enjoy festivals, internships, 
    networking opportunities, and a lively social scene while exploring the islands.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/malta/malta-student-life.jpg" alt="Student Life in Malta" />
  </div>
</section>



      {/* FAQs */}
      <section className="malta-faq">
        <h2>FAQs About Studying in Malta</h2>
        <div className="faq-item">
          <h4>Is English proficiency mandatory?</h4>
          <p>Yes, all programs are taught in English, so proof of proficiency is required.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, part-time work is allowed; check specific visa conditions.</p>
        </div>
        <div className="faq-item">
          <h4>How expensive is studying in Malta?</h4>
          <p>Tuition fees: €4,000–10,000/year; living costs: €700–1,000/month.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, universities and government programs offer scholarships for meritorious students.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Malta after graduation?</h4>
          <p>Yes, international students can stay for 6–12 months to seek employment.</p>
        </div>
      </section>

      <EnrollSection country="Malta" />

      <section className="malta-summary">
        <p>
          Planning to study in Malta? Our consultancy provides guidance on university admissions, scholarship applications, visa processing, and career planning for Indian students seeking a rewarding study abroad experience.
        </p>
      </section>
    </div>
  );
}

export default Malta;
