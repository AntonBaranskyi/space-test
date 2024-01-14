import styled from 'styled-components';

import {
  onPaddingChangeContent,
  pageGridMixin,
} from '../../../mixins/PageMixins';

export const CardListWrapper = styled.div`
  ${onPaddingChangeContent}

  margin-bottom: 40px;
`;

export const SliderContainer = styled.div`
  /* margin: 0 auto;
  justify-content: center; */

  margin-bottom: 40px;
  /* display: flex; */
`;

export const CardGrid = styled.div`
  ${pageGridMixin}
  grid-gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;


