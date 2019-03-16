import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyles from './global-styles';
import Header from './header';

const Content = styled.main`
  display: block;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      <Content>
        {children}
      </Content>
      <footer>
        <span>Copyright stuff footer</span>
      </footer>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
