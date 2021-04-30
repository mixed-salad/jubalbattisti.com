import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={110} height={65} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="about">
        <a>About</a>
      </Link>
      <Link href="contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
