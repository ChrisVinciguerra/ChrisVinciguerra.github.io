import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, leadership } from '../data/portfolio';
import { animations, useInViewConfig } from '../utils/animations';

const Projects: React.FC = () => {
  const [ref, inView] = useInView(useInViewConfig);

  return (
    <section id="projects" className="section-padding bg-slate-900 dark:bg-slate-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={animations.fadeInUp.initial}
          animate={inView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
          transition={animations.fadeInUp.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From founding startups to leading university clubs, I've consistently demonstrated the ability to bring innovative ideas to life.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mb-16">
          <motion.h3 
            initial={animations.fadeInUp.initial}
            animate={inView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
            transition={{ ...animations.fadeInUp.transition, delay: 0.1 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={animations.staggerFadeIn.initial}
                animate={inView ? animations.staggerFadeIn.animate : animations.staggerFadeIn.initial}
                transition={{ 
                  ...animations.staggerFadeIn.transition, 
                  delay: animations.getStaggerDelay(index, 0.2)
                }}
                className="bg-slate-800 dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-700 dark:border-slate-700 hover:border-slate-600 transition-colors duration-300"
                {...animations.cardHover}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-gray-300">{project.role} • {project.period}</p>
                  <p className="text-sm text-gray-400">{project.location}</p>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-gray-300 text-sm leading-relaxed">
                      • {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 dark:bg-slate-700 text-gray-300 rounded-full text-xs border border-slate-600">
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
          <motion.h3 
            initial={animations.fadeInUp.initial}
            animate={inView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
            transition={{ ...animations.fadeInUp.transition, delay: 0.4 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Leadership Experience
          </motion.h3>
          <div className="space-y-6">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={animations.staggerFadeIn.initial}
                animate={inView ? animations.staggerFadeIn.animate : animations.staggerFadeIn.initial}
                transition={{ 
                  ...animations.staggerFadeIn.transition, 
                  delay: animations.getStaggerDelay(index, 0.5)
                }}
                className="bg-slate-800 dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 dark:border-slate-700 hover:border-slate-600 transition-colors duration-300"
                {...animations.cardHover}
              >
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                  <p className="text-gray-300">{role.role} • {role.period}</p>
                </div>
                <p className="text-gray-300">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 