import Head from "next/head";
import { useState, useEffect } from "react";
import { getList } from "../api/cloudinary";
import SinglePhoto from "../../components/SinglePhoto";
import { motion } from "framer-motion";
import styles from "./../../styles/performance.module.scss"
import { FaTimesCircle } from "react-icons/fa"

const galleryVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transform: {
      duration: .5,
      staggerChildren: .2
    }
  }
}

const imgVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transform: {
      delay: .2,
      duration: .5,
      staggerChildren: .2
    }
  }
}

const Performance = () => {
  const [photoList, setPhotoList] = useState([]);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);
  
  useEffect(() => {
    const fetchList = async () => {
      const list = await getList("performance");
      setPhotoList(["title", ...list]);
    };
    fetchList();
  }, []);

  const openLightbox = (index) => {
    setLightboxVisible(true);
    setPhotoIndex(index);
  }

  const closeLightbox = () => setLightboxVisible(false);

  const decreasePhotoIndex = () => {
    photoIndex < 2 ? setPhotoIndex(photoList.length-1) : setPhotoIndex(photoIndex - 1);
  }
  const increasePhotoIndex = () => {
    photoIndex > photoList.length - 2 ? setPhotoIndex(1) : setPhotoIndex(photoIndex + 1);
  }

  console.log(photoIndex);
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Performance</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        {/* This is the to show the gallery */}
        <motion.div className={styles.photoGalleryWrapper} initial="initial" animate="animate" variants={galleryVariants}>
          {!!photoList.length &&
            photoList.map((photo, i) => {
              if(i === 0) {
                return (<div className={`${styles["card"]} ${styles["title"]}`}><h2>performance</h2></div>)
              } else {
                return (<motion.div key={photo.public_id} className={styles.card} variants={imgVariants} onClick={() => openLightbox(i)}>
                <motion.img className={styles.img} src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photo.public_id}`}/>
                </motion.div>)
              }
            })
          }
          </motion.div>
          {/* This is to show the lightbox when the photo is clicked */}
          {lightboxVisible && (
            <motion.div className={styles.modal}>
              <span onClick={() => closeLightbox()} className={styles.closeLightbox}><FaTimesCircle size="2em"/></span>
              <motion.div className={styles.modalContent}>
                <motion.img className={styles.lightboxImg} src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photoList[photoIndex].public_id}`}></motion.img>
              </motion.div>
              <div className={styles.sliderNavigationGroup}>
                <div className={styles.sliderNavigationLeft} onClick={() => decreasePhotoIndex()}></div>
                <div className={styles.sliderNavigationRight} onClick={() => increasePhotoIndex()}></div>
              </div>
              <div>
                <span>{photoIndex} / {photoIndex.length - 1}</span>
              </div>
            </motion.div>
          )}
      </div>
    </>
  );
};

export default Performance;
