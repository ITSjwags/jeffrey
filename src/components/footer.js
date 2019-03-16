import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  mix-blend-mode: difference;
  padding: 30px 16px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
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

  @media (min-width: 640px) {
    grid-gap: 48px;
  }
`;

const ListItem = styled.li`
  overflow: hidden;
`;

const Link = styled.a`
  font-weight: bold;
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

  &:hover {
    &::after {
      transform: translateX(1px);
      transition: transform 300ms ease-out;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Logo>Jeffrey</Logo>
      <List>
        <ListItem>
          <Link href=" ">resume</Link>
        </ListItem>
        <ListItem>
          <Link href=" ">behance</Link>
        </ListItem>
        <ListItem>
          <Link href=" ">linkedin</Link>
        </ListItem>
        <ListItem>
          <Link href=" ">instagram</Link>
        </ListItem>
      </List>
    </Container>
  </Wrapper>
);

export default Footer;
