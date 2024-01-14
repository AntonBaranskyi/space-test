import React from 'react';
import { NavItemLink, NavItemStyled } from './NavItem.styled';
import { INavigation } from '../../../types/navTypes';

type Props = {
  navItem: {
    title: string;
    href: string;
  };

  isActive: boolean;
  onHandleSetActive: (navItem: INavigation) => void;
};

export const NavItem: React.FC<Props> = ({
  navItem,
  isActive,
  onHandleSetActive,
}) => {
  const onHandleChooseNav = () => {
    onHandleSetActive(navItem);
  };

  return (
    <NavItemStyled onClick={onHandleChooseNav}>
      <NavItemLink href={navItem.href} isActive={isActive}>
        {navItem.title}
      </NavItemLink>
    </NavItemStyled>
  );
};
