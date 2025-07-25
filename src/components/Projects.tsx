import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, leadership } from '../data/portfolio';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects & Leadership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From founding startups to leading university clubs, I've consistently demonstrated the ability to bring innovative ideas to life.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-dark-600"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.role} • {project.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.location}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      • {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Leadership Experience</h3>
          <div className="space-y-6">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-600"
              >
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{role.role} • {role.period}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 