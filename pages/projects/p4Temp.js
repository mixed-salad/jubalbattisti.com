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
  return (
    <>
      <Head>
        <title>Jubal Battisti Photography | About</title>
        <meta name="keywords" content="photography/videography" />
      </Head>
      <div className="main">
        <h1>Post Performance Portrait Project (P^4)</h1>
        <div className={styles.list}>
          {!!photoList.length &&
            photoList.map((photo) => {
              return (
                <div className={styles.imgWrapper}>
                  <Image
                    key={photo.public_id}
                    src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${photo.public_id}`}
                    width={400}
                    height={500}
                    leyout="fill"
                  />
                  <p>{photo.context.custom.caption}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default P4;
