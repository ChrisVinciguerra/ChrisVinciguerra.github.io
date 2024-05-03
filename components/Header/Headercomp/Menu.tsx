import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"

export default function Menu({ isOpen, setIsOpen }) {
  return (
    <div className={`${isOpen ? 
      `absolute top-full right-3 bg-AApopup p-5 rounded-lg shadow-lg flex flex-col items-left space-y-4` :
      `hidden md:flex md:items-center md:space-x-8`}`}>
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
          delay: .8,
        }}
        className=" text-AAsecondary"
      >
        <Link onClick={()=> setIsOpen(!isOpen)} to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">About</span>
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
          delay: .9,
        }}
        className="text-AAsecondary"
      >
        <Link onClick={()=> setIsOpen(!isOpen)} to="GetInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Contact</span>
        </Link>
      </motion.span>
      <a onClick={()=> setIsOpen(!isOpen)} href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
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
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary duration-300hover:cursor-pointer hover:bg-AAsecondary hover:text-white"
        >
          Resume
        </motion.button>
      </a>

    </div>
  );
}
