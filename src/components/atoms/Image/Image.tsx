import React from 'react';
import { StyledImage } from './Image.styled';

type Props = {
  src: string;
  height?: number;
  width?: number;
  alt?: string;
  marginBottom?: number;
};

export const Image: React.FC<Props> = ({
  height = 24,
  width = 24,
  src,
  alt = 'image',
  marginBottom = 0,
}) => {
  return <StyledImage src={src} height={height} width={width} alt={alt} marginBottom={marginBottom} />;
};
