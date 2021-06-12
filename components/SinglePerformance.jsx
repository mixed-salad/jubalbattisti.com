import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import styles from "./../styles/performance.module.scss";

const SinglePerformance = ({ company, photoList }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photoGroup = photoList.filter(
      (photo) => photo.context.custom.company === company
    );
    setPhotos(photoGroup);
  }, []);

  return (
    <div>
      <h3>{company}</h3>
      <div className={styles.photoGalleryWrapper}>
        <div className={styles.photoWrapper}>
          {photos.map((photo, index) => (
            <Image key={photo.public_id} publicId={photo.public_id}>
              <Transformation height={300} crop="fill" />
            </Image>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePerformance;
