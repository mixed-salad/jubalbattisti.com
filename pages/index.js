import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
//import Image from "next/image";
import Footer from '../components/Footer';
import HomeLayout from '../components/HomeLayout';
// import { Image, Transformation } from "cloudinary-react";
import styles from './../styles/Home.module.scss';
import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];
const variants = {
  initial: { opacity: 0, scale: 1 },
  enter: { opacity: 1, scale: 1.1, transition: { duration: 1, ease: easing } },
  exit: { opacity: 0, scale: 2 }
};

function Home() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Head>
        <title>Jubal Battisti Photography | Home</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <div className={styles.homeImg}>
          <Link href="/projects">
            <a
              className={styles.logo_container}
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              {(showText && (
                <div>
                  <h1 className={styles.textEnter}>ENTER</h1>
                </div>
              )) || <img src="/logos/Logo_Whitetext.png" />}
            </a>
          </Link>
        </div>
      </motion.div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

Home.Layout = HomeLayout;

export default Home;
