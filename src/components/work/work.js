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
  font-size: 32px;
  font-weight: normal;

  @media (min-width: 640px) {
    font-size: 40px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 32px;
  grid-template-rows: auto;
  mix-blend-mode: normal;
  overflow: hidden;
  overflow-x: scroll;
  padding: 0;
  width: 100%;

  * {
    mix-blend-mode: normal;
  }
`;

const Work = () => (
  <Container>
    <Headline>Selected Work</Headline>
    <List>
      {data.map(({
        id, title, subtitle, background, icon,
      }) => (
        <li key={id}>
          <Card
            background={background}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        </li>
      ))}
    </List>
  </Container>
);

export default Work;
