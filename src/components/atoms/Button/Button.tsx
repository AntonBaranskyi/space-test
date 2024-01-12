import React, { ComponentPropsWithoutRef } from 'react';
import { ButtonWrapper } from './Button.styled';
import { IconItem } from '../IconItem';

interface Props extends ComponentPropsWithoutRef<'button'> {
  label?: string;
  isPrimary?: boolean;
  icon?: string;
}

export const Button: React.FC<Props> = ({ label, isPrimary = false, icon }) => {
  return (
    <ButtonWrapper isPrimary={isPrimary}>
      {icon ? <IconItem icon={icon} /> : label}
    </ButtonWrapper>
  );
};
