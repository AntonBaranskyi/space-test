import styled from 'styled-components';

export const DotContainer = styled.div<{
  isActive: boolean;
  isHeader: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: ${(props) =>
    `${props.isHeader ? '1px solid #1e1e1e' : '1px solid #1e1e1e'}`};

  position: relative;
`;

export const InnerDot = styled.div<{ isHeader: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.isHeader ? '#fff' : '#000')};
`;
