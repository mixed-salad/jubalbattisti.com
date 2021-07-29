import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaCompressAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {

  return (
    <>
      <div className="header-section">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src="/logos/logo.png" width={110} height={65} />
            </a>
          </Link>
        </div>
        <div className="display-xs">
          <MobileNav />
        </div>
        <div className="display-md">
          <DesktopNav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
