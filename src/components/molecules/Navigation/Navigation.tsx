import { NavList } from './Navigation.styled';
import { NavItem } from '../../atoms/NavItem';
import { navigationData } from '../../../constants/navLinkData';

import { INavigation } from '../../../types/navTypes';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const defaultState = pathname === '/' ? navigationData[0] : null;

  const [activeNav, setActiveNav] = useState<INavigation | null>(defaultState);
  const navigate = useNavigate();

  const onHandleSetActive = (navItem: INavigation) => {
    setActiveNav(navItem);

    if (navItem.title === 'home') {
      navigate('/');
    }
  };

  return (
    <nav>
      <NavList>
        {navigationData.map((navData) => (
          <NavItem
            navItem={navData}
            key={navData.title}
            isActive={activeNav?.title === navData.title}
            onHandleSetActive={onHandleSetActive}
          />
        ))}
      </NavList>
    </nav>
  );
};
