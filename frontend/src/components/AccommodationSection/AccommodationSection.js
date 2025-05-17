import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHome, FaBed, FaUtensils, FaMapMarkerAlt, FaWifi, FaSnowflake } from 'react-icons/fa';

const AccommodationSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const amenities = [
    { icon: <FaBed />, text: "3 Comfortable Bedrooms" },
    { icon: <FaUtensils />, text: "Fully Equipped Kitchen" },
    { icon: <FaMapMarkerAlt />, text: "City Center Location" },
    { icon: <FaWifi />, text: "High-Speed WiFi" },
    { icon: <FaHome />, text: "Living & Dining Area" },
    { icon: <FaSnowflake />, text: "Air Conditioning" }
  ];

  return (
    <section id="accommodation" className="section-padding bg-neutral text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title text-white">
            Premium City Center Accommodation
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-white/80">
            Stay in the heart of Pamplona, just steps away from all San Fermín events
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6">
              Your Home Away from Home
            </motion.h3>
            <motion.p variants={itemVariants} className="mb-6 text-white/80">
              Our exclusive city center accommodation places you in the perfect location to experience San Fermín. The comfortable, fully-equipped house accommodates up to 6 people and provides the ideal base for your festival adventure.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-8 text-white/80">
              With all the comforts of home and just a short walk to the main festival areas, you'll have the perfect balance of convenience and relaxation during the exciting festival days.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            >
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary text-xl">{amenity.icon}</div>
                  <span className="text-sm">{amenity.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-accent font-medium mb-2">Maximum Capacity:</p>
              <p className="text-white/80 mb-6">6 guests (3 bedrooms)</p>
              
              <p className="text-accent font-medium mb-2">Location:</p>
              <p className="text-white/80">5-minute walk to Plaza del Castillo<br />10-minute walk to the Bull Run route</p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="col-span-2 overflow-hidden rounded-xl shadow-lg"
            >
              <motion.img
                variants={imageVariants}
                src="https://a0.muscache.com/im/pictures/9a0e42a9-911a-42a6-ad84-60f0ca101cf8.jpg?im_w=1200"
                alt="Accommodation Living Area"
                className="w-full h-64 object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <motion.img
                variants={imageVariants}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e3de4fcf-de2e-47dd-9587-87527786e04a.jpeg?im_w=720"
                alt="Accommodation Kitchen"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <motion.img
                variants={imageVariants}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/a2c266a7-e77c-43e8-8b68-cea5cfe8bc5c.jpeg?im_w=720"
                alt="Accommodation Bedroom"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;