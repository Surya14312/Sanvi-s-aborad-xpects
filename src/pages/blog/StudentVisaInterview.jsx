// src/pages/StudentVisaInterview.jsx
import React from "react";


const StudentVisaInterview = () => {
  return (
    <div className="blog-container">
      <h1>Common Student Visa Interview Questions and How to Prepare</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Securing a student visa is a critical step in studying abroad. Visa officers often assess 
          whether a candidate is genuine, prepared, and financially capable. Understanding common 
          questions and preparation strategies can significantly improve your chances of approval.
        </p>
      </section>

      <section>
        <h2>Common Student Visa Interview Questions</h2>
        {/* Responsive table for questions */}
        <table className="compare-table">
          <thead>
            <tr>
              <th>Question No.</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Question No.">1</td>
              <td data-label="Question">Why do you want to study abroad?</td>
            </tr>
            <tr>
              <td data-label="Question No.">2</td>
              <td data-label="Question">Why did you choose this particular country/university/course?</td>
            </tr>
            <tr>
              <td data-label="Question No.">3</td>
              <td data-label="Question">What are your future career plans after completing the course?</td>
            </tr>
            <tr>
              <td data-label="Question No.">4</td>
              <td data-label="Question">How do you plan to fund your education?</td>
            </tr>
            <tr>
              <td data-label="Question No.">5</td>
              <td data-label="Question">Do you have family or relatives in the country?</td>
            </tr>
            <tr>
              <td data-label="Question No.">6</td>
              <td data-label="Question">Why not study in your home country?</td>
            </tr>
            <tr>
              <td data-label="Question No.">7</td>
              <td data-label="Question">Do you intend to return to your home country after studies?</td>
            </tr>
            <tr>
              <td data-label="Question No.">8</td>
              <td data-label="Question">What is your academic background and achievements?</td>
            </tr>
            <tr>
              <td data-label="Question No.">9</td>
              <td data-label="Question">How will this course benefit your career?</td>
            </tr>
            <tr>
              <td data-label="Question No.">10</td>
              <td data-label="Question">Are you aware of the living costs and accommodation in the country?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Tips to Prepare for the Interview</h2>
        <ul>
          <li><strong>Be Honest and Confident:</strong> Give clear and truthful answers; avoid memorized scripts.</li>
          <li><strong>Know Your Course and University:</strong> Research curriculum, specializations, and faculty; understand how it aligns with your goals.</li>
          <li><strong>Prepare Financial Proof:</strong> Keep bank statements, scholarship letters, and financial guarantees ready.</li>
          <li><strong>Highlight Career Plans:</strong> Explain how the course contributes to long-term goals and show intent to return or gain experience.</li>
          <li><strong>Practice Common Questions:</strong> Conduct mock interviews with mentors or consultants; focus on clarity, brevity, and confidence.</li>
          <li><strong>Maintain Proper Documentation:</strong> Carry all original documents and copies neatly organized (transcripts, admission letters, financial proof, passport, ID).</li>
        </ul>
      </section>

      <section>
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Providing vague or generic answers</li>
          <li>Showing uncertainty about your course or university</li>
          <li>Appearing overly nervous or unprepared</li>
          <li>Submitting incomplete or incorrect documents</li>
          <li>Mentioning intention to work illegally or overstay</li>
        </ul>
      </section>

      <section>
        <h2>Country-Specific Tips</h2>
        <ul>
          <li><strong>USA/Canada:</strong> Focus on ties to home country and career goals.</li>
          <li><strong>UK/Ireland:</strong> Be clear about course choice and post-study plans.</li>
          <li><strong>Europe (Germany, France, Netherlands):</strong> Highlight language readiness and integration plans.</li>
          <li><strong>Australia/New Zealand:</strong> Emphasize financial stability and genuine student intent.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>Q1:</strong> How long does a student visa interview take?<br/>
              <strong>A:</strong> Typically 10–30 minutes, depending on the country and complexity of your application.</li>
          <li><strong>Q2:</strong> Can I get rejected if I’m nervous?<br/>
              <strong>A:</strong> Nervousness is natural, but confidence and clear answers are key. Practice helps.</li>
          <li><strong>Q3:</strong> Do I need to carry original documents?<br/>
              <strong>A:</strong> Yes, all original documents and certified copies are usually required.</li>
          <li><strong>Q4:</strong> Can a consultancy help me prepare for visa interviews?<br/>
              <strong>A:</strong> Yes, consultants provide mock interviews, document checks, and guidance on answering questions confidently.</li>
        </ul>
      </section>

      <section>
        <h2>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul>
          <li>Conduct mock visa interviews with expert feedback</li>
          <li>Organize and verify all required documentation</li>
          <li>Guide on answering questions effectively and confidently</li>
          <li>Provide country-specific interview preparation to maximize approval chances</li>
        </ul>
        <p>
          <strong>“Worried about your student visa interview? Let our experts help you prepare, organize documents, and answer questions confidently to secure your visa. Book your free consultation today!”</strong>
        </p>
      </section>
    </div>
  );
};

export default StudentVisaInterview;
