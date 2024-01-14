import { HeaderLogoItem } from './HeaderLogo.styled';

import logo from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export const HeaderLogo = () => {
  const navigate = useNavigate();

  const onHandleNavigate = () => {
    navigate('/');
  };

  return <HeaderLogoItem src={logo} alt='logo' onClick={onHandleNavigate} />;
};
