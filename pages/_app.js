import MainLayout from "../components/MainLayout";
import "../styles/globals.scss";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Layout>
      <CloudinaryContext cloudName="jubalbattisti">
        <Component {...pageProps} />
      </CloudinaryContext>
    </Layout>
  );
}

export default MyApp;
