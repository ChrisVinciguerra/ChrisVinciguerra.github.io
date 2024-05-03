import React from "react";
import Img from "../../smallComp/image/Img";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["R", "Pandas", "Tensorflow", "Power BI/Power Automate", "Tableau"],
    ["Microsoft Access", "statsmodels", "Excel", "Typescript", "Next.js"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="flex snap-start flex-col  items-center bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex w-full flex-col space-y-8 px-4 sm:w-[500px] sm:px-0 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <ArrowIcon className="h-12 w-12 flex-none text-AAsecondary md:h-12 md:w-12" />
          <div className="flex flex-row items-center space-x-2">
            <span className="pl-4 text-lg font-bold text-gray-200 sm:text-2xl">
              About Me
            </span>
          </div>
          <div className="ml-4 h-[0.2px] w-full bg-gray-400 sm:w-72"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row  md:space-x-8 md:space-y-0 ">
          <div className="w-full space-y-4 text-sm sm:text-base md:w-7/12 ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is Chris, and I am a dual degree Computer Science
                B.S. and MBA student at Syracuse University. I&apos;m currently
                in my fourth year of study and expect to graduate in December
                2024.
              </span>
            </div>
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
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
      </div>
    </div>
  );
}
