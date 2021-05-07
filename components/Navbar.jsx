import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" width={110} height={65} />
          </a>
        </Link>
      </div>
      <div className="navLinks">
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <a
          href="https://www.instagram.com/jubalbattistiphotography/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
