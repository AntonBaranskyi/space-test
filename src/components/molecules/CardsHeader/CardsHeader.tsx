import { ButtonsWrapper, CardsHeaderWrapper } from './CardsHeader.styled';
import { Title } from '../../atoms/Title';
import { Button } from '../../atoms/Button';

import iconLeft from '../../../assets/icons/arrow-left.png';
import iconRight from '../../../assets/icons/arrow-right.png';
import React from 'react';

type Props = {
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
};

export const CardsHeader: React.FC<Props> = ({
  goToNextSlide,
  goToPrevSlide,
}) => {
  return (
    <CardsHeaderWrapper>
      <Title size={32} weight={800} color='#1E1E1E'>
        popular tours
      </Title>

      <ButtonsWrapper>
        <Button icon={iconLeft} isPrimary onClick={goToPrevSlide} />
        <Button icon={iconRight} isPrimary onClick={goToNextSlide} />
      </ButtonsWrapper>
    </CardsHeaderWrapper>
  );
};
