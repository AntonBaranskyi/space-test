import styled from 'styled-components';

export const StyledText = styled.p<{
  size: number;
  colorItem: string;
  marginBottom: number;
}>`
  font-family: 'Lato', 'Courier New', Courier, monospace;
  font-weight: 300;

  color: ${(props) => props.colorItem};
  margin-bottom: ${(props) => `${props.marginBottom}px`};

  font-size: ${(props) => `${props.size}px`};

  text-align: center;
`;


