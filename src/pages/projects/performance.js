import Head from "next/head";
import { useState } from "react";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import styles from "./../../styles/performance.module.scss";
import performanceImages from "./../../json/performance.json";
// import Carousel from "../../components/Carousel";
// import { FaTimesCircle } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";

const galleryVariants = {
  initial: {},
  animate: {
    transform: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const galleryImgVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transform: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const Performance = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxVisible(true);
    setPhotoIndex(index);
  };

  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Performance</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main" id="performance-top">
        <div className={styles.toTopButton}>
          <Link href="#performance-top">
            <FaArrowCircleUp size="1.5em" className={styles.toTopIcon} />
          </Link>
        </div>
        {/* This is the to show the gallery */}
        <div className={styles.desktop}>
          <motion.div
            className={`${styles["photoGalleryWrapper"]} ${
              lightboxVisible ? "styles[displayNone]" : ""
            }`}
            initial="initial"
            animate="animate"
            variants={galleryVariants}
          >
            <div className={`${styles["card"]} ${styles["title"]}`}>
              <h2>performance</h2>
            </div>
            {!!performanceImages.length &&
              performanceImages.map((image, i) => {
                return (
                  <motion.div
                    key={image.id}
                    className={styles.card}
                    onClick={() => openLightbox(i)}
                    variants={galleryImgVariants}
                  >
                    <motion.img
                      className={styles.img}
                      src={`/images/performance/${image.src}`}
                    />
                  </motion.div>
                );
              })}
          </motion.div>
          {/* This is to show the lightbox when the photo is clicked */}
          {lightboxVisible && (
            <>
              <div className={styles.modalContent_md}>
                <Lightbox
                  images={performanceImages}
                  index={photoIndex}
                  onCloseLightbox={() => setLightboxVisible(false)}
                  category="performance"
                />
              </div>
              {/* <div className={styles.mobile}>
                <div className={styles.carouselWrapper}>
                  <span
                    onClick={() => setLightboxVisible(false)}
                    className={styles.closeLightbox}
                  >
                    <FaTimesCircle size="1em" />
                  </span>
                  <Carousel
                    category="performance"
                    images={performanceImages}
                    index={photoIndex}
                  />
                  
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Performance;
