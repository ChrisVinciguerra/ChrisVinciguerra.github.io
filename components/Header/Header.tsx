import { useState } from "react";
import Logo from "./Headercomp/Logo";
import Menu from "./Headercomp/Menu";
import Hamburger from "./Headercomp/Hamburger";
import { motion } from "framer-motion";

const Header = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 
      Fade in the header itself 
      TODO: convert to tailwind animations instead, remove framer-motion
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // changed from 10.4 to 1
        transition={{ opacity: { delay: 0, duration: 1.8 } }}
        className={`${show ? `shadow-md` : `bg-opacity-0 `} absolute flex h-14 w-full items-center justify-between bg-AApopup px-10`}
      >
        {/*Left side - Logo*/}
        <Logo />
        {/*On mobile, the hamburger or close button to the right*/}
        <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {/* If on mobile, will only display menu popup when isMenuOpen. On desktop, always render the menu bar at the top*/}
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </motion.div>
    </>
  );
};
export default Header;
