import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const testimonials = [
    {
      name: "Michael Thompson",
      location: "United States",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "My San Fermín experience was absolutely incredible. The Gold package gave us front-row access to everything while staying in a beautiful apartment right in the heart of the action. The private balcony for the bull runs was an unforgettable experience!"
    },
    {
      name: "Sophia Garcia",
      location: "Canada",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The Silver package was perfect for our group. Comfortable accommodation in the city center meant we could easily walk to all events. Their guides really knew their stuff and made sure we experienced all the traditions. I'd definitely book through them again!"
    },
    {
      name: "James Wilson",
      location: "United Kingdom",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      text: "As first-timers to San Fermín, the Bronze package was ideal. Having accommodation sorted and getting VIP access to the opening ceremony made everything so much easier. The reserved balcony for the bull run gave us the perfect view without the danger!"
    },
    {
      name: "Elena Rodriguez",
      location: "Australia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Traveling from Australia for San Fermín was a dream come true. Our Gold package ensured we didn't miss a thing, from the Chupinazo to the closing ceremony. The house was beautiful and perfectly located. Worth every penny for this once-in-a-lifetime experience!"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-accent" : "text-neutral-200"} />
    ));
  };

  const visibleTestimonials = [];
  if (testimonials.length > 0) {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % testimonials.length;
    const thirdIndex = (currentIndex + 2) % testimonials.length;
    
    visibleTestimonials.push(
      testimonials[firstIndex],
      testimonials[secondIndex],
      testimonials[thirdIndex]
    );
  }

  return (
    <section className="relative py-20 bg-neutral-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#D10019_1px,transparent_1px)] [background-size:20px_20px]"></div>
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
            Guest Experiences
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-white/80">
            Hear from previous San Fermín festival attendees
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-glass"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute top-0 left-0 text-white/20 text-2xl" />
                  <p className="pl-8 text-white/80 italic">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden">
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-glass"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-white/60 text-sm">{testimonials[currentIndex].location}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-white/20 text-2xl" />
                <p className="pl-8 text-white/80 italic">{testimonials[currentIndex].text}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;