import Head from 'next/head';
import { useState, useEffect } from 'react';
import { getList } from '../../api/cloudinary';
import Lightbox from '../../components/Lightbox';
import { motion } from 'framer-motion';
import styles from './../../styles/performance.module.scss';

const galleryVariants = {
  initial: {},
  animate: {
    transform: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const galleryImgVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transform: {
      delay: 0.2,
      duration: 0.5
    }
  }
};

const Performance = () => {
  const [photoList, setPhotoList] = useState([]);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList('performance');
      setPhotoList(['title', ...list]);
    };
    fetchList();
  }, []);

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
      <div className="main">
        {/* This is the to show the gallery */}
        <motion.div
          className={styles.photoGalleryWrapper}
          initial="initial"
          animate="animate"
          variants={galleryVariants}
        >
          {!!photoList.length &&
            photoList.map((photo, i) => {
              if (i === 0) {
                return (
                  <div
                    key="performance_title"
                    className={`${styles['card']} ${styles['title']}`}
                  >
                    <h2>performance</h2>
                  </div>
                );
              } else {
                return (
                  <motion.div
                    key={photo.public_id}
                    className={styles.card}
                    onClick={() => openLightbox(i)}
                  >
                    <motion.img
                      variants={galleryImgVariants}
                      className={styles.img}
                      src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photo.public_id}`}
                    />
                  </motion.div>
                );
              }
            })}
        </motion.div>
        {/* This is to show the lightbox when the photo is clicked */}
        {lightboxVisible && (
          <Lightbox
            images={photoList}
            index={photoIndex}
            onCloseLightbox={() => setLightboxVisible(false)}
          />
        )}
      </div>
    </>
  );
};

export default Performance;
