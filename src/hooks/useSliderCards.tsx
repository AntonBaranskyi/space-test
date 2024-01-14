import { useRef, useState } from 'react';
import Slider from 'react-slick';

export const useSliderCards = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const goToPrevSlide = () => {
    console.log('click');
    
    sliderRef?.current?.slickPrev();
  };

  const handleDotClick = (index: number) => {
    console.log('click');

    sliderRef?.current?.slickGoTo(index);
  };

  const onSetCurrentSlide = (num: number) => {
    setCurrentSlide(num);
  };

  return {
    sliderRef,
    goToNextSlide,
    goToPrevSlide,
    handleDotClick,
    onSetCurrentSlide,
    activeSlide: currentSlide,
  };
};
