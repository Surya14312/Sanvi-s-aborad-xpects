import React from "react";

function Events() {
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <p>
        At <strong>The Sanvi’s Abroad Xpert</strong>, we regularly host events,
        seminars, and workshops to guide students in their journey toward
        studying abroad. Stay tuned for our upcoming sessions and register early
        to secure your spot.
      </p>

      <div className="event-list">
        {/* Event 1 */}
        <div className="event-card">
          <h3>Study Abroad Orientation Session</h3>
          <p>
            <strong>Date:</strong> 25th August 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert, Main Campus
          </p>
          <p>
            Join our experts to learn about admission processes, scholarships,
            and visa application steps for USA, Canada, UK, and Australia.
          </p>
        </div>

        {/* Event 2 */}
        <div className="event-card">
          <h3>IELTS Masterclass</h3>
          <p>
            <strong>Date:</strong> 5th September 2025
          </p>
          <p>
            <strong>Location:</strong> Online (Zoom)
          </p>
          <p>
            Get tips and strategies from our certified trainers to boost your
            IELTS score and improve your chances of securing university
            admission.
          </p>
        </div>

        {/* Event 3 */}
        <div className="event-card">
          <h3>Meet the University Delegates</h3>
          <p>
            <strong>Date:</strong> 15th September 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert Auditorium
          </p>
          <p>
            Interact directly with representatives from top global universities
            and explore course options, scholarships, and post-study work
            opportunities.
          </p>
        </div>

        {/* Event 4 */}
        <div className="event-card">
          <h3>Canada Study Permit Workshop</h3>
          <p>
            <strong>Date:</strong> 22nd September 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert, Branch Office
          </p>
          <p>
            Learn the complete process of applying for a Canadian study permit,
            including document preparation, financial proof, and application
            submission.
          </p>
        </div>

        {/* Event 5 */}
        <div className="event-card">
          <h3>Scholarship Guidance Fair</h3>
          <p>
            <strong>Date:</strong> 1st October 2025
          </p>
          <p>
            <strong>Location:</strong> Online (Webinar)
          </p>
          <p>
            Explore top scholarships available for Indian students planning to
            study abroad, including eligibility, deadlines, and tips for a
            strong application.
          </p>
        </div>

        {/* Event 6 */}
        <div className="event-card">
          <h3>Career Counseling Day</h3>
          <p>
            <strong>Date:</strong> 12th October 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert, Career Lab
          </p>
          <p>
            Meet with our career advisors to choose the best study program and
            destination based on your interests, skills, and future goals.
          </p>
        </div>

        {/* Event 7 */}
        <div className="event-card">
          <h3>Visa Application Guidance Session</h3>
          <p>
            <strong>Date:</strong> 20th October 2025
          </p>
          <p>
            <strong>Location:</strong> Online & In-Person
          </p>
          <p>
            A step-by-step guide on preparing and submitting your student visa
            application, along with common mistakes to avoid.
          </p>
        </div>

        {/* Event 8 */}
        <div className="event-card">
          <h3>International Cultural Exchange Day</h3>
          <p>
            <strong>Date:</strong> 28th October 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert Courtyard
          </p>
          <p>
            Experience global cultures, meet alumni from various countries, and
            learn about student life abroad beyond academics.
          </p>
        </div>

        {/* Event 9 */}
        <div className="event-card">
          <h3>Mock IELTS & TOEFL Test</h3>
          <p>
            <strong>Date:</strong> 5th November 2025
          </p>
          <p>
            <strong>Location:</strong> Sanvi’s Abroad Xpert Testing Hall
          </p>
          <p>
            Take a full-length mock test under exam conditions to assess your
            readiness and get personalized feedback from our trainers.
          </p>
        </div>
      </div>

      <p className="register-note">
        📧 For registrations and inquiries, email us at{" "}
        <a href="mailto:events@sanvisabroadxpert.com">
          events@sanvisabroadxpert.com
        </a>
      </p>
    </div>
  );
}

export default Events;
