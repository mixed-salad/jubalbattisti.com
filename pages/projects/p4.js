import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getList } from "../api/cloudinary";
import styles from "./../../styles/p4.module.scss";

const P4 = () => {
  const [photoList, setPhotoList] = useState([]);
  const [sliderCount, setSliderCount] = useState(0);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList("p4");
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
        <title>Jubal Battisti Photography | About</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <h1>Post Performance Portrait Project (P^4)</h1>
        {!!photoList.length && (
          <div className={styles.slider}>
            <div className={styles.imgWrapper}>
              <Image
                src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photoList[sliderCount].public_id}`}
                width={400}
                height={500}
                leyout="fill"
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
            <p className={styles.caption}>
              {photoList[sliderCount].context.custom.caption}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default P4;
