import { motion } from "framer-motion";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
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
      {/* Mobile only hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex flex-col rounded-md ${isOpen ? `hidden` : `md:hidden`} space-y-2 px-2 py-2`}
      >
        <span className="block h-1 w-8 bg-gray-500 group-hover:bg-gray-300"></span>
        <span className="block h-1 w-8 bg-gray-500 group-hover:bg-gray-300"></span>
        <span className="block h-1 w-8 bg-gray-500 group-hover:bg-gray-300"></span>
      </button>
      {/* Mobile only X button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex justify-center rounded-md ${isOpen ? `` : `hidden`} py-2`}
      >
        <svg
          className="h-12 w-12 text-gray-500 group-hover:text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </motion.div>
  );
};

export default Hamburger;
