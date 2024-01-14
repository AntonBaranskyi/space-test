import { NavList } from './Navigation.styled';
import { NavItem } from '../../atoms/NavItem';
import { navigationData } from '../../../constants/navLinkData';

export const Navigation = () => {
  return (
    <nav style={{ zIndex: 4 }}>
      <NavList>
        {navigationData.map((navData) => (
          <NavItem navItem={navData} />
        ))}
      </NavList>
    </nav>
  );
};
