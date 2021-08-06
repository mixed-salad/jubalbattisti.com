import MainLayout from "../components/MainLayout";
import "../styles/globals.scss";
import { CloudinaryContext } from "cloudinary-react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CloudinaryContext cloudName="jubalbattisti">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </CloudinaryContext>
      </Layout>
    </>
  );
}

export default MyApp;
