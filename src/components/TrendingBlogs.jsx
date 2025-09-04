import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  { title: "Why Study in Europe", path: "/blog/why-europe", image: "/assets/blogs/europe-hero.jpg" },
  { title: "Why Study in Dubai", path: "/blog/why-dubai", image: "/assets/blogs/dubai-hero.jpg" },
  { title: "MBBS Abroad", path: "/blog/mbbs-abroad", image: "/assets/blogs/mbbs-hero.jpg" },
  { title: "How to Choose the Right Country", path: "/country-selection", image: "/assets/blogs/choose-country-hero.jpg" },

  { title: "Comparing Education Systems", path: "/blog/compare-systems", image: "/assets/blogs/compare-systems-hero.jpg" },
  { title: "English-Taught Programs in Non-English Speaking Countries", path: "/blog/english-programs", image: "/assets/blogs/english-programs-hero.jpg" },
  { title: "Myths vs. Facts About Studying Abroad", path: "/blog/myths-vs-facts", image: "/assets/blogs/myths-facts-hero.jpg" },
  { title: "Best Countries for International Students", path: "/blog/best-countries", image: "/assets/blogs/best-countries-hero.jpg" },
  { title: "Application Guide for Studying Abroad", path: "/blog/application-guide", image: "/assets/blogs/application-guide-hero.jpg" },
  { title: "Common Mistakes Students Make", path: "/blog/common-mistakes", image: "/assets/blogs/common-mistakes-hero.jpg" },
  { title: "Visa Interview Tips", path: "/blog/visa-interview", image: "/assets/blogs/visa-hero.jpg" },
  { title: "Managing Finances Abroad", path: "/blog/managing-finances", image: "/assets/blogs/herofinances.jpg" },
  { title: "How to Budget as an International Student", path: "/budgeting-tip", image: "/assets/blogs/budget-hero.jpg" },
  { title: "Affordable Countries to Study In", path: "/blog/affordable-countries", image: "/assets/blogs/affordable-countries-hero.jpg" },
  { title: "Most Popular Courses in 2025 & Beyond", path: "/blog/popular-courses-2025", image: "/assets/blogs/popular-courses-hero.jpg" },
];

export default function BlogList() {
  return (
    <div className="blog-list">
      <h1 className="blog-title">📌 Trending Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog, idx) => (
          <div className="blog-card" key={idx}>
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <h2 className="blog-card-title">{blog.title}</h2>
            <Link to={blog.path} className="blog-btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
