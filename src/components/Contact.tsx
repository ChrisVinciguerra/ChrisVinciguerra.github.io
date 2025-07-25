import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      icon: Mail
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      icon: Phone
    },
    {
      label: 'Location',
      value: personalInfo.location,
      link: null,
      icon: MapPin
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: ExternalLink
    },
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: ExternalLink
    },
    {
      name: 'Website',
      url: personalInfo.website,
      icon: ExternalLink
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            I'm actively seeking new opportunities and collaborations. Let's connect!
          </p>
          <p className="text-lg text-blue-300 font-medium">
            Open to full-time roles in AI/ML, Software Engineering, and Leadership positions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-white hover:text-blue-300 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            © 2025 Christopher Vinciguerra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 