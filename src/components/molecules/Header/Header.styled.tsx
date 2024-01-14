import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';

export const HeaderWrapper = styled.header`
  ${onPaddingChangeContent}

  background: rgba(30, 30, 30, 0.48);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 159px;

  z-index: 100;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  z-index: 5;
`;
