import React from "react";
import { motion } from "framer-motion";
export default function MyName(props) {
  return (
    <div
      className={`flex flex-col h-svh
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-16 pt-24 lg:pt-40 md:pt-32 sm:pt-24`}
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: .9, duration: 0.2 },
          y: { delay: .9, duration: 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 1.6, duration: 0.2 },
          y: { delay: 1.6, duration: 0.2 },
        }}
        className="text-gray-300 font-body font-bold text-5xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Chris Vinciguerra.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 2.3, duration: 0.2 },
          y: { delay: 2.3, duration: 0.2 },
        }}
        className="text-gray-400 font-body font-bold text-4xl lg:text-6xl sm:text-4xl md:text-5xl mt-6"
      >
      I&apos;m an MBA student at <span className="text-Syracuse">Syracuse</span> University
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 2.9, duration: 0.2 },
          y: { delay: 2.9, duration: 0.2 },
        }}
        className="text-gray-400 font-body text-md md:text-lg mt-10 tracking-wider"
      >

        I&apos;m currently preparing for a summer internship in the <span className="text-AAsecondary">Computer Systems Validation</span> department at <span className="text-AAsecondary">Regeneron Pharmaceuticals</span>
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 3.2, duration: 0.2 },
          y: { delay: 3.2, duration: 0.2 },
        }}
        className="flex space-x-10 mt-12 text-sm"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary font-mono border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary hover:bg-ButtonHover hover:text-black">
            Check out my resume!
          </button>
        </a>
        <a href={"https://www.linkedin.com/in/chris-vinciguerra/"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary font-mono border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary hover:bg-ButtonHover hover:text-black">
            Add me on LinkedIn!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
