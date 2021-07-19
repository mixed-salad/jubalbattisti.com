import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { getList } from './../api/cloudinary';
import SliderArrow from './SliderArrows';
import styles from './../styles/p4_test.module.scss';

const Carousel = () => {
  const [photoList, setPhotoList] = useState([]);
  const viewportWidth = window.innerWidth;

  useEffect(() => {
    const fetchList = async () => {
      const list = await getList('p4');
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
    className: styles.slides
  };

  return (
    <Slider
      {...settings}
      nextArrow={<SliderArrow type="next" />}
      prevArrow={<SliderArrow type="prev" />}
    >
      {!!photoList &&
        photoList.map((image, index) => {
          return (
            <div className="wrapper" key={index}>
              <img
                className="sliderImg"
                src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${image.public_id}`}
                alt={image.context.custom.caption}
              />
            </div>
          );
        })}
    </Slider>
  );
};

export default Carousel;
