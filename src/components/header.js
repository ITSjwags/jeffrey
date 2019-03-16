import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IconMoon from '../images/icon-moon';
import IconSun from '../images/icon-sun';

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 640px) {
    padding: 50px 16px;
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

  @media (min-width: 640px) {
    grid-gap: 48px;
  }
`;

const Link = styled.a`
  font-weight: bold;
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

  &:hover {
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
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
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
  background: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 300ms ease-out;
  width: 100%;

  ${({ peek }) => peek && css`
    transform: scale(5);
  `};

  ${({ darkMode }) => darkMode && css`
    transition-duration: 1s;
    transform: scale(50);

    @media (min-width: 640px) {
      transition-duration: 2s;
      transform: scale(200);
    }
  `};
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [peek, setPeek] = useState(false);
  return (
    <Container>
      <Logo>Jeffrey</Logo>
      <Nav>
        <Link href=" ">resume</Link>
        <Link href="mailto:sweetlookingstuff@gmail.com">contact</Link>
        <Wrapper>
          <Blob darkMode={darkMode} peek={peek} />
          <Switcher
            onClick={() => setDarkMode(!darkMode)}
            onMouseOver={() => setPeek(true)}
            onMouseLeave={() => setPeek(false)}
            onFocus={() => setPeek(true)}
          >
            <SwitcherInner>
              {darkMode ? <IconSun /> : <IconMoon />}
            </SwitcherInner>
          </Switcher>
        </Wrapper>
      </Nav>
    </Container>
  );
};

export default Header;
