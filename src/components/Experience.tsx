import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolio';
import { animations, useInViewConfig } from '../utils/animations';

const Experience: React.FC = () => {
  const [ref, inView] = useInView(useInViewConfig);

  const getCompanyColor = (company: string) => {
    const colors = {
      'xAI': 'from-purple-600 to-pink-600',
      'Regeneron Pharmaceuticals': 'from-green-600 to-emerald-600',
      'Syracuse University': 'from-orange-600 to-red-600',
    };
    return colors[company as keyof typeof colors] || 'from-blue-600 to-blue-600';
  };

  return (
    <section id="experience" className="section-padding bg-slate-900 dark:bg-slate-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={animations.fadeInUp.initial}
          animate={inView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
          transition={animations.fadeInUp.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in software engineering, AI, and team leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={animations.staggerFadeIn.initial}
              animate={inView ? animations.staggerFadeIn.animate : animations.staggerFadeIn.initial}
              transition={{ 
                ...animations.staggerFadeIn.transition, 
                delay: animations.getStaggerDelay(index)
              }}
              className="relative"
            >
              <div 
                className="bg-slate-800 dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 card-hover border border-slate-700 dark:border-slate-700 hover:border-slate-600"
                {...animations.cardHover}
              >
                {/* Company Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCompanyColor(exp.company)}`}>
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {exp.isCombined ? exp.combinedPeriod : exp.period}
                  </span>
                </div>

                {/* Position and Location */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.isCombined ? exp.combinedPositions?.join(' → ') : exp.position}
                  </h3>
                  <p className="text-gray-300">
                    📍 {exp.location}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 dark:bg-slate-700 text-gray-300 rounded-full text-sm font-medium border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 