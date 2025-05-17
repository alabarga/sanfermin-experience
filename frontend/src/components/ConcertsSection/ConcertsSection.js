import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaMapMarkerAlt, FaMusic } from 'react-icons/fa';

const ConcertsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [filter, setFilter] = useState('all');

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

  const concerts = [
    {
      date: "July 6",
      artist: "Bulego",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Rock",
      image: "https://noticiasdenavarra.infonortedigital.com/wp-content/uploads/2024/03/Grupo-Bulego-Pamplona-San-Fermina%CC%81n.jpg"
    },
    {
      date: "July 7",
      artist: "Tatxers",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Folk Rock",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 7",
      artist: "Kaotiko",
      time: "00:50",
      venue: "Plaza del Castillo",
      genre: "Punk Rock",
      image: "https://elpais.com/cultura/imagenes/2013/07/11/actualidad/1373535484_303307_1373541301_noticia_fotograma.jpg"
    },
    {
      date: "July 8",
      artist: "Rozalén",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Pop",
      image: "https://las1000yuna.es/wp-content/uploads/2019/10/Rozale%CC%81n.jpg"
    },
    {
      date: "July 9",
      artist: "Leire Martínez",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Pop Rock",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 10",
      artist: "OBK",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Synth Pop",
      image: "https://cronicaglobal.elespanol.com/uploads/s1/27/32/68/3/concierto-de-obk-foto-facebook-jordi-s-nchez.jpeg"
    },
    {
      date: "July 10",
      artist: "Ladilla Rusa",
      time: "01:00",
      venue: "Plaza del Castillo",
      genre: "Electropop",
      image: "https://cadenaser.com/resizer/O-yIGiuQGjvBjARRuhW-U3PGKYI=/736x414/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/WDJPVDHGURBNHGVHGWFFQCOKVY.jpg"
    },
    {
      date: "July 11",
      artist: "Dupla",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Rock",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 11",
      artist: "Zea Mays",
      time: "00:50",
      venue: "Plaza del Castillo",
      genre: "Alternative Rock",
      image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 12",
      artist: "Sara Socas",
      time: "22:00",
      venue: "Plaza del Castillo",
      genre: "Hip Hop",
      image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 12",
      artist: "Cali y El Dandee",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Latin Pop",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 13",
      artist: "Villano Antillano",
      time: "23:45",
      venue: "Plaza del Castillo",
      genre: "Reggaeton",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      date: "July 13",
      artist: "Lia Kali",
      time: "01:00",
      venue: "Plaza del Castillo",
      genre: "R&B",
      image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const dates = [...new Set(concerts.map(concert => concert.date))];
  const genres = [...new Set(concerts.map(concert => concert.genre))];

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredConcerts = filter === 'all' 
    ? concerts 
    : dates.includes(filter) 
      ? concerts.filter(concert => concert.date === filter) 
      : concerts.filter(concert => concert.genre === filter);

  return (
    <section id="concerts" className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D10019' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px"
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
            San Fermín 2025 Concerts
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Live music performances throughout the festival at Plaza del Castillo
          </motion.p>
        </motion.div>

        {/* Filter options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => handleFilterChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral hover:bg-neutral-200'
            }`}
          >
            All Concerts
          </motion.button>

          {/* Date filters */}
          {dates.map((date, index) => (
            <motion.button
              key={`date-${index}`}
              variants={itemVariants}
              onClick={() => handleFilterChange(date)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === date
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral hover:bg-neutral-200'
              }`}
            >
              {date}
            </motion.button>
          ))}

          {/* Genre filters */}
          {genres.map((genre, index) => (
            <motion.button
              key={`genre-${index}`}
              variants={itemVariants}
              onClick={() => handleFilterChange(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === genre
                  ? 'bg-accent text-white'
                  : 'bg-neutral-100 text-neutral hover:bg-neutral-200'
              }`}
            >
              {genre}
            </motion.button>
          ))}
        </motion.div>

        {/* Concert grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredConcerts.map((concert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card bg-white overflow-hidden h-full"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={concert.image} 
                  alt={concert.artist} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-3 rounded-lg text-sm font-medium">
                  {concert.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{concert.artist}</h3>
                <div className="flex flex-col space-y-2 text-sm text-neutral-lighter mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{concert.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{concert.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMusic className="mr-2" />
                    <span>{concert.genre}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                    Free Admission
                  </span>
                  <span className="text-xs font-medium">Doors open at {parseInt(concert.time) - 1}:00</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConcertsSection;