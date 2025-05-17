import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // San Fermín starts on July 6, 2025 at 12:00 PM
  const sanFerminDate = new Date('July 6, 2025 12:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = sanFerminDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const CountdownItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md text-white text-2xl md:text-4xl font-bold w-16 md:w-24 h-16 md:h-24 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
        {value}
      </div>
      <span className="text-white/80 text-xs md:text-sm mt-2">{label}</span>
    </div>
  );

  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1562424292-1fa246a0ff4b?ixlib=rb-4.0.3&q=90&fm=jpg&crop=entropy&cs=tinysrgb&w=1600')", 
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/85 via-neutral-dark/70 to-neutral-dark/90"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1 bg-primary/80 text-white rounded-full text-sm md:text-base font-medium mb-4">6-14 July 2025</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white font-extrabold mb-4 leading-tight"
          >
            Experience the <span className="text-primary">Ultimate</span> San Fermín Festival
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Exclusive packages with premium accommodation, VIP event access, and unforgettable experiences at the world-famous Running of the Bulls festival in Pamplona, Spain.
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 mb-12"
          >
            <CountdownItem value={countdown.days} label="Days" />
            <CountdownItem value={countdown.hours} label="Hours" />
            <CountdownItem value={countdown.minutes} label="Minutes" />
            <CountdownItem value={countdown.seconds} label="Seconds" />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ScrollLink 
              to="packages" 
              smooth={true} 
              duration={800}
              className="btn btn-primary text-lg px-8 py-4"
            >
              View Packages
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={800}
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-1">
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            />
          </div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default HeroSection;