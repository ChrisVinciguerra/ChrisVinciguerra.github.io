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
    <div className="flex flex-col items-center gap-10 bg-AAprimary px-8  sm:px-16 md:flex-row md:px-28 lg:px-32 xl:px-56 2xl:px-72">
      {/* About me HEADER AND LINE*/}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center">
          <ArrowIcon className="h-12 w-12 text-AAsecondary" />
          <span className="font-heading text-2xl font-bold tracking-wider text-gray-200 md:text-3xl lg:text-4xl">
            About Me
          </span>
          <div className="ml-6 h-[2px] flex-grow bg-gray-400"></div>
        </div>
        {/* Paragraph block*/}
        <div className="max-w-screen-md space-y-8 font-body text-sm sm:text-base md:text-lg lg:text-xl">
          <div className="font-body text-gray-400">
            Hello! My name is Chris. I am a dual degree Computer Science B.S.
            and MBA student at Syracuse University, with a passion for{" "}
            <span className="font-bold tracking-wide text-AAsecondary">
              data modeling, machine learning, and making tools that leverage
              data analytics to drive business objectives.
            </span>{" "}
            I&apos;m currently in my fourth year of study and expect to graduate
            in December 2024. I am actively seeking opportunities that merge my
            technical expertise and strategic undertanding of business dynamics
            to deliver impactful solutions.
          </div>
          {/* Intro to technologies list */}
          <div className="text-center font-body tracking-wide text-gray-400">
            Here some technologies I&apos;ve been working with recently:
          </div>
          {/* List of technologies, two columns*/}
          <div className="flex flex-row justify-center space-x-10 font-body tracking-wide">
            {technologies.map((techs, index) => {
              // Each column is a flex column with the icon text to the technology
              return (
                <div className="flex flex-col space-y-4">
                  {techs.map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center">
                        <ArrowIcon className={"h-5 w-5 text-AAsecondary"} />
                        <span className=" text-gray-400">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* // ?Image */}
      <div className="flex h-48 w-48 rounded md:h-96 md:w-96">
        <Img
          src={"/img/portrait.jpg"}
          className={"rounded-xl object-cover"}
          alt="My Image Not Found"
        />
      </div>
    </div>
  );
}
