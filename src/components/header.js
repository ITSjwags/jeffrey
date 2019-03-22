import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Helmet from 'react-helmet';
import IconMoon from '../images/icon-moon';
import IconSun from '../images/icon-sun';
import resumePDF from '../assets/j_huysentruyt_resume.pdf';

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 16px 50px 16px;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 5%;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  position: relative;
  z-index: 1;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 16px;
  place-items: center;
  transition: grid-gap 250ms ease-out;

  @media (min-width: 768px) {
    grid-gap: 48px;
  }
`;

const Link = styled.a`
  font-weight: bold;
  outline: 0;
  overflow: hidden;
  padding: 0 2px;
  position: relative;
  text-decoration: none;
  z-index: 1;

  &::after {
    background: ${({ theme }) => theme.colors.white};
    content: " ";
    height: 2px;
    position: absolute;
    top: calc(50% + 1px);
    left: -1px;
    transform: translateX(-100%);
    width: 100%;
  }

  &:hover,
  &:focus {
    &::after {
      transform: translateX(1px);
      transition: transform 300ms ease-out;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Switcher = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
`;

const SwitcherInner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 40px;
`;

const Blob = styled.div`
  backface-visibility: hidden;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  filter: blur(0px);
  height: 100%;
  perspective: 1000;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 500ms ease-out;
  width: 100%;

  ${({ peek }) => peek && css`
    transform: scale(5);
  `};

  ${({ darkMode }) => darkMode && css`
    transition-duration: 1s;
    transform: scale(55, 400);

    @media (min-width: 768px) {
      transition-duration: 2s;
      transform: scale(200);
    }
  `};
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [peek, setPeek] = useState(false);
  return (
    <>
      <Helmet>
        <body data-mode={darkMode ? 'dark' : 'light'} />
      </Helmet>

      <Container>
        <Logo>Jeffrey</Logo>
        <Nav>
          <Link href={resumePDF}>resume</Link>
          <Link href="mailto:sweetlookingstuff@gmail.com">contact</Link>
          <Wrapper>
            <Blob darkMode={darkMode} peek={peek} />
            <Switcher
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setPeek(true)}
              onMouseLeave={() => setPeek(false)}
              // need these on mobile so the peek doesn't show
              // after you click to go back to light mode
              onMouseUp={() => setPeek(false)}
              onFocus={() => setPeek(true)}
              onBlur={() => setPeek(false)}
            >
              <SwitcherInner>
                {darkMode ? <IconSun /> : <IconMoon />}
              </SwitcherInner>
            </Switcher>
          </Wrapper>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
