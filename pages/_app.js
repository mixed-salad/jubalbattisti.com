import MainLayout from "../components/MainLayout";
import "../styles/globals.scss";
import { CloudinaryContext } from "cloudinary-react";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Layout>
      <CloudinaryContext cloudName="jubalbattisti">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </CloudinaryContext>
    </Layout>
  );
}

export default MyApp;
