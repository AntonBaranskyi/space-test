import React from 'react';
import { DotContainer, InnerDot } from './SliderDot.styled';

type Props = {
  isActive: boolean;
  isHeader?: boolean;
  onClick: () => void;
};

export const SliderDot: React.FC<Props> = ({
  isActive,
  onClick,
  isHeader = false,
}) => {
  return (
    <DotContainer isActive={isActive} isHeader={isHeader} onClick={onClick}>
      {isActive && <InnerDot isHeader={isHeader} />}
    </DotContainer>
  );
};
