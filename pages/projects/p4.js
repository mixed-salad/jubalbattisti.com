import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getList } from '../api/cloudinary';
import styles from './../../styles/p4.module.scss';
import { motion } from 'framer-motion';

const imgVariants = {
  initial: {
    opacity: 0,
    x: 20
  },
  complete: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};
const P4 = () => {
  const [photoList, setPhotoList] = useState([]);
  const [sliderCount, setSliderCount] = useState(0);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList('p4');
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
        <title>Jubal Battisti Photography | P^4</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <main className={styles.p4Main}>
          <section className={styles.photoSection}>
            {!!photoList.length && (
              <div className={styles.slider}>
                <div className={styles.imgWrapper}>
                  <motion.img
                    src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photoList[sliderCount].public_id}`}
                    className={styles.p4_img}
                    initial="initial"
                    animate="complete"
                    variants={imgVariants}
                  />
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
          </section>
          <section className={styles.description}>
            <p>
              <em>
                <strong>Post Performace Portrait Project (P^4)</strong>
              </em>
            </p>
            <p>
              What lies beneath the ambition to perform? What remains
              afterwards?{' '}
            </p>
            <p>
              As a performer intrigued by these questions, I began making
              portraits with my fellow performers immediately after we stepped
              offstage. Since 2009, the Post-Performance Portrait Project has
              recorded more than one hundred performers from various dance
              companies as well as operas and musicals.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default P4;
