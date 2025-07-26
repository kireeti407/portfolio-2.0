import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Palette, Zap } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-1/4 left-1/4 text-blue-200 dark:text-blue-800"
            >
              <Code size={60} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
              className="absolute top-1/3 right-1/4 text-purple-200 dark:text-purple-800"
            >
              <Palette size={40} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "4s" }}
              className="absolute bottom-1/3 left-1/3 text-green-200 dark:text-green-800"
            >
              <Zap size={50} />
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                S. Kireeti
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light">
              Full Stack Developer & B.Tech Graduate
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Recent B.Tech Computer Science graduate from Sri Krishnadevaraya
              University with Full Stack Development certification from Masai
              School. I build scalable web applications using the MERN stack,
              React, and modern tools. Currently seeking an entry-level role to
              contribute to innovative projects.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://github.com/kireeti407", "_blank")
              }
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              View My Work
            </motion.button>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=17k34uoMqXbOkpEdAOiHrLGC6bjO6q2od"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
