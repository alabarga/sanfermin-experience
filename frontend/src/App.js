import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import AccommodationSection from "./components/AccommodationSection/AccommodationSection";
import PackagesSection from "./components/PackagesSection/PackagesSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ScheduleSection from "./components/ScheduleSection/ScheduleSection";
import ConcertsSection from "./components/ConcertsSection/ConcertsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Google Analytics
import ReactGA from "react-ga4";

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your actual GA measurement ID
    
    // Send initial pageview
    ReactGA.send("pageview");
    
    // Activate reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="App min-h-screen flex flex-col"
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <AccommodationSection />
          <PackagesSection />
          <GallerySection />
          <ScheduleSection />
          <ConcertsSection />
          <TestimonialsSection />
          <ContactSection />
          <FaqSection />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </BrowserRouter>
  );
};

export default App;