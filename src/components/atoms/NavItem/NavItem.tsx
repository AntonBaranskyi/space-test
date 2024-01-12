import React from 'react';
import { NavItemLink, NavItemStyled } from './NavItem.styled';

type Props = {
  navItem: {
    title: string;
    href: string;
  };
};

export const NavItem: React.FC<Props> = ({ navItem }) => (
  <NavItemStyled>
    <NavItemLink href={navItem.href}>{navItem.title}</NavItemLink>
  </NavItemStyled>
);
