import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Contact from '../components/contact';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 1280px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Jeffrey" keywords={['jeffrey', 'huysentruyt', 'designer', 'creative']} />
    <Wrapper>
      <Bio />
      <Contact />
    </Wrapper>
  </Layout>
);

export default IndexPage;
