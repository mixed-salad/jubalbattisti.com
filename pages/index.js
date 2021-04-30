import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import HomeLayout from "../components/HomeLayout";

function Home() {
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Home</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div>
        <h1>Home page</h1>
        <Footer />
      </div>
    </>
  );
}

Home.Layout = HomeLayout;

export default Home;
