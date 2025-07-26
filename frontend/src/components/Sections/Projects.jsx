import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Heart, Droplets, Brain } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "ArtCollab",
      subtitle: "Artist Collaboration Platform",
      description: "A platform designed for artists to collaborate, showcase, and co-create digital artwork with real-time features.",
      longDescription: "Built a multi-user interface for real-time collaboration and project sharing. Integrated Firebase Authentication and Firestore for user sessions and data storage. Designed a responsive UI with Tailwind for a seamless user experience across devices.",
      icon: Droplets,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
      tech: ["React", "Tailwind CSS", "Vite", "Firebase"],
      features: [
        "Multi-user real-time collaboration",
        "Firebase Authentication & Firestore",
        "Responsive mobile-first design",
        "Project sharing and showcase features"
      ],
      challenges: "Implementing real-time collaboration features while ensuring smooth user experience and data consistency across multiple users.",
      image: "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800",
      url:"https://artcolla.netlify.app/script/dashboard",
      gurl:"https://github.com/kireeti407/ArtCollab_App"
    },
    {
      id: 2,
      title: "Job Portal System",
      subtitle: "Comprehensive Recruitment Platform",
      description: "An end-to-end solution for recruiters to post jobs and candidates to apply with role-based access control.",
      longDescription: "Built a complete job portal with secure JWT authentication, role-based access for recruiters and candidates. Implemented dynamic filtering, search, and pagination to enhance performance and usability. Backend optimized using query indexing to boost API response time.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Role-based access with JWT authentication",
        "Dynamic filtering and search functionality",
        "Pagination for enhanced performance",
        "Optimized database queries with indexing"
      ],
      challenges: "Building secure authentication system and optimizing database performance for large-scale job listings and applications.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      url:"https://jobprovider.onrender.com/",
      gurl:"https://github.com/kireeti407/jobportal"
    },
    {
      id: 3,
      title: "MemeHub",
      subtitle: "Real-time Meme Sharing Platform",
      description: "Built during a 48-hour hackathon - a real-time platform for sharing memes with interactive features.",
      longDescription: "Developed during a 48-hour hackathon with focus on real-time user interaction including likes, comments, and leaderboards. Designed for high-read performance using Firestore and lazy loading. Collaborative planning and delivery with emphasis on scalability and user experience.",
      icon: Heart,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      tech: ["JavaScript", "HTML5", "CSS", "Firebase", "Netlify"],
      features: [
        "Real-time likes, comments, and interactions",
        "User leaderboards and engagement tracking",
        "High-performance Firestore integration",
        "Lazy loading for optimal performance"
      ],
      challenges: "Delivering a fully functional real-time platform within 48 hours while ensuring scalability and smooth user experience.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      url:"https://silly-melba-9a3820.netlify.app/",
      gurl:"https://github.com/kireeti407/memeHUB"
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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects that solve real problems. Each one demonstrates different aspects 
              of modern web development and user experience design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${project.bgColor} rounded-2xl p-8 cursor-pointer group relative overflow-hidden`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 transform rotate-12 translate-x-8 -translate-y-8">
                    <project.icon size={128} />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    <span className="font-medium">View Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center`}>
                          <selectedProject.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {selectedProject.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {selectedProject.subtitle}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Project Image */}
                    <div className="mb-8">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Project Overview
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {selectedProject.longDescription}
                        </p>

                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Challenges & Solutions
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>

                      {/* Sidebar */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Technologies Used
                        </h4>
                        <div className="space-y-2 mb-8">
                          {selectedProject.tech.map((tech) => (
                            <div
                              key={tech}
                              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() =>
                              window.open(`${selectedProject.url}`, "_blank")
                            }
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </button>
                          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                            onClick={() =>
                              window.open(`${selectedProject.gurl}`, "_blank")
                            }
                          >
                            <Github size={20} />
                            <span>View Code</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;