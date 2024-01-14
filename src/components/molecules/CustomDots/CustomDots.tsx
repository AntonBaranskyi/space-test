import React from 'react';
import { DotsWrapper } from './CustomDots.styles';
import { SliderDot } from '../../atoms/SliderDot';

type Props = {
  dots: React.ReactNode;
  onDotClick: (index: number) => void;
  activeSlide: number;
  isHeader?: boolean;
};

export const CustomDots: React.FC<Props> = ({
  dots,
  onDotClick,
  activeSlide,
  isHeader = false,
}) => {
  return (
    <DotsWrapper isHeader={isHeader}>
      {React.Children.map(dots, (dot, index) => (
        <SliderDot
          onClick={() => onDotClick(index)}
          isActive={index === activeSlide}
          key={dot?.toString()}
          isHeader={isHeader}
        />
      ))}
    </DotsWrapper>
  );
};
