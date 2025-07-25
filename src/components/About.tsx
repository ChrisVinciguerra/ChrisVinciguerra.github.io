import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, skills, personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 overflow-hidden">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {personalInfo.about}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    GPA: {edu.gpa}
                    {edu.concentration && ` • ${edu.concentration}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                  className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-xl transition-shadow duration-300"
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
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : skill.level === 'advanced'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
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