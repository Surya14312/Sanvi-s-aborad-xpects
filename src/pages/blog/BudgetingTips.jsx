import React from "react";
import { Link } from "react-router-dom";


function BudgetingTips() {
  return (
    <div className="budgeting-container">
      {/* Page Heading */}
      <h1>How to Budget as an International Student</h1>

      {/* Introduction */}
      <section>
        <p>
          Studying abroad is an exciting opportunity, but managing finances can be
          challenging for international students. Budgeting effectively ensures a
          stress-free experience, allowing you to focus on your studies and enjoy
          student life. This guide provides practical tips and strategies to plan
          your expenses, save money, and make the most of your study abroad journey.
        </p>
      </section>

      {/* Estimate Expenses */}
      <section>
        <h2>Estimate Your Total Expenses</h2>
        <ul>
          <li>Tuition Fees – Annual or per semester fees</li>
          <li>Accommodation – On-campus dorms, shared apartments, or private rentals</li>
          <li>Living Expenses – Food, transportation, utilities, and leisure</li>
          <li>Books & Supplies – Textbooks, stationery, and equipment</li>
          <li>Insurance & Healthcare – Mandatory health insurance or medical coverage</li>
          <li>Travel Costs – Flights, local travel, and emergencies</li>
        </ul>
        <p><strong>Tip:</strong> Create a spreadsheet to track expected expenses and update it regularly.</p>
      </section>

      {/* Monthly Budget */}
      <section>
        <h2>Plan a Monthly Budget</h2>
        <table className="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Approx. % of Monthly Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Accommodation</td><td>30–40%</td></tr>
            <tr><td>Food & Groceries</td><td>20–25%</td></tr>
            <tr><td>Transportation</td><td>10–15%</td></tr>
            <tr><td>Study Materials</td><td>5–10%</td></tr>
            <tr><td>Leisure & Social Life</td><td>5–10%</td></tr>
            <tr><td>Savings / Emergencies</td><td>10–15%</td></tr>
          </tbody>
        </table>
        <p><strong>Tip:</strong> Always set aside an emergency fund for unforeseen expenses.</p>
      </section>

      {/* Save on Accommodation */}
      <section>
        <h2>Save on Accommodation</h2>
        <ul>
          <li>Share an apartment with roommates to split costs.</li>
          <li>Choose university dorms or hostels, often cheaper than private rentals.</li>
          <li>Consider living slightly away from the city center for lower rent.</li>
        </ul>
      </section>

      {/* Save on Food */}
      <section>
        <h2>Save on Food & Groceries</h2>
        <ul>
          <li>Cook at home instead of eating out frequently.</li>
          <li>Shop at local markets and discount stores.</li>
          <li>Use student discounts available in many supermarkets and restaurants.</li>
        </ul>
      </section>

      {/* Transportation */}
      <section>
        <h2>Transportation Tips</h2>
        <ul>
          <li>Use public transport, student passes, or bicycles instead of taxis.</li>
          <li>Some universities offer free or discounted shuttle services.</li>
          <li>Consider walking for short distances to save money and stay healthy.</li>
        </ul>
      </section>

      {/* Academic Costs */}
      <section>
        <h2>Minimize Academic Costs</h2>
        <ul>
          <li>Buy used textbooks or digital versions.</li>
          <li>Borrow books from libraries or online resources.</li>
          <li>Look for free workshops, webinars, and online courses to supplement learning.</li>
        </ul>
      </section>

      {/* Part-Time Work */}
      <section>
        <h2>Part-Time Work & Internships</h2>
        <ul>
          <li>Most countries allow students to work part-time (usually 20 hours/week).</li>
          <li>Seek internships related to your course to gain experience and supplement income.</li>
          <li>Balance work with studies to avoid burnout.</li>
        </ul>
      </section>

      {/* Scholarships */}
      <section>
        <h2>Scholarships & Financial Aid</h2>
        <ul>
          <li>Apply for merit-based or need-based scholarships offered by universities or governments.</li>
          <li>Look for grants, assistantships, and tuition waivers.</li>
          <li>Our consultancy helps students identify scholarships and guide application processes.</li>
        </ul>
      </section>

      {/* Track Expenses */}
      <section>
        <h2>Track Your Expenses</h2>
        <ul>
          <li>Use budgeting apps or spreadsheets to monitor daily spending.</li>
          <li>Set weekly or monthly limits to avoid overspending.</li>
          <li>Review your budget regularly and adjust according to your lifestyle.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: How much money should I budget as an international student?</strong>
          <p>A: It depends on your country and lifestyle. Average monthly costs range from $500–$1,500, including accommodation, food, and transportation.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Can I manage on a student budget alone?</strong>
          <p>A: Yes, with careful planning, part-time work, and smart spending, you can live comfortably without financial stress.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Are there scholarships for living expenses?</strong>
          <p>A: Some scholarships and grants cover both tuition and living costs.</p>
        </div>
        <div className="faq-item">
          <strong>Q4: How can a consultancy help with budgeting?</strong>
          <p>A: Consultants help estimate total costs, identify scholarships, and plan finances efficiently.</p>
        </div>
      </section>

      {/* Consultancy Callout */}
      <section className="consultancy-callout">
        <blockquote>
          “Worried about managing your finances abroad? Our experts guide you in budgeting, scholarships, and cost-effective living to ensure a smooth study abroad journey.”
        </blockquote>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/contact">
            <button className="apply-btn">Book Your Free Consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BudgetingTips;
