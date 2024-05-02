import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-12 md:h-12 w-12 md:w-12 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Please reach out to me if you have any questions or opportunities, or if you just want to say hi. I will try my best to get back to you as soon as possible.
      </p>
      <div className="pt-4">
        <a href="mailto:abdellatif@anaflous.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            chris@chrisv.us
          </button>
        </a>
      </div>
    </div>
  );
}
