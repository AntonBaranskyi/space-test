import styled from 'styled-components';

export const DotsWrapper = styled.div<{ isHeader: boolean }>`
  margin-top: 40px;

  display: flex;
  gap: 8px;
  justify-content: center;

  position: ${(props) => (props.isHeader ? 'absolute' : 'static')};
`;
