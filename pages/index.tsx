import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");

  return (
    <>
      {
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          <Header />
          <MyName />
          {/* <SocialMediaArround /> */}
          {/* <AboutMe />
          <GetInTouch /> */}
          <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
        </div>
      }
    </>
  );
}
