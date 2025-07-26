import { easeOut } from "framer-motion";

// Centralized animation configuration for consistent, elegant transitions
export const animations = {
  // Standard fade-in animation for section headers
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut }
  },

  // Staggered fade-in for list items
  staggerFadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut }
  },

  // Slide-in animations for side-by-side content
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: easeOut }
  },

  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: easeOut }
  },

  // Card hover animations
  cardHover: {
    whileHover: { 
      y: -8,
      transition: { duration: 0.3, ease: easeOut }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },

  // Button hover animations
  buttonHover: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: easeOut }
    },
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },

  // Social icon hover animations
  socialHover: {
    whileHover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2, ease: easeOut }
    },
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },

  // Header animations
  headerSlideDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: easeOut }
  },

  // Mobile menu animations
  mobileMenu: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3, ease: easeOut }
  },

  // Stagger delay calculation
  getStaggerDelay: (index: number, baseDelay: number = 0.1) => baseDelay + (index * 0.1),

  // Hero section specific animations
  hero: {
    container: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: easeOut }
    },
    title: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay: 0.2, ease: easeOut }
    },
    subtitle: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.4, ease: easeOut }
    },
    description: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.6, ease: easeOut }
    },
    buttons: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.8, ease: easeOut }
    },
    scrollIndicator: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 1.2, ease: easeOut }
    }
  }
};

// Common useInView configuration - prevent fade-out by using triggerOnce
export const useInViewConfig = {
  triggerOnce: true,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
}; 