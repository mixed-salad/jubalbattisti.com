import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import ActiveLink from "./ActiveLink";


const DesktopNav = () => {
  return (
    <>
          <nav className="navLinks">
              <ActiveLink href="/projects">
                <span>Projects</span>
              </ActiveLink>
              <ActiveLink href="/about">
                <span>About</span>
              </ActiveLink>
              <ActiveLink href="/contact">
                <span>Contact</span>
              </ActiveLink>
              <a
                href="https://www.instagram.com/jubalbattistiphotography/"
                target="_blank"
              >
                <FaInstagram />
              </a>
          </nav>
    </>
  );
};

export default DesktopNav;
