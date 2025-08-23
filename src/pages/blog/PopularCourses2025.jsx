// src/pages/PopularCourses.jsx
import React from "react";


const PopularCourses = () => {
  return (
    <div className="blog-container">
      <h1>Most Popular Courses to Study Abroad in 2025 & Beyond</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Choosing the right course is crucial when planning to study abroad. Global trends
          and industry demands influence which programs offer the best career prospects,
          skill development, and international opportunities. Here’s a detailed guide to
          the most popular courses to study abroad in 2025 and beyond.
        </p>
      </section>

      <section>
        <h2>Engineering & Technology</h2>
        <p><strong>Why It’s Popular:</strong></p>
        <ul>
          <li>Strong global demand for mechanical, electrical, computer, and civil engineers.</li>
          <li>Opportunities in automation, robotics, AI, and renewable energy.</li>
          <li>High employability in countries like Germany, USA, Canada, Netherlands, and Singapore.</li>
        </ul>
        <p><strong>Top Courses:</strong></p>
        <ul>
          <li>Mechanical Engineering</li>
          <li>Electrical & Electronics Engineering</li>
          <li>Computer Science & IT</li>
          <li>Data Science & Artificial Intelligence</li>
          <li>Civil & Environmental Engineering</li>
        </ul>
        <p><strong>Career Prospects:</strong> Software Developer, Data Analyst, Civil Engineer, AI Researcher, Renewable Energy Specialist</p>
      </section>

      {/* Example responsive table */}
      <section>
        <h2>Top Engineering Courses Comparison (Responsive Table)</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Top Countries</th>
              <th>Career Prospects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Course">Mechanical Engineering</td>
              <td data-label="Duration">4 Years</td>
              <td data-label="Top Countries">Germany, USA, Canada</td>
              <td data-label="Career Prospects">Mechanical Engineer, Project Manager</td>
            </tr>
            <tr>
              <td data-label="Course">Data Science & AI</td>
              <td data-label="Duration">2-3 Years</td>
              <td data-label="Top Countries">USA, Netherlands, Singapore</td>
              <td data-label="Career Prospects">Data Scientist, AI Engineer</td>
            </tr>
            <tr>
              <td data-label="Course">Civil & Environmental Engineering</td>
              <td data-label="Duration">4 Years</td>
              <td data-label="Top Countries">Canada, Germany, UK</td>
              <td data-label="Career Prospects">Civil Engineer, Environmental Consultant</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Business & Management</h2>
        <p><strong>Why It’s Popular:</strong></p>
        <ul>
          <li>Global business environment is expanding, requiring skilled managers and strategists.</li>
          <li>Practical exposure through internships, live projects, and networking opportunities.</li>
        </ul>
        <p><strong>Top Courses:</strong></p>
        <ul>
          <li>MBA (Finance, Marketing, HR, International Business)</li>
          <li>Business Analytics</li>
          <li>Entrepreneurship & Innovation</li>
          <li>Supply Chain & Logistics Management</li>
        </ul>
        <p><strong>Career Prospects:</strong> Business Analyst, Marketing Manager, Financial Consultant, Supply Chain Manager</p>
      </section>

      <section>
        <h2>Data Science & Artificial Intelligence</h2>
        <p><strong>Why It’s Popular:</strong></p>
        <ul>
          <li>Companies worldwide need data-driven decision-making.</li>
          <li>Growing demand for AI, machine learning, and data analytics experts.</li>
        </ul>
        <p><strong>Top Courses:</strong></p>
        <ul>
          <li>Data Science & Analytics</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Big Data Management</li>
          <li>Business Analytics</li>
        </ul>
        <p><strong>Career Prospects:</strong> Data Scientist, AI Engineer, Business Analyst, Machine Learning Developer</p>
      </section>

      {/* Additional sections (Hospitality, Medicine, Arts, Emerging Courses) remain the same */}

      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>Q1:</strong> Which courses are in highest demand globally?<br/>
              <strong>A:</strong> Engineering, Data Science, Business, Healthcare, and Hospitality are among the top globally in 2025.</li>
          <li><strong>Q2:</strong> Can I switch courses after starting abroad?<br/>
              <strong>A:</strong> Some universities allow course changes or interdisciplinary electives, but it depends on university policies.</li>
          <li><strong>Q3:</strong> Do popular courses have scholarships?<br/>
              <strong>A:</strong> Yes, many universities provide merit-based scholarships for high-demand courses.</li>
          <li><strong>Q4:</strong> How to choose a course that ensures career growth?<br/>
              <strong>A:</strong> Analyze global industry trends, personal interests, and employability prospects with expert guidance.</li>
        </ul>
      </section>

      <section>
        <h2>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul>
          <li>Choose trending and high-demand courses abroad</li>
          <li>Guide with admissions, scholarships, and career pathways</li>
          <li>Provide insights on global industry trends and course relevance</li>
          <li>Support with pre-departure guidance and relocation</li>
        </ul>
        <p><strong>“Looking to study a high-demand course abroad in 2025? Our experts guide you in selecting the right course, university, and scholarship opportunities for a successful international career. Book your free consultation today!”</strong></p>
      </section>
    </div>
  );
};

export default PopularCourses;
