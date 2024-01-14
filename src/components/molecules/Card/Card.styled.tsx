import styled from 'styled-components';

import { onDesktop } from '../../../mixins/PageMixins';

export const CardWrapper = styled.div`
  border: 1px solid #d3eaff;
  width: 444px;

  grid-column: span 6;

  ${onDesktop(`
  grid-column: span 2;
  `)}
`;

export const ContentWrapper = styled.div`
  padding-inline: 32px;
  padding-bottom: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
