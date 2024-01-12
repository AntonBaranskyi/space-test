import React, { ComponentPropsWithoutRef } from 'react';
import { ButtonWrapper } from './Button.styled';
import { IconItem } from '../IconItem';

interface Props extends ComponentPropsWithoutRef<'button'> {
  label?: string;
  isPrimary?: boolean;
  icon?: string;

  height?: string;
  width?: string;
}

export const Button: React.FC<Props> = ({
  label,
  isPrimary = false,
  icon,
  width,
  height,
}) => {
  return (
    <ButtonWrapper isPrimary={isPrimary} width={width} height={height}>
      {icon ? <IconItem icon={icon} /> : label}
    </ButtonWrapper>
  );
};
