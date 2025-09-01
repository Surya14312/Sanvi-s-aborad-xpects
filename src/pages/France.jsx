import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function France() {
  return (
    <div className="france-container">
      {/* Hero Section */}
      <section className="france-hero">
        <div className="france-hero-content">
          <h1>Study in France</h1>
          <p>
            France is a leading destination for international students, offering world-class
            education, affordable tuition, and a rich cultural experience. With globally recognized
            universities, strong research opportunities, and access to the European job market, France
            combines academic excellence with lifestyle advantages.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <div className="france-hero-img">
          <img src="/assets/france/france-banner.jpg" alt="Study in France" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>France at a Glance</h2>
  <div className="stats-grid">
    {[
      "3,500+ Higher Education Institutions",
      "Top-ranked: Sorbonne, PSL, Polytechnique, HEC, INSEAD",
      "€2,770 – €20,000 Tuition Fees",
      "€8K – €12K Living Costs (higher in Paris)",
      "400K+ International Students (4th globally)",
      "French & English Taught Programs",
      "Up to 2 Years Stay-back Visa",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Choose France */}
      <section className="france-why">
        <h2>Why Choose France?</h2>
        <ul>
          <li>Globally respected education system with top universities and Grandes Écoles</li>
          <li>Affordable tuition fees compared to UK/USA</li>
          <li>Hub for business, fashion, culinary arts, engineering, and research</li>
          <li>Central European location with Schengen access</li>
          <li>Strong focus on innovation, sustainability, and research excellence</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="france-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Many English-taught programs at bachelor’s, master’s, and doctoral levels</li>
          <li>Strong demand for STEM and management graduates</li>
          <li>Access to Eiffel, Charpak, and Erasmus+ scholarships</li>
          <li>Networking opportunities with Airbus, L’Oréal, Renault, BNP Paribas</li>
          <li>20 hrs/week part-time work rights during studies</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
<section className="france-universities">
  <h2>Top Universities in France</h2>
  <div className="universities-grid">
    {[
      { name: "Sorbonne University", img: "/assets/france/universities/sorbonne.jpg" },
      { name: "PSL Research University", img: "/assets/france/universities/psl.jpg" },
      { name: "École Polytechnique", img: "/assets/france/universities/polytechnique.jpg" },
      { name: "HEC Paris", img: "/assets/france/universities/hec.jpg" },
      { name: "INSEAD", img: "/assets/france/universities/insead.jpg" },
      { name: "Université Paris-Saclay", img: "/assets/france/universities/paris-saclay.jpg" },
      { name: "Sciences Po", img: "/assets/france/universities/sciences-po.jpg" },
      { name: "Grenoble Alpes University", img: "/assets/france/universities/grenoble.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

    {/* Popular Courses */}
<section className="france-courses">
  <h2>Popular Courses in France</h2>
  <div className="course-grid">
    {[
      { name: "Business & Management", img: "/assets/france/courses/c1.jpg" },
      { name: "Engineering (Aerospace, Civil, Mechanical, IT)", img: "/assets/france/courses/c2.jpg" },
      { name: "Fashion & Luxury Brand Management", img: "/assets/france/courses/c3.jpg" },
      { name: "Culinary Arts & Hospitality", img: "/assets/france/courses/c4.jpg" },
      { name: "International Relations & Political Science", img: "/assets/france/courses/c5.jpg" },
      { name: "Data Science & Artificial Intelligence", img: "/assets/france/courses/c6.jpg" },
      { name: "Environmental Studies & Sustainability", img: "/assets/france/courses/c7.jpg" },
      { name: "Medicine & Healthcare", img: "/assets/france/courses/c8.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Studying & Living */}
      <section className="france-cost">
        <h2>Cost of Studying & Living</h2>
        <p>UG: €2,770 – €10,000/year | PG: €3,770 – €20,000/year</p>
        <p>Living: €600–€1,000/month (outside Paris), €1,200–€1,800/month (Paris)</p>
      </section>

      {/* Career Prospects */}
      <section className="france-career">
        <h2>Career Prospects</h2>
        <p>
          France is home to global leaders in aerospace, luxury brands, automotive, and finance.
          International students with a Master’s degree can stay for up to 2 years to seek employment.
          High demand in IT, engineering, hospitality, and research sectors. Schengen access allows
          opportunities across Europe.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="france-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English/French proficiency (IELTS/TOEFL/DELF/DALF)</li>
          <li>SOP, LORs, CV, Passport copy</li>
          <li>Proof of funds & accommodation</li>
        </ul>
        <h2>France Student Visa (VLS-TS)</h2>
        <p>
          Covers course duration (renewable if required). Requires acceptance letter, proof of
          sufficient funds (€7,380/year), accommodation, health insurance, and language proof.
          Processing time: 3–6 weeks. Students can work 964 hours/year (~20 hrs/week).
        </p>
      </section>

      {/* <section className="france-student-life">
  <h2>Student Life in France</h2>
  <p>
    France offers a vibrant lifestyle with historic campuses, festivals, multicultural cities, 
    and diverse opportunities for internships, networking, and language learning. 
    Students also enjoy cultural experiences, culinary delights, and exploring Europe.
  </p>

 
  <div className="student-life-image">
    <img 
      src="/assets/france/france-student-life.jpg" 
      alt="Student Life in France" 
     
    />
  </div>
</section> */}

      {/* Enroll Section */}
      <EnrollSection country="France" />

      {/* FAQs */}
      <section className="france-faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Is French mandatory?</h4>
          <p>Not always—many programs are in English. But French helps with jobs & social life.</p>
        </div>
        <div className="faq-item">
          <h4>Can I get scholarships?</h4>
          <p>Yes, Eiffel, Charpak, Erasmus+, and university-specific scholarships are available.</p>
        </div>
        <div className="faq-item">
          <h4>How much can I earn part-time?</h4>
          <p>On average €8–€12/hour depending on job type.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay after graduation?</h4>
          <p>Yes, Master’s graduates can apply for a 2-year temporary residence permit.</p>
        </div>
        {/* Enroll Section */}
      <EnrollSection country="France" />
      <section className="malta-summary">


        <p>“Looking to study in France? Our consultancy assists with university selection, scholarships, application support, and end-to-end visa guidance.”

</p>
</section>
      </section>
    </div>
  );
}

export default France;
