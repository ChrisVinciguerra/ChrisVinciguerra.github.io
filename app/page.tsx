"use client"; // This is a client component

import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaLinks from "../components/Home/SocialMediaLinks/SocialMediaLinks";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

export default function Home() {
  console.log("website is rendering...");

  return (
    <>
      {
        //Main website flex div
        <div className="flex flex-col bg-AAprimary">
          {/*Set the header and name section to take up exactly the screen view*/}
          <div className="h-screen">
            <Header show={true} />
            <MyName />
          </div>
          {/* <SocialMediaLinks /> */}
          <AboutMe />
          <GetInTouch />
          <Footer
            githubUrl={"https://github.com/hktitof/my-website"}
            hideSocialsInDesktop={true}
          />
        </div>
      }
    </>
  );
}
