import Logo from "./Headercomp/Logo";
import Menu from "./Headercomp/Menu";
import { motion } from "framer-motion";

const Header = ({ show }) => {

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      {/* <MobileMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement} /> */}
      {/* This parent element for Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // changed from 10.4 to 1
        transition={{ opacity: { delay: .8, duration: 0 } }}
        className={`w-full ${show ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `} bg-AAprimary flex 
      justify-between px-10 py-5`}
      >
        {/* Logo A */}
        <Logo />
        {/* Hide icon Designed by me */}

        {/* ? Desktop Menu by Titof */}
        <Menu />
      </motion.div>
    </>
  );
};
export default Header;
