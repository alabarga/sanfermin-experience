import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const PackagesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const packages = [
    {
      name: "Bronze",
      price: "€1,499",
      description: "Essential San Fermín experience for first-timers",
      features: [
        { text: "3-night stay in city center accommodation", included: true },
        { text: "Daily breakfast", included: true },
        { text: "VIP access to Chupinazo opening ceremony", included: true },
        { text: "Reserved balcony for one Bull Run viewing", included: true },
        { text: "Guided city tour", included: true },
        { text: "Premium seating for bullfight", included: false },
        { text: "All-inclusive dining", included: false },
        { text: "Private transport", included: false },
        { text: "Festival merchandise pack", included: false },
        { text: "Professional photography service", included: false },
      ],
      color: "bronze",
      recommended: false
    },
    {
      name: "Silver",
      price: "€2,499",
      description: "Comprehensive festival experience with premium access",
      features: [
        { text: "5-night stay in city center accommodation", included: true },
        { text: "All meals included (breakfast, lunch, dinner)", included: true },
        { text: "VIP access to Chupinazo and Procession", included: true },
        { text: "Reserved balcony for two Bull Run viewings", included: true },
        { text: "Premium seating for one bullfight", included: true },
        { text: "Daily guided experiences", included: true },
        { text: "Festival merchandise pack", included: true },
        { text: "Private transport", included: false },
        { text: "Exclusive evening parties", included: false },
        { text: "Professional photography service", included: false },
      ],
      color: "silver",
      recommended: true
    },
    {
      name: "Gold",
      price: "€3,999",
      description: "Ultimate luxury experience with exclusive access to all events",
      features: [
        { text: "7-night stay in city center accommodation", included: true },
        { text: "All-inclusive gourmet dining", included: true },
        { text: "VIP access to all major ceremonies", included: true },
        { text: "Private balcony for all Bull Run viewings", included: true },
        { text: "Front-row bullfight seating", included: true },
        { text: "Exclusive evening parties with festival performers", included: true },
        { text: "Private transport throughout stay", included: true },
        { text: "Premium festival merchandise collection", included: true },
        { text: "Professional photography service", included: true },
        { text: "Dedicated concierge service", included: true },
      ],
      color: "gold",
      recommended: false
    }
  ];

  const PackageCard = ({ pkg, index }) => {
    const delay = 0.1 * index;
    const cardVariants = {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          ease: [0.6, 0.05, -0.01, 0.9],
          delay
        }
      },
      hover: {
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }
    };

    let accentColor;
    if (pkg.color === 'bronze') accentColor = '#CD7F32';
    if (pkg.color === 'silver') accentColor = '#C0C0C0';
    if (pkg.color === 'gold') accentColor = '#FFD700';

    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
          pkg.recommended ? 'border-2 border-primary' : 'border border-neutral-200'
        }`}
      >
        {pkg.recommended && (
          <div className="bg-primary py-2 text-white text-center text-sm font-medium">
            MOST POPULAR
          </div>
        )}
        <div className="p-8">
          <div className="mb-6 text-center">
            <div 
              className="w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              <span className="text-2xl font-bold">{pkg.name.charAt(0)}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{pkg.name} Package</h3>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold">{pkg.price}</span>
              <span className="text-neutral-lighter ml-1">/person</span>
            </div>
            <p className="text-neutral-lighter mt-2 text-sm">{pkg.description}</p>
          </div>
          
          <div className="border-t border-b py-6 mb-6">
            <ul className="space-y-3">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className={`mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-neutral-lighter'}`}>
                    {feature.included ? <FaCheck /> : <FaTimes />}
                  </span>
                  <span className={feature.included ? 'text-neutral' : 'text-neutral-lighter'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 ${
              pkg.recommended 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-neutral-light text-neutral hover:bg-neutral-200'
            }`}
          >
            Book {pkg.name} Package
          </ScrollLink>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="packages" className="section-padding bg-secondary-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23D10019' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E\")",
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
          <motion.h2 variants={itemVariants} className="section-title">
            Choose Your San Fermín Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Select the perfect package to match your festival ambitions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12"
        >
          <p className="text-neutral-lighter mb-6">
            Looking for a customized experience? Contact us for a personalized package.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            className="btn btn-secondary inline-block"
          >
            Request Custom Package
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;