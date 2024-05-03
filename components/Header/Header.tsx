import { useState } from "react";
import Logo from "./Headercomp/Logo";
import Menu from "./Headercomp/Menu";
import Hamburger from "./Headercomp/Hamburger";

const Header = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 
        Fade in the header itself 
      */}
      <div
        className={`${show ? `shadow-md` : `bg-opacity-0 `} absolute flex h-14 w-full animate-[fadeIn_1200ms_ease-in-out_forwards] items-center justify-between bg-AApopup px-10 opacity-0`}
      >
        <Logo />
        {/*On mobile, the hamburger or close button to the right*/}
        <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {/* If on mobile, will only display menu popup when isMenuOpen. On desktop, always render the menu bar at the top*/}
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </>
  );
};
export default Header;
