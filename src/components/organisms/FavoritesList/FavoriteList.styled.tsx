import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';
import { StyledText } from '../../atoms/Text/Text.styled';

export const FavoriteWrapper = styled.div`
  ${onPaddingChangeContent};

  margin-bottom: 100px;
`;

export const ClearText = styled(StyledText)`
  color: '#556b84';
  font-size: 24px;
  text-align: right;

  cursor: pointer;

  margin-bottom: 15px;
`;
