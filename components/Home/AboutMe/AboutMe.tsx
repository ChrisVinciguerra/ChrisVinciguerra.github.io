import React from "react";
import Img from "../../smallComp/image/Img";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["R", "Pandas", "Tensorflow", "Power BI/Power Automate", "Tableau"],
    ["Microsoft Access", "statsmodels", "Excel", "Typescript", "Next.js"],
  ];
  return (
    // Main section div. Flex column for mobile and flex row for desktop. Image either to the side or below the text
    <div className="flex flex-col items-center bg-AAprimary px-8 sm:px-16  md:flex-row md:px-28 lg:px-32 xl:px-56 2xl:px-72">
      {/* About me text section*/}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center">
          <ArrowIcon className="h-12 w-12 text-AAsecondary" />
          <span className="text-2xl font-bold text-gray-200 sm:text-2xl">
            About Me
          </span>
          <div className="ml-6 h-[2px] flex-grow bg-gray-400"></div>
        </div>
        {/* // ? Paragraph block*/}
        <div className="max-w-screen-md space-y-4 text-sm sm:text-base md:text-lg">
          <div className="font-Header">
            <span className="text-gray-400">
              Hello! My name is Chris, and I am a dual degree Computer Science
              B.S. and MBA student at Syracuse University. I&apos;m currently in
              my fourth year of study and expect to graduate in December 2024.
            </span>
          </div>
          <div className="font-Header tracking-wide">
            <span className="text-gray-400  ">
              Here are a few technologies I&apos;ve been working with recently :
            </span>
          </div>
          <div className="font-Header flex flex-row space-x-16 tracking-wide">
            <div className="flex flex-row items-center space-x-2">
              <div className="flex flex-col space-y-4 text-sm sm:text-base">
                {technologies[0].map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-xs text-gray-400 sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div className="flex flex-col space-y-4 text-sm sm:text-base">
                {technologies[1].map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-xs text-gray-400 sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // ? Image in Desktop and Tablet */}
      <div className="group relative hidden md:block md:h-72 md:w-72 lg:h-96 lg:w-96 ">
        <div
          className="absolute h-5/6
               w-5/6 translate-x-5 translate-y-5 rounded border-2 border-AAsecondary duration-300 
               group-hover:translate-x-3 group-hover:translate-y-3"
        ></div>

        <div className="absolute h-5/6 w-5/6  overflow-hidden rounded">
          <div className="absolute h-full w-full overflow-hidden rounded bg-AAsecondary opacity-10 duration-300 group-hover:opacity-0"></div>
          <Img
            src={"/img/portrait.jpg"}
            className={"rounded-lg object-contain"}
            alt="My Image Not Found"
          />
        </div>
      </div>
      {/* // ?Image in Mobile */}
      <div className=" relative flex h-48 w-full  items-center justify-center md:hidden">
        <div className="absolute h-full w-48  translate-x-5  translate-y-5 rounded border-2 border-AAsecondary"></div>
        <div className="absolute h-full w-48 overflow-hidden rounded">
          <Img
            src={"/img/portrait.jpg"}
            className={"rounded-lg object-contain"}
            alt="My Image Not Found"
          />
        </div>
        <div className="absolute h-full w-48  overflow-hidden rounded bg-AAsecondary  opacity-10 md:opacity-60"></div>
      </div>
    </div>
  );
}
