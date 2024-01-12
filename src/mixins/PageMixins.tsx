import { css } from 'styled-components';

type StylesFunction = (styles: string) => string;

export const onTablet: StylesFunction = (styles) => `
@media (min-width: 640px) {
    ${styles}
  }
`;

export const onDesktop: StylesFunction = (styles) => `
  @media (min-width: 1200px) {
    ${styles}
  }
`;

export const onPaddingChangeContent = css`
  padding-inline: 60px;

  ${onTablet(`
    padding-inline: 80px;
  `)}
`;

export const pageGridMixin = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;

  ${onTablet(`
    grid-template-columns: repeat(4, 1fr);
  `)}

  ${onDesktop(`
    grid-template-columns: repeat(6, 1fr);
  `)}
`;
