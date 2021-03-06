import React from 'react';
import styled from 'styled-components';
import resumePDF from '../assets/j_huysentruyt_resume.pdf';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  mix-blend-mode: difference;
  padding: 30px 16px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const Logo = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 16px;
  list-style-type: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-gap: 48px;
  }
`;

const ListItem = styled.li`
  overflow: hidden;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: bold;
  outline: 0;
  overflow: hidden;
  padding: 0 2px;
  position: relative;
  text-decoration: none;

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

  @media (min-width: 480px) {
    font-size: 16px;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Logo>Jeffrey</Logo>
      <List>
        <ListItem>
          <Link href={resumePDF}>resume</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.behance.net/therealmcjeffy" target="_blank" rel="noreferrer">behance</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/in/therealmcjeffy/" target="_blank" rel="noreferrer">linkedin</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.instagram.com/therealmcjeffy/" target="_blank" rel="noreferrer">instagram</Link>
        </ListItem>
      </List>
    </Container>
  </Wrapper>
);

export default Footer;
