import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getList } from "../api/cloudinary";
import styles from "./../../styles/p4.module.scss";
import { motion } from "framer-motion";

let easing = [0.175, 0.85, 0.42, 0.96];
const imgVariants = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1, transition: { duration: 1, ease: easing } },
  exit: { opacity: 0, scale: 2, transition: { duration: 0.5, ease: easing } },
};

const Dueto = () => {
  const [photoList, setPhotoList] = useState([]);
  const [sliderCount, setSliderCount] = useState(0);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList("dueto");
      console.log(list);
      setPhotoList(list);
    };
    fetchList();
  }, []);

  const decrementSliderCount = () => {
    if (sliderCount > 0) {
      setSliderCount((prev) => prev - 1);
    } else {
      setSliderCount(photoList.length - 1);
    }
  };

  const incrementSliderCount = () => {
    if (sliderCount < photoList.length - 1) {
      setSliderCount((prev) => prev + 1);
    } else {
      setSliderCount(0);
    }
  };

  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | DUETO</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <main className={styles.p4Main}>
          {!!photoList.length && (
            <div className={styles.slider}>
              <div className={styles.imgWrapper}>
                <motion.div variants={imgVariants}>
                  <Image
                    src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photoList[sliderCount].public_id}`}
                    width={400}
                    height={500}
                    leyout="fill"
                  />
                </motion.div>
              </div>
              <div className={styles.sliderNavigationGroup}>
                <div
                  onClick={decrementSliderCount}
                  className={styles.sliderNavigationLeft}
                ></div>
                <div
                  onClick={incrementSliderCount}
                  className={styles.sliderNavigationRight}
                ></div>
              </div>
            </div>
          )}
          <section className={styles.description}>
            <p>
              <em>
                <strong>DUETO</strong>
              </em>{" "}
              Collaboration with a Berlin based ceramic sculptor, Jojo Corväiá
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dueto;
