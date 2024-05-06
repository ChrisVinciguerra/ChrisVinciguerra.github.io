import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
      <div
        className="group flex flex-col items-center justify-center space-y-4 bg-AAprimary py-8  font-mono 
    text-sm  text-gray-400  "
      >
        <span className="max-w-screen-sm text-xs group-hover:text-AAsecondary sm:text-sm">
          Template by Anaflous Abdellatif, Modified by Chris Vinciguerra
        </span>

        <span className="flex flex-row items-center space-x-2 text-xs group-hover:text-AAsecondary">
          <GithubIcon
            className={
              "h-4 w-4 fill-current text-gray-400 group-hover:text-AAsecondary"
            }
          />
          <span className="">Original Source code - Github</span>
        </span>
      </div>
    </a>
  );
}
