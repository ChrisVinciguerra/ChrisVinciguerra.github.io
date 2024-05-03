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
        transition={{ opacity: { delay: .8, duration: 0 } }}
        className={`relative w-full ${show ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `} bg-AAprimary flex items-center justify-between px-10 py-4`}
      >
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
            delay: .8,
          }}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`flex items-center justify-center  text-gray-500 rounded-lg ${isMenuOpen ? `` : `md:hidden`} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </motion.div>
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </motion.div >
    </>
  )
};
export default Header;
