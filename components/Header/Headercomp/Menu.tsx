import React from "react";
import { Link } from "react-scroll";

export default function Menu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`text-AAsecondary  ${
        isOpen
          ? // Mobile menu styles
            `absolute left-0 top-full flex w-full flex-col items-center justify-between space-y-8 bg-AAteriary py-8 text-2xl shadow-md`
          : // Nav bar styles
            `hidden md:flex md:items-center md:space-x-4`
      }`}
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
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <button
          onClick={() => setIsOpen(false)}
          className="border-spacing-2 rounded-sm border border-AAsecondary px-3 py-2  duration-300 hover:bg-AAsecondary hover:text-white"
        >
          Resume
        </button>
      </a>
    </div>
  );
}
