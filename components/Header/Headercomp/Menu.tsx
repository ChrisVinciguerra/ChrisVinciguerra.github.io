import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Menu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${
        isOpen
          ? // Mobile menu styles
            `bg-AAteriary absolute left-0 top-full flex h-96 w-full flex-col items-center justify-between py-8 text-4xl shadow-md`
          : // Nav bar styles
            `hidden md:flex md:items-center md:space-x-4`
      }`}
    >
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.2,
          delay: 0.8,
        }}
        className="text-AAsecondary"
      >
        <Link
          onClick={() => setIsOpen(false)}
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          {isOpen ? "" : ">"}
          <span className="px-2 py-4 text-white duration-300 hover:cursor-pointer hover:text-AAsecondary">
            About
          </span>
        </Link>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.2,
          delay: 0.9,
        }}
        className="text-AAsecondary"
      >
        <Link
          onClick={() => setIsOpen(false)}
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          {isOpen ? "" : ">"}
          <span className="px-2 py-4 text-white duration-300 hover:cursor-pointer hover:text-AAsecondary">
            Contact
          </span>
        </Link>
      </motion.span>
      <a
        onClick={() => setIsOpen(false)}
        href={"/resume.pdf"}
        target={"_blank"}
        rel="noreferrer"
      >
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 1.2,
            delay: 1.0,
          }}
          // onClick={()=>{router.push("/resume.pdf")}}
          className="border-spacing-2 rounded-sm border border-AAsecondary px-3 py-2 text-AAsecondary duration-300 hover:bg-AAsecondary hover:text-white"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
