import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  min-height: 100vh;
  max-width: 930px;
`;

const Text = styled.h3`
  font-size: 32px;
  font-weight: normal;
  mix-blend-mode: normal;

  > span {
    mix-blend-mode: difference;
  }

  > a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    mix-blend-mode: normal;
    position: relative;
    text-decoration: none;
    white-space: nowrap;

    &::after {
      background: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(10px);
      transition: transform 250ms ease;
      width: 100%;
    }

    &:hover {
      &::after {
        transform: translateY(-14px);

        @media (min-width: 640px) {
          transform: translateY(-19px);
        }
      }
    }
  }

  @media (min-width: 640px) {
    font-size: 40px;
  }
`;

const Bio = () => (
  <Container>
    <Text>
      <span>I am a digital craftsman who creates beautiful and intuitive user interfaces. </span>
      <a href="mailto:sweetlookingstuff@gmail.com">Let’s work together.</a>
    </Text>
  </Container>
);

export default Bio;
