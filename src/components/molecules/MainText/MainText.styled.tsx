import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';

export const TextWrapper = styled.div`
  ${onPaddingChangeContent}

  grid-column: 1/-1;
`;
