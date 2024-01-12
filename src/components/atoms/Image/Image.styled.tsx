import styled from 'styled-components';

export const StyledImage = styled.img<{
  height: number;
  width: number;
  marginBottom: number;
}>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};

  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;
