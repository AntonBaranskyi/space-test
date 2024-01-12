import React from 'react';
import { StyledText } from './Text.styled';

type Props = {
  size?: number;
  color?: string;
  marginBottom?: number;
};

export const Text: React.FC<
  Props & React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, size = 32, color = '#fff', marginBottom = 0 }) => {
  return (
    <StyledText size={size} colorItem={color} marginBottom={marginBottom}>
      {children}
    </StyledText>
  );
};
