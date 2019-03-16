import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 1280px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 142px);
  max-width: 870px;
`;

const Headline = styled.h2`
  font-size: 36px;
  font-weight: normal;
  line-height: normal;
  margin: 0 0 30px 0;

  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

const Bio = styled.p`
  font-size: 20px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Jeffrey" keywords={['jeffrey', 'huysentruyt', 'designer', 'creative']} />
    <Wrapper>
      <Container>
        <Headline>
          My name is Jeffrey, and I am a creative director & UI+UX designer.
        </Headline>
        <Bio>
          I love bringing brands and their customers together through
          great design and user experience. Being a problem solver
          with over 10 years of experience, I know how to fuel freelance
          relationships, high impact startups and creative agencies.
          I have a strong passion for leading teams to create amazing products
          and brands with a human-centered design approach.
        </Bio>
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;
