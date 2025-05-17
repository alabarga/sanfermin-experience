import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
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
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const factCards = [
    {
      icon: <FaCalendarAlt className="text-primary text-3xl" />,
      title: "Nine Day Festival",
      description: "San Fermín runs from July 6-14 each year, offering non-stop celebration and tradition."
    },
    {
      icon: <FaMapMarkerAlt className="text-primary text-3xl" />,
      title: "Pamplona, Spain",
      description: "Located in the heart of Navarre region, Pamplona transforms into a vibrant celebration."
    },
    {
      icon: <FaBullhorn className="text-primary text-3xl" />,
      title: "400+ Year Tradition",
      description: "Dating back to the 16th century, the festival honors Pamplona's patron saint, San Fermín."
    },
    {
      icon: <FaUsers className="text-primary text-3xl" />,
      title: "1 Million+ Visitors",
      description: "Join people from all over the world to experience this UNESCO-recognized cultural event."
    }
  ];

  return (
    <section id="about" className="relative section-padding bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D10019' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "24px 24px"
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
            Experience the World-Famous San Fermín
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Nine days of tradition, excitement, and celebration in the heart of Pamplona, Spain.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral">The Festival</h3>
            <p className="mb-4">
              San Fermín is one of the world's most famous festivals, known for the thrilling Running of the Bulls (Encierro) through the streets of Pamplona. But it's so much more than just the bull runs.
            </p>
            <p className="mb-4">
              Starting with the explosive Chupinazo ceremony on July 6th, the festival transforms Pamplona into a non-stop celebration with processions, fireworks, music, bullfights, and traditional dancing.
            </p>
            <p>
              The entire city dresses in the traditional white clothing with red scarves and sashes, creating a sea of color and energy that must be experienced to be believed.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1578495944463-868965342955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="San Fermín Festival Celebration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {factCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card bg-white p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{card.title}</h4>
              <p className="text-neutral-lighter">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;