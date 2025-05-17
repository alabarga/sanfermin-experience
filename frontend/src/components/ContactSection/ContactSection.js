import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaUsers, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ContactSection = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    packageType: 'bronze',
    message: '',
  });
  const [startDate, setStartDate] = useState(new Date("2025-07-06"));
  const [endDate, setEndDate] = useState(new Date("2025-07-09"));
  const [formStatus, setFormStatus] = useState(null);

  // Animation controls
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email) {
      setFormStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      success: true,
      message: 'Your booking request has been received! We will contact you within 24 hours to finalize details.'
    });

    // Reset form after submission (you'd typically do this after a successful API response)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        packageType: 'bronze',
        message: '',
      });
      setStartDate(new Date("2025-07-06"));
      setEndDate(new Date("2025-07-09"));
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D10019' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
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
            Book Your San Fermín Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Fill out the form below to start your reservation, and we'll contact you within 24 hours
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {formStatus && (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-neutral font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              {/* Email & Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-neutral font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-neutral font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              {/* Dates Selection */}
              <div>
                <label className="block text-neutral font-medium mb-2">Dates *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaCalendarAlt />
                    </div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date("2025-07-06")}
                      maxDate={new Date("2025-07-14")}
                      className="w-full px-4 py-3 pl-10 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                      placeholderText="Arrival Date"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaCalendarAlt />
                    </div>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      maxDate={new Date("2025-07-14")}
                      className="w-full px-4 py-3 pl-10 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                      placeholderText="Departure Date"
                    />
                  </div>
                </div>
              </div>
              
              {/* Number of Guests & Package Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-neutral font-medium mb-2">Number of Guests *</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaUsers />
                    </div>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-10 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="packageType" className="block text-neutral font-medium mb-2">Package Type *</label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="bronze">Bronze Package (€1,499/person)</option>
                    <option value="silver">Silver Package (€2,499/person)</option>
                    <option value="gold">Gold Package (€3,999/person)</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-neutral font-medium mb-2">Additional Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Submit Booking Request
              </motion.button>
              
              <p className="text-neutral-lighter text-sm text-center mt-4">
                By submitting this form, you agree to our terms and conditions.
              </p>
            </motion.form>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:pl-10"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-neutral-lighter">info@sanfermin.me</p>
                    <p className="text-neutral-lighter">bookings@sanfermin.me</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-neutral-lighter">+34 123 456 789</p>
                    <p className="text-neutral-lighter">+1 987 654 3210 (International)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Office Location</h4>
                    <p className="text-neutral-lighter">Calle Mayor, 15</p>
                    <p className="text-neutral-lighter">31001 Pamplona, Navarra, Spain</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-neutral-dark text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Booking Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Festival dates: July 6-14, 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>50% deposit required to secure booking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Full payment due 60 days before arrival</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Free cancellation up to 90 days before the festival</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Accommodation capacity: Up to 6 guests per house</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Custom packages available on request</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;