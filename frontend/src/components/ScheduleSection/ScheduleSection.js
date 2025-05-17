import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarDay, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  // Schedule data for each day
  const scheduleData = [
    {
      date: "July 6th",
      dayOfWeek: "Sunday",
      events: [
        {
          time: "12:00",
          name: "Chupinazo (Opening Ceremony)",
          location: "Plaza Consistorial",
          description: "The festival officially begins with the firing of a rocket (chupinazo) from the balcony of City Hall.",
          highlight: true
        },
        {
          time: "16:30",
          name: "Parade of Giants & Bigheads",
          location: "City Center",
          description: "Traditional parade featuring giant figures and characters with oversized heads."
        },
        {
          time: "19:30",
          name: "First Evening Mass for San Fermín",
          location: "San Lorenzo Church",
          description: "Religious ceremony honoring the patron saint."
        },
        {
          time: "23:00",
          name: "Fireworks Display",
          location: "Ciudadela Park",
          description: "Spectacular fireworks show marking the first night of festivities."
        },
        {
          time: "23:45",
          name: "Concert: Bulego",
          location: "Plaza del Castillo",
          description: "Live music performance to celebrate the opening day."
        }
      ]
    },
    {
      date: "July 7th",
      dayOfWeek: "Monday",
      events: [
        {
          time: "07:00",
          name: "Dianas (Morning Reveille)",
          location: "City Streets",
          description: "Traditional early morning wake-up call with music."
        },
        {
          time: "08:00",
          name: "First Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "The first and most anticipated bull run of the festival.",
          highlight: true
        },
        {
          time: "09:30",
          name: "Procession of San Fermín",
          location: "City Center",
          description: "Religious procession carrying the statue of San Fermín."
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Featuring the bulls from the morning run."
        },
        {
          time: "23:45",
          name: "Concert: Tatxers",
          location: "Plaza del Castillo",
          description: "Live music to keep the celebration going."
        },
        {
          time: "00:50",
          name: "Concert: Kaotiko",
          location: "Plaza del Castillo",
          description: "Late night music performance."
        }
      ]
    },
    {
      date: "July 8th",
      dayOfWeek: "Tuesday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "The daily bull run through the streets of Pamplona."
        },
        {
          time: "11:00",
          name: "Children's Day Activities",
          location: "Plaza del Castillo",
          description: "Special events and games for children."
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Traditional bullfighting event."
        },
        {
          time: "23:45",
          name: "Concert: Rozalén",
          location: "Plaza del Castillo",
          description: "Featured musical performance.",
          highlight: true
        }
      ]
    },
    {
      date: "July 9th",
      dayOfWeek: "Wednesday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "Daily running of the bulls."
        },
        {
          time: "12:00",
          name: "Traditional Folk Dancing",
          location: "Plaza del Castillo",
          description: "Performances of traditional Basque and Navarrese dances."
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Featuring top matadors."
        },
        {
          time: "23:45",
          name: "Concert: Leire Martínez",
          location: "Plaza del Castillo",
          description: "Evening concert performance."
        }
      ]
    },
    {
      date: "July 10th",
      dayOfWeek: "Thursday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "The daily bull run."
        },
        {
          time: "17:00",
          name: "Rural Sports Exhibition",
          location: "Plaza de los Fueros",
          description: "Demonstration of traditional Basque rural sports and contests.",
          highlight: true
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Traditional afternoon bullfight."
        },
        {
          time: "23:45",
          name: "Concert: OBK",
          location: "Plaza del Castillo",
          description: "Evening music performance."
        },
        {
          time: "01:00",
          name: "Concert: Ladilla Rusa",
          location: "Plaza del Castillo",
          description: "Late night concert."
        }
      ]
    },
    {
      date: "July 11th",
      dayOfWeek: "Friday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "Daily running with the bulls."
        },
        {
          time: "12:00",
          name: "Wine Tasting Event",
          location: "Plaza San Francisco",
          description: "Sampling of Navarre region wines."
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Featuring the bulls from the morning run."
        },
        {
          time: "23:45",
          name: "Concert: Dupla",
          location: "Plaza del Castillo",
          description: "Evening concert."
        },
        {
          time: "00:50",
          name: "Concert: Zea Mays",
          location: "Plaza del Castillo",
          description: "Late night music performance."
        }
      ]
    },
    {
      date: "July 12th",
      dayOfWeek: "Saturday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "The daily bull run through Pamplona's streets."
        },
        {
          time: "11:00",
          name: "Children's Encierro",
          location: "Plaza del Castillo",
          description: "A safe version of the bull run for children with wooden bull figures.",
          highlight: true
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Special Saturday bullfight with premier matadors."
        },
        {
          time: "22:00",
          name: "Concert: Sara Socas",
          location: "Plaza del Castillo",
          description: "Early evening performance."
        },
        {
          time: "23:45",
          name: "Concert: Cali y El Dandee",
          location: "Plaza del Castillo",
          description: "Featured musical act of the night."
        }
      ]
    },
    {
      date: "July 13th",
      dayOfWeek: "Sunday",
      events: [
        {
          time: "08:00",
          name: "Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "Second-to-last bull run of the festival."
        },
        {
          time: "12:00",
          name: "Farmer's Market",
          location: "Plaza San Francisco",
          description: "Traditional products and crafts from the region."
        },
        {
          time: "18:30",
          name: "Bullfight",
          location: "Plaza de Toros",
          description: "Sunday afternoon bullfight."
        },
        {
          time: "23:45",
          name: "Concert: Villano Antillano",
          location: "Plaza del Castillo",
          description: "Evening music performance."
        },
        {
          time: "01:00",
          name: "Concert: Lia Kali",
          location: "Plaza del Castillo",
          description: "Late night concert."
        }
      ]
    },
    {
      date: "July 14th",
      dayOfWeek: "Monday",
      events: [
        {
          time: "08:00",
          name: "Final Encierro (Bull Run)",
          location: "Santo Domingo to Plaza de Toros",
          description: "The last bull run of San Fermín 2025.",
          highlight: true
        },
        {
          time: "18:30",
          name: "Final Bullfight",
          location: "Plaza de Toros",
          description: "The closing bullfight of the festival."
        },
        {
          time: "24:00",
          name: "Pobre de Mí (Closing Ceremony)",
          location: "Plaza Consistorial",
          description: "The emotional closing ceremony where participants light candles and sing 'Pobre de Mí' to mark the end of the festivities until next year.",
          highlight: true
        }
      ]
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="schedule" className="section-padding bg-neutral-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.006-7.58 7.58 7.58 7.58-81.006 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 0-1.96.415-3 .5.797-1.37 1.838-2.835 3.187-4.113-.84 1.313-1.49 2.91-1.532 4.518C27.027.917 26.563.5 26 .5c-2.76 0-5-2.24-5-5 0-2.42 1.718-4.437 4.005-4.9.216-1.023.496-2.023.837-3H16.5c.836 2.448 2.217 4.683 3.934 6.612C19.167 10.667 17.75 14.542 17.75 19c0 2.424.433 4.75 1.232 6.905C16.534 21.48 15.5 16.475 15.5 11c0-3.684.71-7.175 2-10.4C15.758.873 14.14 0 12.395 0H28.5z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "100px 100px"
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
            Festival Program 2025
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-white/80">
            Day-by-day schedule of San Fermín events from July 6th to 14th
          </motion.p>
        </motion.div>

        {/* Day tabs navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-10 overflow-x-auto"
        >
          <div className="flex space-x-1 min-w-max pb-4">
            {scheduleData.map((day, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => handleTabChange(index)}
                className={`px-4 py-3 rounded-lg flex-1 transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{day.dayOfWeek}</span>
                  <span className={`font-bold ${activeTab === index ? 'text-white' : 'text-white/90'}`}>
                    {day.date}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Day schedule */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-glass"
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col space-y-8">
              {scheduleData[activeTab].events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row md:items-start gap-4 p-4 rounded-xl transition-all ${
                    event.highlight ? 'bg-primary/20 border border-primary/30' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 ${
                      event.highlight ? 'bg-primary text-white' : 'bg-white/10 text-white'
                    }`}>
                      <span className="text-lg font-bold">{event.time}</span>
                    </div>
                    <div className="w-0.5 h-full bg-white/20"></div>
                  </div>
                  
                  <div className="flex-grow md:pt-1">
                    <h4 className={`text-lg md:text-xl font-bold mb-1 ${event.highlight ? 'text-primary' : 'text-white'}`}>
                      {event.name}
                    </h4>
                    
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-white/60 mb-3 gap-1 md:gap-4">
                      <div className="flex items-center">
                        <FaClock className="mr-1 text-xs" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-xs" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-8 text-center"
        >
          <p className="text-white/70 text-sm">
            Schedule is subject to minor changes. Please check with our concierge for daily updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;