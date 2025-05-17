import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1">
                <span className="text-primary">San</span>Fermín
                <span className="text-xs ml-1 text-accent">.me</span>
              </h3>
              <p className="text-white/70 text-sm">Ultimate Festival Experience</p>
            </div>
            <p className="text-white/70 mb-6">
              Experience the thrill of San Fermín with our premium packages, offering exclusive access, luxury accommodation, and unforgettable moments.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <ScrollLink to="hero" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  About the Festival
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="packages" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Our Packages
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="gallery" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="schedule" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Festival Schedule
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="concerts" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Concerts
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={800} className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Info</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary" />
                <div>
                  <p className="text-white/70">Email Us</p>
                  <a href="mailto:info@sanfermin.me" className="hover:text-primary transition-colors duration-300">info@sanfermin.me</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="mt-1 mr-3 text-primary" />
                <div>
                  <p className="text-white/70">Call or WhatsApp</p>
                  <a href="tel:+34123456789" className="hover:text-primary transition-colors duration-300">+34 123 456 789</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-primary">🇪🇸</div>
                <div>
                  <p className="text-white/70">Office Address</p>
                  <p>Calle Mayor, 15<br />31001 Pamplona<br />Navarra, Spain</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <p className="text-white/70 mb-4">
              Subscribe to get the latest updates and special offers for San Fermín 2025.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/60 text-sm"
          >
            &copy; {currentYear} SanFermin.me. All rights reserved. <br className="md:hidden" />
            <a href="#privacy" className="hover:text-primary transition-colors duration-300 mx-2">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-primary transition-colors duration-300 mx-2">Terms of Service</a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;