import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider, { Settings } from 'react-slick';
import { MainPageSlide } from '../MainPageSlider';

import back1 from '../../../assets/images/main_back.png';
import back2 from '../../../assets/images/main_back2.png';
import back3 from '../../../assets/images/main_back3.png';
import { MainWrapper } from './MainPage.styled';

const backgrounds = [
  `url(${back1}) no-repeat center/cover`,
  `url(${back2}) no-repeat center/cover`,
  `url(${back3}) no-repeat center/cover`,
];

export const MainPage = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <MainWrapper>
      <Slider {...settings}>
        {backgrounds.map((background) => (
          <MainPageSlide key={background} background={background} />
        ))}
      </Slider>
    </MainWrapper>
  );
};
