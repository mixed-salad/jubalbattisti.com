import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaCompressAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  initial: {
    opacity: 0,
    zIndex: 3,
    transition: {
      duration: 1,
    },
  },
  complete: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

const linkWrapperVariants = {
  intitial: {
    opacity: 0,
  },
  complete: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const linkVariants = {
  initial: {
    x: 30,
    opacity: 0,
  },
  complete: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const DesktopNav = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.nav
          initial="initial"
          animate="complete"
          exit="initial"
          variants={navVariants}
          className="nav-section"
        >
          <motion.div className="navLinks" variants={linkWrapperVariants}>
            <motion.div className="navLinks__link" variants={linkVariants}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </motion.div>
            <motion.div
              className="navLinks__link"
              variants={linkVariants}
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </motion.div>
            <motion.div
              className="navLinks__link"
              variants={linkVariants}
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </motion.div>

            <motion.div
              className="navLinks__link"
              variants={linkVariants}
            >
              <a
                href="https://www.instagram.com/jubalbattistiphotography/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </motion.div>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default DesktopNav;
