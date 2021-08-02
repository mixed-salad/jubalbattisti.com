import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
// import { getList } from "./../api/cloudinary";
import SliderArrow from "./SliderArrows";
import styles from "./../styles/p4.module.scss";

//const viewportWidth = window.innerWidth;
// const addStyle = () => {
//   const slickTrackDiv = document.getElementsByClassName("slick-track");
//   slickTrackDiv.style.display = "flex";
//   slickTrackDiv.style.alignItem = "center";
// };

function Carousel({ category, images }) {
  // const [photoList, setPhotoList] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(undefined);

  useEffect(() => setViewportWidth(window.innerWidth), []);

  // useEffect(() => {
  //   const fetchList = async () => {
  //     const list = await getList(category);
  //     console.log(list);
  //     setPhotoList(list);
  //   };
  //   fetchList();
  // }, []);

  // useEffect(() => addStyle(), []);

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
