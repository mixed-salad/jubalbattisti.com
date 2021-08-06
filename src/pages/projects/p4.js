import Head from "next/head";
import styles from "./../../styles/p4.module.scss";
import Carousel from "../../components/Carousel";
import p4Images from "./../../json/p4.json";

const P4 = () => {
  const images = p4Images;
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | P^4</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <main className={styles.p4Main}>
          <section className={styles.description}>
            <p>
              <em>
                <strong>Post Performance Portrait Project (P^4)</strong>
              </em>
            </p>
            <p>
              What lies beneath the ambition to perform? What remains
              afterwards?{" "}
            </p>
            <p>
              As a performer intrigued by these questions, I began making
              portraits with my fellow performers immediately after we stepped
              offstage.
            </p>
            <p>
              Since 2009, the Post-Performance Portrait Project has recorded
              more than one hundred performers from various dance companies as
              well as operas and musicals.
            </p>
          </section>
          <section className={styles.photoSection}>
            {!!images && <Carousel category="p4" images={images} index={0} />}
          </section>
        </main>
      </div>
    </>
  );
};

export default P4;
