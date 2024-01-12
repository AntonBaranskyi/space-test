import styled from 'styled-components';

export const Icon = styled.img<{ heightItem: number; widthItem: number }>`
  width: ${(props) => `${props.widthItem}px`};
  height: ${(props) => `${props.heightItem}px`};
`;
