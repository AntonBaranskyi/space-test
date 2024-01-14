import React, { ComponentPropsWithoutRef } from 'react';
import { ButtonWrapper } from './Button.styled';
import { IconItem } from '../IconItem';

interface Props extends ComponentPropsWithoutRef<'button'> {
  label?: string;
  isPrimary?: boolean;
  icon?: string | React.ReactElement;

  height?: string;
  width?: string;
  isActive?: boolean;
}

export const Button: React.FC<Props> = ({
  label,
  isPrimary = false,
  icon,
  width,
  height,
  isActive,
  ...otherProps
}) => {
  return (
    <ButtonWrapper
      isPrimary={isPrimary}
      width={width}
      height={height}
      isActive={isActive}
      {...otherProps}
    >
      {icon ? <IconItem icon={icon} /> : label}
    </ButtonWrapper>
  );
};
