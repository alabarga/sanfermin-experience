import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Accommodation', to: 'accommodation' },
    { name: 'Packages', to: 'packages' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Schedule', to: 'schedule' },
    { name: 'Concerts', to: 'concerts' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-neutral-dark/90 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          className="logo text-white font-heading text-2xl font-bold"
          variants={itemVariants}
        >
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center">
            <span className="text-primary">San</span>Fermín
            <span className="text-xs ml-1 text-accent">.me</span>
          </ScrollLink>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          className="hidden lg:flex items-center space-x-8"
          variants={itemVariants}
        >
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-white hover:text-primary transition-colors duration-300 cursor-pointer text-sm font-medium"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-primary"
          >
            Book Now
          </ScrollLink>
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.div 
          className="lg:hidden"
          variants={itemVariants}
        >
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </motion.div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-neutral-dark/95 backdrop-blur-lg overflow-hidden"
      >
        <div className="container-custom py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-white hover:text-primary transition-colors duration-300 cursor-pointer text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-primary inline-block text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </ScrollLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;