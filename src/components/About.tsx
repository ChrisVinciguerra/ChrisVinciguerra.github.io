import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, skills, personalInfo } from '../data/portfolio';
import { animations, useInViewConfig } from '../utils/animations';

const About: React.FC = () => {
  const [ref, inView] = useInView(useInViewConfig);

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Programming Languages': 'from-blue-500 to-cyan-500',
      'Frontend & Backend': 'from-purple-500 to-pink-500',
      'AI/ML & Data Science': 'from-green-500 to-emerald-500',
      'DevOps & Tools': 'from-orange-500 to-red-500',
      'Development & Leadership': 'from-indigo-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="about" className="section-padding bg-slate-900 dark:bg-slate-900 overflow-hidden">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={animations.fadeInUp.initial}
          animate={inView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
          transition={animations.fadeInUp.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {personalInfo.about}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={animations.slideInLeft.initial}
            animate={inView ? animations.slideInLeft.animate : animations.slideInLeft.initial}
            transition={{ ...animations.slideInLeft.transition, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={animations.staggerFadeIn.initial}
                  animate={inView ? animations.staggerFadeIn.animate : animations.staggerFadeIn.initial}
                  transition={{ 
                    ...animations.staggerFadeIn.transition, 
                    delay: animations.getStaggerDelay(index, 0.3)
                  }}
                  className="bg-slate-800 dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 dark:border-slate-700 hover:border-slate-600 transition-colors duration-300"
                  {...animations.cardHover}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-sm text-gray-300">
                    GPA: {edu.gpa}
                    {edu.concentration && ` • ${edu.concentration}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={animations.slideInRight.initial}
            animate={inView ? animations.slideInRight.animate : animations.slideInRight.initial}
            transition={{ ...animations.slideInRight.transition, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={animations.staggerFadeIn.initial}
                  animate={inView ? animations.staggerFadeIn.animate : animations.staggerFadeIn.initial}
                  transition={{ 
                    ...animations.staggerFadeIn.transition, 
                    delay: animations.getStaggerDelay(categoryIndex, 0.5)
                  }}
                  className="bg-slate-800 dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 dark:border-slate-700 hover:border-slate-600 transition-colors duration-300"
                  {...animations.cardHover}
                >
                  <div className={`inline-block bg-gradient-to-r ${getCategoryColor(category)} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          skill.level === 'expert'
                            ? 'bg-green-900 text-green-200 border border-green-700'
                            : skill.level === 'advanced'
                            ? 'bg-blue-900 text-blue-200 border border-blue-700'
                            : 'bg-slate-700 text-gray-200 border border-slate-600'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 