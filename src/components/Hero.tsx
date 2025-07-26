import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { animations } from '../utils/animations';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use the collapsed header height since menu will be closed when scrolling
      const collapsedHeaderHeight = window.innerWidth < 768 ? 64 : 80; // 64px mobile, 80px desktop
      
      window.scrollTo({
        top: element.offsetTop - collapsedHeaderHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          {...animations.hero.container}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            {...animations.hero.title}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            {...animations.hero.subtitle}
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            {...animations.hero.description}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            {...animations.hero.buttons}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              {...animations.buttonHover}
            >
              View My Work
            </motion.button>
            
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                {...animations.socialHover}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                {...animations.socialHover}
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        {...animations.hero.scrollIndicator}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          {...animations.buttonHover}
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 