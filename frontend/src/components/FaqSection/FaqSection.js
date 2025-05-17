import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqSection = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is included in each package?",
      answer: "Each package includes accommodation in our city center house, festival access, and guided experiences. The Bronze package includes 3 nights, the Silver package includes 5 nights, and the Gold package includes 7 nights. You can find detailed inclusions in our Packages section above."
    },
    {
      question: "Is it safe to attend the Running of the Bulls?",
      answer: "The Running of the Bulls can be dangerous for participants. Our packages offer safe viewing experiences from private balconies overlooking the route, where you can enjoy the excitement without the risks. If you wish to participate in the run itself, we can provide guidance but do not recommend it unless you are physically fit and aware of the serious risks involved."
    },
    {
      question: "What should I wear for San Fermín?",
      answer: "The traditional outfit is white clothing with red scarves and sashes. We provide a complimentary red scarf (pañuelo) with all packages. We recommend comfortable white pants/skirts and shirts, comfortable shoes, and your red accessories. This outfit is worn throughout the festival."
    },
    {
      question: "How do I get to Pamplona?",
      answer: "Pamplona can be reached by flying into Pamplona Airport (PNA), Bilbao Airport (BIO), or Madrid (MAD) followed by a train or bus connection. Our Silver and Gold packages include transport from Pamplona Airport, and for an additional fee, we can arrange pickup from other locations."
    },
    {
      question: "Can I customize my package?",
      answer: "Yes! We offer fully customizable experiences. Contact us with your specific requirements, whether it's extended stays, additional experiences, or special arrangements, and we'll create a bespoke package for you."
    },
    {
      question: "What is the best time to arrive for the festival?",
      answer: "We recommend arriving on July 5th or early on July 6th to experience the opening ceremony (Chupinazo) which takes place at noon on July 6th. This is one of the most exciting moments of the festival and sets the tone for the entire celebration."
    },
    {
      question: "Is the accommodation shared with other guests?",
      answer: "No, our packages include private accommodation for your group only. The city center house accommodates up to 6 people comfortably, so you'll only be sharing with the people in your booking."
    },
    {
      question: "Do I need to book well in advance?",
      answer: "Yes, San Fermín is an extremely popular festival that attracts visitors from around the world. Accommodation in Pamplona fills up quickly, sometimes a year in advance. We recommend booking as early as possible to secure your preferred dates and package type."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-secondary-dark">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Everything you need to know about your San Fermín experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto divide-y divide-neutral-200"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="py-5"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-bold text-neutral">{item.question}</h3>
                <span className="ml-6 flex-shrink-0 text-primary">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-neutral-lighter">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12"
        >
          <p className="text-neutral-lighter mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="btn btn-primary inline-block"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;