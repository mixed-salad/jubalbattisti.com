import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import styles from "./../styles/performance.module.scss";

const SinglePerformance = ({ company, photoList }) => {
  const [photos, setPhotos] = useState([]);
  const [slideCount, setSlideCount] = useState(0);
  const [canSlideLeft, setCanSlideLeft] = useState(false);
  const [canSlideRight, setCanSlideRight] = useState(true);
  useEffect(() => {
    const photoGroup = photoList.filter(
      (photo) => photo.context.custom.company === company
    );
    setPhotos(photoGroup);
  }, []);

  const decrement = () => {
    if (!slideCount) {
      setSlideCount(0);
      setCanSlideLeft(false);
    } else {
      setSlideCount((prev) => prev - 1);
      setCanSlideRight(true);
    }
  };

  const increment = () => {
    if (slideCount < photos.length - 2) {
      setSlideCount((prev) => prev + 1);
      setCanSlideLeft(true);
    } else {
      setCanSlideRight(false);
    }
  };

  return (
    <div>
      <h3>{company}</h3>
      <div className={styles.photoGalleryWrapper}>
        <div className={styles.photoWrapper}>
          {photos.map((photo, index) =>
            slideCount <= index ? (
              <Image key={photo.public_id} publicId={photo.public_id}>
                <Transformation height={300} crop="fill" />
              </Image>
            ) : (
              <></>
            )
          )}
        </div>
        <div className={styles.arrowsGroup}>
          <div
            onClick={decrement}
            className={slideCount && canSlideLeft && styles.arrowLeft}
          ></div>
          <div
            onClick={increment}
            className={canSlideRight && styles.arrowRight}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePerformance;
