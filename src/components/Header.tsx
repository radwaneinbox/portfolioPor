import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Terminal } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div className="relative flex items-center gap-2">
          <motion.div className="relative p-3 rounded-lg bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
            <motion.div className="flex items-center gap-1">
              <motion.span className="text-2xl font-bold text-white">R</motion.span>
              <motion.span className="text-2xl font-bold text-white">K</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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

          {/* Download CV Button */}
          <motion.a
            href="http://127.0.0.1:5500/portfolio/Pdf/Radioane%20Koubbane%20(3).pdf"
            download
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
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
          
          {/* CV Button in Mobile Menu */}
          <a
            href="http://127.0.0.1:5500/portfolio/Pdf/Radioane%20Koubbane%20(3).pdf"
            download
            className="block text-center px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
          >
            Download CV
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
