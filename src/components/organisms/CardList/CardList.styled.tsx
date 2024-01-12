import styled from 'styled-components';

import {
  onPaddingChangeContent,
  pageGridMixin,
} from '../../../mixins/PageMixins';

export const CardListWrapper = styled.div`
  ${onPaddingChangeContent}

  margin-bottom: 40px;
`;

export const CardListGrid = styled.div`
  ${pageGridMixin}

  grid-gap: 24px;
`;
