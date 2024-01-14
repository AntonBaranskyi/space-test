import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';
import { StyledText } from '../../atoms/Text/Text.styled';

import { onDesktop } from '../../../mixins/PageMixins';

export const FavoriteWrapper = styled.div`
  ${onPaddingChangeContent};

  margin-bottom: 100px;
`;

export const ClearText = styled(StyledText)`
  color: '#556b84';
  font-size: 24px;
  text-align: right;

  cursor: pointer;

  margin-bottom: 25px;
`;

export const FavoriteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;

  justify-content: center;

  ${onDesktop(`
   justify-content: start;
  `)}
`;
