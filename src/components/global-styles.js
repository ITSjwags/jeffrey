import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const Styles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lora', sans-serif;
    font-size: 16px;
    line-height: 1.75;
  }

  /* need this on a div in order for the mix-blend-mode to work
     and change the font color when the background color changes
     - for some reason adding the background color to body won't work */
  #___gatsby {
    background: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, p, span, ul, a {
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: difference;
  }

  &::selection {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const GlobalStyles = () => (
  <>
    <Normalize />
    <Styles />
  </>
);

export default GlobalStyles;
