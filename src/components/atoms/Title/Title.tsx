import React from 'react';
import { StyledTitle } from './Title.styled';

type Props = {
  color?: string;
  size?: number;
  weight?: number;
  marginBottom?: number;
};

export const Title: React.FC<
  Props & React.HTMLAttributes<HTMLTitleElement>
> = ({
  color = '#fff',
  children,
  size = 24,
  weight = 400,
  marginBottom = 0,
}) => {
  return (
    <StyledTitle
      color={color}
      size={size}
      weight={weight}
      marginBottom={marginBottom}
    >
      {children}
    </StyledTitle>
  );
};
