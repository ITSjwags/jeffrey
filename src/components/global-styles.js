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

  h1, h2, h3, p, span, a {
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: difference;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS */
      mix-blend-mode: normal;
    }
    @supports (-ms-accelerator:true) {
      /* IE Edge 12+ CSS */
      mix-blend-mode: normal;
    }
    @supports (-ms-ime-align:auto) {
      /* IE Edge 16+ CSS */
      mix-blend-mode: normal;
    }
  }

  &::selection {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS */
    [data-mode="dark"] {
      * {
        color: white;
      }
    }
    [data-mode="light"] {
      * {
        color: black;
      }
    }
  }
  @supports (-ms-accelerator:true) {
    /* IE Edge 12+ CSS */
    [data-mode="dark"] {
      * {
        color: white;
      }
    }
    [data-mode="light"] {
      * {
        color: black;
      }
    }
  }
  @supports (-ms-ime-align:auto) {
    /* IE Edge 16+ CSS */
    [data-mode="dark"] {
      * {
        color: white;
      }
    }
    [data-mode="light"] {
      * {
        color: black;
      }
    }
  }
`;

const GlobalStyles = () => (
  <>
    <Normalize />
    <Styles />
  </>
);

export default GlobalStyles;
