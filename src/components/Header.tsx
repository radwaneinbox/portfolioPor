import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Terminal } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    initial: {
      y: -20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  const codeIconVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 10px rgba(124, 58, 237, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 10px rgba(236, 72, 153, 0.5)",
        "0 0 10px rgba(124, 58, 237, 0.5)"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={logoVariants}
          className="relative flex items-center gap-2"
        >
          <motion.div
            variants={glowVariants}
            animate="animate"
            className="relative p-3 rounded-lg bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500"
          >
            <motion.div className="flex items-center gap-1">
              <motion.span
                variants={letterVariants}
                className="text-2xl font-bold text-white"
              >
                R
              </motion.span>
              <motion.span
                variants={letterVariants}
                className="text-2xl font-bold text-white"
              >
                K
              </motion.span>
            </motion.div>
            
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>

          <motion.div
            variants={codeIconVariants}
            animate="animate"
            className="absolute -right-6 top-1/2 -translate-y-1/2"
          >
            <Code2 className="w-4 h-4 text-purple-500" />
          </motion.div>

          <motion.div
            className="absolute -left-4 top-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Terminal className="w-3 h-3 text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;