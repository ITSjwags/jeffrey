import React from 'react';
import styled from 'styled-components';
import Card from './card';
import data from './data';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Headline = styled.h3`
  font-family: "Lora", sans-serif;
  font-size: 32px;
  font-weight: normal;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1;
  }
`;

const Scroller = styled.div`
  @media (min-width: 768px) {
    margin: 0 -16px -120px;
    overflow: hidden;
    overflow-x: scroll;
    padding: 80px 16px 120px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-gap: 80px;
  grid-template-rows: auto;
  list-style-type: none;
  margin: 0;
  padding: 32px 0;
  place-items: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-gap: 32px;
    grid-auto-flow: column;
    padding: 0;
  }
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;

  &::after {
    background: ${({ theme }) => theme.colors.gray};
    content: "";
    height: 1px;
    position: absolute;
    bottom: -38px;
    left: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    &:after {
      display: none;
    }
  }
`;

const Work = () => (
  <Container>
    <Headline>Selected Work</Headline>
    <Scroller>
      <List>
        {data.map(({
          id, title, subtitle, background, icon, url,
        }, idx) => (
          <ListItem key={id}>
            <Card
              background={background}
              icon={icon}
              title={title}
              subtitle={subtitle}
              url={url}
              index={(idx + 1)}
            />
          </ListItem>
        ))}
      </List>
    </Scroller>
  </Container>
);

export default Work;
