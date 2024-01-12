import { ButtonsWrapper, HeaderWrapper } from './Header.styled';
import { HeaderLogo } from '../../atoms/HeaderLogo';
import { Navigation } from '../Navigation';
import { Button } from '../../atoms/Button';

import heart from '../../../assets/icons/heart.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />

      <Navigation />

      <ButtonsWrapper >
        <Button isPrimary icon={heart} />
        <Button label='Sign in' />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};
