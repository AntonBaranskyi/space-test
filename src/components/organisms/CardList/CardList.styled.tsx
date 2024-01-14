import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';

export const CardListWrapper = styled.div`
  ${onPaddingChangeContent}

  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
