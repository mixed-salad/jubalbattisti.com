import { useState } from "react";
import styles from "./../styles/performance.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";

const lightboxVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transform: {
      duration: 0.7,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transform: {
      duration: 0.7,
      ease: "easeIn",
    },
  },
};

const lightboxImgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transform: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Lightbox = ({ images, index, onCloseLightbox, category }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const closeLightbox = () => onCloseLightbox();

  const decreasePhotoIndex = () => {
    currentIndex < 2
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const increasePhotoIndex = () => {
    currentIndex > images.length - 2
      ? setCurrentIndex(1)
      : setCurrentIndex(currentIndex + 1);
  };

  let image = images[currentIndex];
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.modal}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={lightboxVariants}
      >
        <span onClick={() => closeLightbox()} className={styles.closeLightbox}>
          <FaTimesCircle size="2em" />
        </span>
        <motion.div className={styles.modalContent_lg}>
          <motion.img
            variants={lightboxImgVariants}
            className={styles.lightboxImg}
            src={`/images/${category}/${image.src}`}
          ></motion.img>
          <div className={styles.lightboxDescriptions}>
            <span>{image.alt}</span>
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </motion.div>

        <div className={styles.sliderNavigationGroup}>
          <div
            className={styles.sliderNavigationLeft}
            onClick={() => decreasePhotoIndex()}
          ></div>
          <div
            className={styles.sliderNavigationRight}
            onClick={() => increasePhotoIndex()}
          ></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
