import Head from "next/head";
import Link from "next/link";
//import Image from "next/image";
import Footer from "../components/Footer";
import HomeLayout from "../components/HomeLayout";
// import { Image, Transformation } from "cloudinary-react";
import styles from "./../styles/Home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Home</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className={styles.homeImg}>
        <Link href="/projects">
          <a>
            <img className={styles.logo} src="/logo.png" />
          </a>
        </Link>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

Home.Layout = HomeLayout;

export default Home;
