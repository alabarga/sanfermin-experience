import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Import Swiper and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Refs for custom navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1562424292-1fa246a0ff4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "San Fermín Festival Crowd",
      category: "festival"
    },
    {
      src: "https://images.unsplash.com/photo-1578495944463-868965342955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Running of the Bulls",
      category: "bullrun"
    },
    {
      src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Pamplona City View",
      category: "city"
    },
    {
      src: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Fireworks at San Fermín",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1551972873-b7e8754e8e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Spanish Food",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1556098413-3fe6a0df8a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Traditional Dancers",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Bull Fighting Arena",
      category: "bullrun"
    },
    {
      src: "https://a0.muscache.com/im/pictures/9a0e42a9-911a-42a6-ad84-60f0ca101cf8.jpg?im_w=1200",
      alt: "Accommodation Interior",
      category: "accommodation"
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <section id="gallery" className="relative section-padding bg-light-dark overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            San Fermín Gallery
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Glimpses of the excitement and tradition that await you
          </motion.p>
        </motion.div>
      </div>

      {/* Full-width image slider */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full overflow-hidden mb-10 relative"
      >
        <div className="relative gallery-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Override navigation after init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="w-full h-[70vh]"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="relative w-full h-[70vh]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 to-transparent flex flex-col justify-end items-center pb-16 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.alt}</h3>
                    <p className="text-white/80 capitalize">{image.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation */}
          <div ref={prevRef} className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-300 text-white">
            <FaChevronLeft size={24} />
          </div>
          <div ref={nextRef} className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-300 text-white">
            <FaChevronRight size={24} />
          </div>
        </div>
      </motion.div>

      {/* Thumbnail grid */}
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={handleClickOutside}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 text-white bg-neutral-dark/50 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-neutral-lighter capitalize">Category: {selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;