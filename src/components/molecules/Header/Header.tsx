import { ButtonsWrapper, HeaderWrapper } from './Header.styled';
import { HeaderLogo } from '../../atoms/HeaderLogo';
import { Navigation } from '../Navigation';
import { Button } from '../../atoms/Button';

import { useNavigate, useLocation } from 'react-router-dom';
import { HeartIcon } from '../../atoms/HeartIcon';
import { useMemo } from 'react';

export const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const onHandleNavigate = () => {
    navigate('/favorites');
  };

  const isFavPage = useMemo(() => pathname === '/favorites', [pathname]);

  return (
    <HeaderWrapper>
      <HeaderLogo />

      <Navigation />

      <ButtonsWrapper>
        <Button
          isPrimary
          icon={<HeartIcon fill={isFavPage ? '#fff' : '#1e1e1e'} />}
          width={'53px'}
          onClick={onHandleNavigate}
          isActive={isFavPage}
        />
        <Button label='Sign in' width={'163px'} />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};
