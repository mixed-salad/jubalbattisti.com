import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import SliderArrow from "./SliderArrows";
import styles from "./../styles/p4.module.scss";

function Carousel({ category, images, index }) {
  const [viewportWidth, setViewportWidth] = useState(undefined);
  useEffect(() => setViewportWidth(window.innerWidth), []);
  const settings = {
    dots: viewportWidth > 1300 ? true : false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
    className: styles.slides,
    // variableWidth: true,
  };

  return (
    <Slider
      {...settings}
      nextArrow={<SliderArrow type="next" />}
      prevArrow={<SliderArrow type="prev" />}
    >
      {!!images &&
        images.map((image, index) => {
          return (
            <div className="wrapper" key={index}>
              <img
                className={styles.sliderImg}
                src={`/images/${category}/${image.src}`}
                alt={image.alt}
              />
            </div>
          );
        })}
    </Slider>
  );
}

export default Carousel;
