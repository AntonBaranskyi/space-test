import React from 'react';
import { Icon } from './IconItem.styled';

type Props = {
  icon: string;
  height?: number;
  width?: number;
};

export const IconItem: React.FC<Props> = ({
  icon,
  height = 24,
  width = 24,
}) => {
  return <Icon src={icon} alt='icon' heightItem={height} widthItem={width} />;
};
