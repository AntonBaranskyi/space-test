import React from 'react';
import { Icon } from './IconItem.styled';

type Props = {
  icon: string | React.ReactElement;
  height?: number;
  width?: number;
};

export const IconItem: React.FC<Props> = ({
  icon,
  height = 24,
  width = 24,
}) => {
  return typeof icon === 'string' ? (
    <Icon src={icon} alt='icon' heightItem={height} widthItem={width} />
  ) : (
    <div>{icon}</div>
  );
};
