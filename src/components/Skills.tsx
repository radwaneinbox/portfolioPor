import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Layout, Smartphone, Database, Github as Git } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "HTML5, CSS3, JavaScript",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI Frameworks",
      description: "React, Next.js",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Styling",
      description: "Tailwind CSS, SASS",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-First, Progressive Enhancement",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Integration",
      description: "RESTful APIs",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Git className="w-8 h-8" />,
      title: "Version Control",
      description: "Git, GitHub",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.h2 
          variants={skillVariants}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${skill.bgColor} border border-gray-100 shadow-sm`}
            >
              <div className={`${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Skills;