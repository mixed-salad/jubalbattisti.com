
import { Image } from "cloudinary-react";
import styles from "./../styles/performance.module.scss";

const SinglePhoto = ({photo}) => {

  return (
    <div>
        <div className={styles.photoWrapper}>          
            <Image public_id={photo.public_id} />
           
        </div>
    </div>
  );
};

export default SinglePhoto;
