import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary"; // ✅ Added import

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import UKPage from "./pages/UK";
import CanadaPage from "./pages/Canada";
import SingaporePage from "./pages/Singapore";
import IrelandPage from "./pages/Ireland";
import FrancePage from "./pages/France";
import GermanyPage from "./pages/Germany";
import SwitzerlandPage from "./pages/Switzerland";
import DubaiPage from "./pages/Dubai";
import SpainPage from "./pages/Spain";
import MalaysiaPage from "./pages/Malaysia";
import MauritiusPage from "./pages/Mauritius";
import IndiaPage from "./pages/India";
import NetherlandsPage from "./pages/Netherlands";
import ItalyPage from "./pages/Italy";

import AdmissionGuidance from "./pages/blogs/AdmissionGuidance";
import CareerCounseling from "./pages/blogs/CareerCounseling";
import CourseSelection from "./pages/blogs/CourseSelection";
import DocumentationService from "./pages/blogs/DocumentationServices";
import ApplicationProcedure from "./pages/blogs/ApplicationProcedure";
import FinancialAssistance from "./pages/blogs/FinancialAssistance";
import TravelAssistance from "./pages/blogs/TravelAssistance";
import PostArrivalSupport from "./pages/blogs/PostArrivalSupport";
import CountrySelection from "./pages/blogs/CountrySelection";

import Destinations from "./components/Destinations";
import CountryPage from "./pages/CountryPage";

import UniversitySelection from "./pages/UniversitySelection";
import ApplicationForm from "./components/ApplicationForm.jsx";
import ScholarshipAssistanceForm from "./pages/ScholarshipAssistanceForm.jsx";
import VisaAssistance from "./pages/VisaAssistance.jsx";
import TestPreparation from "./pages/TestPreparation.jsx";
import IELTS from "./pages/IELTS";
import TOEFL from "./pages/TOEFL";
import PTE from "./pages/PTE";
import GRE from "./pages/GRE";
import SAT from "./pages/SAT";
import Duolingo from "./pages/Duolingo";
import French from "./pages/French";
import German from "./pages/German";

import CourseDetails from "./components/CourseDetails.jsx";
import BlogDetails from "./components/BlogDetails";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import WorkWithUs from "./pages/WorkWithUs.jsx";
import Events from "./pages/Events.jsx";
import Resources from "./pages/Resources"; // <-- Import Resources page

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
        {/* Study Abroad Pages */}
        <Route path="/study-in/uk" element={<UKPage />} />
        <Route path="/study-in/canada" element={<CanadaPage />} />
        <Route path="/study-in/singapore" element={<SingaporePage />} />
        <Route path="/study-in/ireland" element={<IrelandPage />} />
        <Route path="/study-in/france" element={<FrancePage />} />
        <Route path="/study-in/germany" element={<GermanyPage />} />
        <Route path="/study-in/switzerland" element={<SwitzerlandPage />} />
        <Route path="/study-in/dubai" element={<DubaiPage />} />
        <Route path="/study-in/spain" element={<SpainPage />} />
        <Route path="/study-in/malaysia" element={<MalaysiaPage />} />
        <Route path="/study-in/mauritius" element={<MauritiusPage />} />
        <Route path="/study-in/india" element={<IndiaPage />} />
        <Route path="/study-in/netherlands" element={<NetherlandsPage />} />
        <Route path="/study-in/italy" element={<ItalyPage />} />
        {/* Blog & Services */}
        <Route
          path="/blog/admission-guidance"
          element={<AdmissionGuidance />}
        />
        <Route path="/career-counseling" element={<CareerCounseling />} />
        <Route path="/course-selection" element={<CourseSelection />} />
        <Route
          path="/documentation-services"
          element={<DocumentationService />}
        />
        <Route
          path="/application-procedure"
          element={<ApplicationProcedure />}
        />
        <Route path="/financial-assistance" element={<FinancialAssistance />} />
        <Route path="/travel-assistance" element={<TravelAssistance />} />
        <Route path="/post-arrival-support" element={<PostArrivalSupport />} />
        <Route path="/country-selection" element={<CountrySelection />} />
        <Route path="/university-selection" element={<UniversitySelection />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route
          path="/scholarship-assistance"
          element={<ScholarshipAssistanceForm />}
        />
        <Route path="/visa-assistance" element={<VisaAssistance />} />
        <Route path="/test-preparation" element={<TestPreparation />} />
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PTE />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/sat" element={<SAT />} />
        <Route path="/duolingo" element={<Duolingo />} />
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        {/* Dynamic course & blog */}
        <Route
          path="/courses/:country/:courseTitle"
          element={<CourseDetails />}
        />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        {/* What We Do + Service Detail with Error Boundary */}
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route
          path="/service/:id"
          element={
            <ErrorBoundary>
              <ServiceDetail />
            </ErrorBoundary>
          }
        />
        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />{" "}
        {/* ✅ Resources Route */}
        {/* 404 Page */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>

      {/* ✅ Footer stays outside Routes */}
      <Footer />
    </Router>
  );
}

export default App;
