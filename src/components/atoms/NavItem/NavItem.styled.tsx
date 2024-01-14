import styled from 'styled-components';

export const NavItemStyled = styled.li`
  list-style: none;
  position: relative;
`;

export const NavItemLink = styled.a<{ isActive: boolean }>`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &::after {
    content: ${(props) => (props.isActive ? "''" : 'none')};
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    height: 1px;
    background-color: #fff;
    position: absolute;
  }

  &:hover::after {
    content: '';
    background-color: #fff;
  }
`;
