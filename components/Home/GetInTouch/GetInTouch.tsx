import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      className="mt-20 md:mt-44 flex flex-col items-center space-y-4 bg-AAprimary  px-8"
    >
      {/* // Title */}
      <div className="flex flex-row items-center">
        <ArrowIcon className="h-12 w-12 text-AAsecondary" />
        <span className="font-heading text-3xl font-bold tracking-wider text-gray-200 sm:text-4xl">
          Get In Touch
        </span>
      </div>
      {/* // ? Get In Touch */}
      <div className=" flex max-w-screen-sm text-center font-body tracking-wide text-gray-400">
        Please reach out to me if you have any questions or opportunities, or if
        you just want to say hi. I will try my best to get back to you as soon
        as possible.
      </div>
      <a href="mailto:chris@chrisv.us" target={"_blank"} rel="noreferrer">
        <button
          className="mt-6 rounded border-[1.5px] border-AAsecondary px-8 
                            py-4 font-mono text-sm text-AAsecondary "
        >
          chris@chrisv.us
        </button>
      </a>
    </div>
  );
}
