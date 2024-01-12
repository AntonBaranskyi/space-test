import styled from 'styled-components';

import { pageGridMixin } from '../../../mixins/PageMixins';

export const MainWrapper = styled.div`
  height: 100vh;

  position: relative;

  margin-bottom: 100px;
`;

export const TextWrapper = styled.div`
  ${pageGridMixin}
`;
