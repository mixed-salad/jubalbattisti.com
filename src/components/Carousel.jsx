import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getList } from "./../api/cloudinary";
import SliderArrow from "./SliderArrows";
import styles from "./../styles/p4.module.scss";

//const viewportWidth = window.innerWidth;

const Carousel = ({ category }) => {
  const [photoList, setPhotoList] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(undefined);

  useEffect(() => setViewportWidth(window.innerWidth), []);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList(category);
      console.log(list);
      setPhotoList(list);
    };
    fetchList();
  }, []);

  const settings = {
    dots: viewportWidth > 700 ? true : false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: styles.slides,
  };

  return (
    <Slider
      {...settings}
      nextArrow={<SliderArrow type="next" />}
      prevArrow={<SliderArrow type="prev" />}
    >
      <div className="wrapper">
        <img
          className={styles.sliderImg}
          src={
            category === "p4"
              ? "https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/Jubal_battisti/p4/190409_P_4_Coming_Society_by_Jubal_Battisti_114-Edit_copy_hzeued.jpg"
              : "https://res.cloudinary.com/jubalbattisti/image/upload/v1623597376/Jubal_battisti/dueto/DUETO_Robin-4-Edit_by_Jubal_Battisti_oud8vg.jpg"
          }
          alt={category === "p4" ? "Kate Strong" : "Robin"}
        />
      </div>
      {!!photoList &&
        photoList.map((image, index) => {
          if (index !== 0) {
            return (
              <div className="wrapper" key={index}>
                <img
                  className={styles.sliderImg}
                  src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${image.public_id}.${image.format}`}
                  alt={
                    image.context
                      ? image.context.custom.caption
                      : "Jubal Battisti Photography"
                  }
                />
              </div>
            );
          }
        })}
    </Slider>
  );
};

export default Carousel;
