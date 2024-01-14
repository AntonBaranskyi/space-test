import { CardsHeader } from '../../molecules/CardsHeader';
import { CardListWrapper } from './CardList.styled';
import { Card } from '../../molecules/Card';

import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { CustomDots } from '../../molecules/CustomDots';
import { useQuery } from '@apollo/client';
import { GET_ALL_FLIGHTS } from '../../../query/flights';
import { useRecoilState } from 'recoil';
import { rocketsFlights } from '../../../store/rocketsFlightState';

import { Spinner } from '../../atoms/Spinner';
import { useSliderCards } from '../../../hooks/useSliderCards';

export const CardList = () => {
  const {
    onSetCurrentSlide,
    sliderRef,
    handleDotClick,
    activeSlide,
    goToNextSlide,
    goToPrevSlide,
  } = useSliderCards();
  const [rockets, setRockets] = useRecoilState(rocketsFlights);

  const { data, loading } = useQuery(GET_ALL_FLIGHTS);

  useEffect(() => {
    if (!loading) {
      setRockets(data.rockets);
    }
  }, [data, loading, setRockets]);

  const settings: Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    beforeChange: (_, nextSlide) => {
      onSetCurrentSlide(nextSlide);
    },
    appendDots: (dots) => (
      <CustomDots
        dots={dots}
        onDotClick={handleDotClick}
        activeSlide={activeSlide}
      />
    ),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <CardListWrapper id='card-list'>
      <CardsHeader
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
      <Slider {...settings} ref={sliderRef}>
        {rockets.map((rocket, i) => (
          <Card rocket={rocket} key={rocket.id} index={i} />
        ))}
      </Slider>
    </CardListWrapper>
  );
};
