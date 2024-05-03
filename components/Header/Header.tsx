import { useState } from "react";
import Logo from "./Headercomp/Logo";
import Menu from "./Headercomp/Menu";
import { motion } from "framer-motion";

const Header = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // changed from 10.4 to 1
        transition={{ opacity: { delay: 0, duration: 1.8 } }}
        className={`${show ? `bg-opacity-70 shadow-md` : `bg-opacity-0 `} relative flex flex-row items-center justify-between bg-AApopup px-10 py-4`}
      >
        {/* To the left is the logo */}
        <Logo />
        <motion.div
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 1.2,
            delay: 0.8,
          }}
        >
          {/* To the right is the hamburger menu or the nav bar */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center justify-center rounded-md text-gray-500 ${isMenuOpen ? `` : `md:hidden`} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </motion.div>
        {/* If on mobile, will only display menu popup when isMenuOpen. On desktop, always render the menu bar at the top*/}
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </motion.div>
    </>
  );
};
export default Header;
