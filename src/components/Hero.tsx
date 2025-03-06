import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const nameVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const name = "Radioane       Khoubbane".split('');

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const decorationVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b">
      <div className="absolute inset-0 bg-[url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWltZXNqcjA5Y2tpMXdzbDZ4N3NxcXJjNmRvZXV3bms2ZHhtNnNvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/crwwGNqIMccLXpD10F/giphy.gif')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left">
          <motion.div 
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lg text-purple-600 font-medium">Hi</span>
            <motion.span
              className="text-lg text-purple-600"
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
          </motion.div>

          <motion.div
            variants={nameVariants}
            initial="initial"
            animate="animate"
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap">
              <span className="mr-2">I'm</span>
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(to right, #7c3aed, #3b82f6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="absolute -top-6 -right-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-8 h-8 text-purple-500" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="relative"
          >
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            I design and develop clean, modern, and visually engaging websites.
            </p>
            <motion.div
              className="absolute -left-8 top-1/2"
              animate={{
                x: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <Code className="w-6 h-6 text-blue-500" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              See My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHpOZPVmEouAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730480292291?e=1746662400&v=beta&t=Y5zI3H2XtqLjnU0QtoWRmbV6M2q5TLCbZ4q4wO3tXmY"
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl" />
          </motion.div>
          <motion.div
            className="absolute -z-10 inset-0 border-2 border-purple-300 rounded-2xl"
            animate={{
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        variants={decorationVariants}
        animate="animate"
        className="absolute top-1/4 left-10 w-64 h-64 border border-purple-200 rounded-full"
      />
      <motion.div
        variants={decorationVariants}
        animate="animate"
        className="absolute bottom-1/4 right-10 w-48 h-48 border border-blue-200 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"
      />
    </section>
  );
};

export default Hero;
