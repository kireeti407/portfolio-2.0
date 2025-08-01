import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "Python", level: 85, color: "bg-green-500" },
        { name: "Data Structures & Algorithms", level: 80, color: "bg-purple-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
        { name: "Vite", level: 80, color: "bg-purple-500" },
        { name: "Responsive Design", level: 90, color: "bg-pink-500" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "Firebase", level: 80, color: "bg-orange-600" }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications. 
              I focus on mastering tools that enable rapid, high-quality development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={skill.level}
                          className={`h-full ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Education & Training</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• B.Tech CSE - Sri Krishnadevaraya University</li>
                  <li>• Full Stack Development - Masai School</li>
                  <li>• MERN Stack Internship - EXCELR</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Achievements</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 5-Star Python - HackerRank</li>
                  <li>• 150+ LeetCode Problems Solved</li>
                  <li>• Hackathon Participant - Xto10X Edition #4</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;