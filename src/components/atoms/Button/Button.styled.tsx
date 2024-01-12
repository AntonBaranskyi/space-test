import styled from 'styled-components';

export const ButtonWrapper = styled.button<{ isPrimary: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 12px;

  /* height: 53px; */

  background-color: ${(props) => (props.isPrimary ? '#ECECEC' : '#D3EAFF')};
  color: #000;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
`;
