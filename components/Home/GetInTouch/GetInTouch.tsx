import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex h-96 w-full flex-col items-center space-y-4 bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="h-12 w-12 flex-none text-AAsecondary md:h-12 md:w-12" />
        <div className="flex flex-row items-center space-x-2">
          <span className="text-3xl font-bold tracking-wider text-gray-200 opacity-85 sm:text-4xl">
            Get In Touch
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <p className="font-Header flex px-6 text-center tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0">
        Please reach out to me if you have any questions or opportunities, or if
        you just want to say hi. I will try my best to get back to you as soon
        as possible.
      </p>
      <div className="pt-4">
        <a
          href="mailto:abdellatif@anaflous.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button
            className="rounded border-[1.5px] border-AAsecondary px-8 
                            py-4 font-mono text-sm text-AAsecondary "
          >
            chris@chrisv.us
          </button>
        </a>
      </div>
    </div>
  );
}
