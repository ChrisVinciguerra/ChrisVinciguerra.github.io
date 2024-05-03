import React from "react";
import { motion } from "framer-motion";
export default function MyName(props) {
  return (
    <div
      className={`flex flex-col
      px-8 pt-24 sm:px-16 sm:pt-24 md:px-28 md:pt-32 lg:px-32 lg:pt-40 xl:px-56 2xl:px-72`}
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.9, duration: 0.2 },
          y: { delay: 0.9, duration: 0.2 },
        }}
        className="font-mono text-AAsecondary"
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
        className="mt-4 font-body text-5xl font-bold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl"
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
        className="mt-6 font-body text-4xl font-bold text-gray-400 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        I&apos;m an MBA student at{" "}
        <span className="text-Syracuse">Syracuse</span> University
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 2.9, duration: 0.2 },
          y: { delay: 2.9, duration: 0.2 },
        }}
        className="text-md mt-10 font-body tracking-wider text-gray-400 md:text-lg"
      >
        I&apos;m currently preparing for a summer internship in the{" "}
        <span className="text-AAsecondary">Computer Systems Validation</span>{" "}
        department at{" "}
        <span className="text-AAsecondary">Regeneron Pharmaceuticals</span>
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 3.2, duration: 0.2 },
          y: { delay: 3.2, duration: 0.2 },
        }}
        className="mt-12 flex space-x-10 text-sm"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="rounded border border-AAsecondary bg-AAprimary px-4 py-3 font-mono text-AAsecondary duration-300 hover:bg-ButtonHover hover:text-black sm:px-8 sm:py-4">
            Check out my resume!
          </button>
        </a>
        <a
          href={"https://www.linkedin.com/in/chris-vinciguerra/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="rounded border border-AAsecondary bg-AAprimary px-4 py-3 font-mono text-AAsecondary duration-300 hover:bg-ButtonHover hover:text-black sm:px-8 sm:py-4">
            Add me on LinkedIn!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
