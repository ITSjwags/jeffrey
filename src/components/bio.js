import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;
`;

const Tag = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0px 5px 5px 0px;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 3px 12px;
  position: relative;

  &::after {
    border-bottom: 16px solid transparent;
    border-top: 16px solid transparent;
    border-left: 16px solid ${({ theme }) => theme.colors.primary};
    content: "";
    height: 0;
    position: absolute;
    top: 1px;
    right: -14px;
    width: 0;
  }
`;

const Headline = styled.h2`
  font-family: "Lora", sans-serif;
  font-size: 36px;
  font-weight: normal;
  line-height: normal;
  margin: 0 0 30px 0;
  max-width: 870px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Blurb = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 20px;
  max-width: 870px;
`;

const Bio = () => (
  <Container>
    <Tag>Hey, there</Tag>
    <Headline>
      My name is Jeffrey, and I am a creative director & UI+UX designer.
    </Headline>
    <Blurb>
      I love bringing brands and their customers together through
      great design and user experience. Being a problem solver
      with over 10 years of experience, I know how to fuel freelance
      relationships, high impact startups and creative agencies.
      I have a strong passion for leading teams to create amazing products
      and brands with a human-centered design approach.
    </Blurb>
  </Container>
);

export default Bio;
