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

const Lightbox = ({ images, index, onCloseLightbox }) => {
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
        <motion.div className={styles.modalContent}>
          <motion.img
            variants={lightboxImgVariants}
            className={styles.lightboxImg}
            src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${image.public_id}`}
          ></motion.img>
          {image.context.custom.work && image.context.custom.choreographer && (
            <div className={styles.lightboxDescriptions}>
              <caption>{`${image.context.custom.work} by ${image.context.custom.choreographer}`}</caption>
              <span>
                {index} / {images.length - 1}
              </span>
            </div>
          )}
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