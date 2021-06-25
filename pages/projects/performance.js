import Head from "next/head";
import { useState, useEffect } from "react";
import { getList } from "../api/cloudinary";
import SinglePhoto from "../../components/SinglePhoto";
import { motion } from "framer-motion";
import styles from "./../../styles/performance.module.scss"

const mainVariants = {
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
  
  useEffect(() => {
    const fetchList = async () => {
      const list = await getList("performance");
      setPhotoList(["title", ...list]);
    };
    fetchList();
  }, []);
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | Performance</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <motion.div className={styles.photoGalleryWrapper} initial="initial" animate="animate" variants={mainVariants}>
          {!!photoList.length &&
            photoList.map((photo, i) => {
              if(i === 0) {
                return (<div className={`${styles["card"]} ${styles["title"]}`}><h2>performance</h2></div>)
              } else {
                return (<motion.div key={photo.public_id} className={styles.card} variants={imgVariants}>
                <motion.img className={styles.img} src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photo.public_id}`}/>
                </motion.div>)
              }
            })
          }
          </motion.div>
      </div>
    </>
  );
};

export default Performance;
