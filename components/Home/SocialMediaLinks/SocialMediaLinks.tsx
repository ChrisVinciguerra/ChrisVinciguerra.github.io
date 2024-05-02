import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconClickableWithAnimation = props => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SocialMediaLinks(props: {}) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 4, duration: .8 } }}
        className="z-10 fixed bottom-0 left-0 h-screen lg:flex flex-row px-12 items-center justify-between"
      >
        <div className="flex flex-col space-y-8 justify-end items-center h-full">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/chris-vinciguerra/"} />
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/ChrisVinciguerra"} />
            {/* Instagram Icon */}
            {/* <IconClickableWithAnimation Icon={InstagramIcon} href={"https://www.instagram.com/xredme/"} /> */}
            {/* Youtube Icon */}
            {/* <IconClickableWithAnimation Icon={YoutubeIcon} href={"https://www.youtube.com/@abdellatif_anaflous"} /> */}
          </div>
          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 4, duration: .8 } }}
        className="z-10 fixed bottom-0 right-0 h-screen lg:flex flex-row px-12 items-center justify-between"
      >
        <div className="flex flex-col space-y-8 justify-end items-center h-full">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Open Email on click */}
            <motion.div
              initial={{ rotate: 90 }}
              whileHover={{
                y: -3,
                transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
              }}
              className=""
            >
              <a href="mailto:chris@chrisv.us" target={"_blank"} rel="noreferrer">
                <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                  chris<span className="text-AAsecondary">@</span>chrisv<span className="text-AAsecondary">.</span>us
                </span>
              </a>
            </motion.div>
          </div>
          <div></div>
          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}