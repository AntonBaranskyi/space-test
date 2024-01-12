import styled from 'styled-components';

import back from '../../../assets/images/main_back.png';

import { pageGridMixin } from '../../../mixins/PageMixins';

export const MainWrapper = styled.div`
  background: url(${back}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

export const TextWrapper = styled.div`
  ${pageGridMixin}
`;
