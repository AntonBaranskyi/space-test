import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  isPrimary: boolean;
  width?: string;
  height?: string;
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 12px;

  height: ${(props) => `${props.height}`};
  width: ${(props) => `${props.width}`};

  background-color: ${(props) =>
    props.isActive ? '#DD377D' : props.isPrimary ? '#ECECEC' : '#D3EAFF'};
  color: #000;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isPrimary ? '#CCCCCC' : '#A8D0FF')};
  }
`;
