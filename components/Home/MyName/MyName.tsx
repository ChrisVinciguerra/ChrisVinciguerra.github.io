import React from "react";
export default function MyName(props) {
  return (
    <div
      className={`flex h-dvh 
      flex-col px-8 py-24 sm:px-16 sm:pt-24 md:px-28 md:pt-32 lg:px-32 lg:pt-40 xl:px-56 xl:pt-56 2xl:px-72`}
    >
      <span className="animate-fadeSlideUp font-mono text-AAsecondary opacity-100 animation-delay-[.5s]">
        Hi, my name is
      </span>
      <h1 className="mt-4 animate-fadeSlideUp font-body text-5xl font-bold text-gray-300 animation-delay-[.9s] sm:text-5xl md:text-6xl lg:text-7xl">
        Chris Vinciguerra.
      </h1>
      <h2 className="mt-6 animate-fadeSlideUp font-body text-3xl font-bold text-gray-400 animation-delay-[1.75s] sm:text-4xl md:text-5xl lg:text-6xl">
        I&apos;m an MBA student at{" "}
        <span className="text-Syracuse">Syracuse</span> University
      </h2>

      <h3 className="mt-10 animate-fadeSlideUp font-body text-sm tracking-wider text-gray-400 animation-delay-[2.4s] md:text-lg">
        I&apos;m currently preparing for a summer internship in the{" "}
        <span className="text-AAsecondary">Computer Systems Validation</span>{" "}
        department at{" "}
        <a
          className="text-AAsecondary hover:underline"
          href="https://www.regeneron.com/"
        >
          Regeneron Pharmaceuticals
        </a>
      </h3>
      <div className="mt-12 flex animate-fadeSlideUp space-x-10 text-sm animation-delay-[2.55s]">
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="rounded border border-AAsecondary bg-AAprimary px-4 py-3 font-mono text-AAsecondary duration-300 hover:bg-ButtonHover hover:text-black sm:px-8 sm:py-4">
            Check out my résumé!
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
      </div>
    </div>
  );
}
