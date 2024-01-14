import styled from 'styled-components';

import { onPaddingChangeContent } from '../../../mixins/PageMixins';

export const TextWrapper = styled.div`
  ${onPaddingChangeContent}

  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
`;
