import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconClickableWithAnimation = (props) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon
          className={
            "h-6 w-6 fill-current text-gray-400 hover:cursor-pointer hover:text-AAsecondary"
          }
        />
      </a>
    </motion.div>
  );
};
export default function SocialMediaLinks(props: {}) {
  return (
    <>
      <div className="hidden lg:block">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ y: { delay: 4, duration: 0.8 } }}
          className="fixed bottom-0 left-0 h-screen flex-row items-center justify-between px-12 lg:flex"
        >
          <div className="flex h-full flex-col items-center justify-end space-y-8">
            <div className="flex flex-col items-center justify-center space-y-5">
              {/* Linkedin icon */}
              <IconClickableWithAnimation
                Icon={LinkedinIcon}
                href={"https://www.linkedin.com/in/chris-vinciguerra/"}
              />
              {/* Github Icon */}
              <IconClickableWithAnimation
                Icon={GithubIcon}
                href={"https://github.com/ChrisVinciguerra"}
              />
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
          transition={{ y: { delay: 4, duration: 0.8 } }}
          className="fixed bottom-0 right-0 h-screen flex-row items-center justify-between px-12 lg:flex"
        >
          <div className="flex h-full flex-col items-center justify-end space-y-8">
            <div className="flex flex-col items-center justify-center space-y-5">
              {/* Open Email on click */}
              <motion.div
                initial={{ rotate: 90 }}
                whileHover={{
                  y: -3,
                  transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
                }}
                className=""
              >
                <a
                  href="mailto:chris@chrisv.us"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" font-Header tracking-wider text-gray-400 hover:cursor-pointer hover:text-AAsecondary">
                    chris<span className="text-AAsecondary">@</span>chrisv
                    <span className="text-AAsecondary">.</span>us
                  </span>
                </a>
              </motion.div>
            </div>
            <div></div>
            <div className="h-24 w-0.5 bg-gray-400"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
