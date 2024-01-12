import styled from 'styled-components';

export const StyledTitle = styled.h2<{
  color: string;
  size: number;
  weight: number;
  marginBottom: number;
}>`
  font-family: 'Syne', 'Courier New', Courier, monospace;
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  margin-bottom: ${(props) => `${props.marginBottom}px`};

  text-transform: uppercase;

  text-align: center;
`;
