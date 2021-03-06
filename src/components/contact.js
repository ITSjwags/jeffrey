import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;
`;

const Text = styled.h3`
  font-family: "Lora", sans-serif;
  font-size: 32px;
  font-weight: normal;
  mix-blend-mode: normal;
  max-width: 930px;

  > span {
    mix-blend-mode: difference;
  }

  > a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    mix-blend-mode: normal;
    outline: none;
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

    &:hover,
    &:focus {
      &::after {
        transform: translateY(-14px);

        @media (min-width: 768px) {
          transform: translateY(-19px);
        }
      }
    }
  }

  @media (min-width: 768px) {
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
