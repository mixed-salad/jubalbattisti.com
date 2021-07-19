import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { getList } from './../api/cloudinary';
import SliderArrow from './SliderArrows';
import styles from './../styles/p4.module.scss';

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
                className={styles.sliderImg}
                src={`https://res.cloudinary.com/jubalbattisti/image/upload/v1619815218/${image.public_id}`}
                alt={
                  image.context
                    ? image.context.custom.caption
                    : 'Jubal Battisti Photography'
                }
              />
            </div>
          );
        })}
    </Slider>
  );
};

export default Carousel;
