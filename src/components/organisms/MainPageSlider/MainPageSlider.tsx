import React from 'react';
import { BottomMain } from '../../molecules/BottomMain';
import { Header } from '../../molecules/Header';
import { MainText } from '../../molecules/MainText';
import { MainWrapper, TextWrapper } from './MainPageSlider.styled';

type Props = {
  background: string;
};

export const MainPageSlide:React.FC<Props> = ({ background }) => (
  <MainWrapper style={{ background }}>
    <Header />
    <TextWrapper>
      <MainText />
    </TextWrapper>
    <BottomMain />
  </MainWrapper>
);
