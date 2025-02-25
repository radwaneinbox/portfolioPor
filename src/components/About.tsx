import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I’m Radioane Khoubbane, a passionate Frontend Developer with a year of hands-on experience creating dynamic and user-friendly websites. Currently, I’m a student at ALX Software Engineering, where I’m honing my skills and expanding my knowledge in modern web technologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Working independently, I specialize in transforming ideas into elegant, functional designs that provide seamless user experiences. My journey into web development began with a curiosity about the inner workings of the internet, and it has grown into a professional pursuit to craft exceptional digital solutions.
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
              >
               Problem Solver: Tackling challenges with innovative solutions.
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
               Creative Thinker: Designing visually engaging and effective interfaces.
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
              >
                Independent Worker: Successfully managing projects and delivering results solo.
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjcwa3R3bmt5ZW15d2NwNTQwaDZ1azI4OWYxYXM2NHF2Mzh4NGpibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u2pmTWUi0MXjyrMaVj/giphy.webp"
                alt="About Me"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg" />
            </motion.div>
            <div className="absolute inset-0 bg-purple-200 rounded-lg transform rotate-3" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default About;