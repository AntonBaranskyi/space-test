import styled from 'styled-components';

import favaoriteTop from '../../../assets/images/main_back3.png';
import { Title } from '../../atoms/Title';

export const FavoritesWrapper = styled.div`
  background-image: url(${favaoriteTop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  height: 440px;

  position: relative;

  margin-bottom: 80px;
`;

export const FavoriteTittle = styled(Title)`
  position: absolute;
`;
