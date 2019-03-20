import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Arrow from '../../images/icon-arrow';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  width: 277px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Container = styled.div`
  align-items: center;
  background-size: cover;
  background: url(${({ background }) => background}) no-repeat top center;
  border-radius: 2.8em;
  display: flex;
  flex-direction: column;
  height: 364px;
  justify-content: center;

  @media (min-width: 768px) {
    height: 460px;
  }
`;

const Icon = styled.img`
  display: block;
  transform: scale(0.75);
  width: var(--iconWidth);

  @media (min-width: 768px) {
    transform: scale(1);
  }

  ${({ index }) => index === 1 && css`
    --iconWidth: 190px;
  `};
  ${({ index }) => index === 2 && css`
    --iconWidth: 212px;
    /* margin: 35px 0 0 35px; */
    margin: 10% 0 0 10%;
  `};
  ${({ index }) => index === 3 && css`
    --iconWidth: 228px;
    /* margin: 50px 0 0 35px; */
    margin: 18% 0 0 12.5%;
  `};
  ${({ index }) => index === 4 && css`
    --iconWidth: 228px;
    /* margin: 50px 0 0 35px; */
    margin: 18% 0 0 12.5%;
  `};
  ${({ index }) => index === 5 && css`
    --iconWidth: 212px;
    /* margin: 35px 0 0 35px; */
    margin: 10% 0 0 10%;
  `};
  ${({ index }) => index === 6 && css`
    --iconWidth: 301px;
  `};
  ${({ index }) => index === 7 && css`
    --iconWidth: 190px;
  `};
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.p`
  font-size: 24px;
  line-height: normal;
  margin: 30px 0 0 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Link = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  margin-top: 40px;
  text-decoration: none;
  max-width: 140px;

  > span {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const Card = ({
  title, subtitle, background, icon, url, index,
}) => (
  <Wrapper>
    <Container background={background}>
      <Icon src={icon} alt={title} index={index} />
    </Container>
    <Details>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Link href={url}>
        <span>VIEW CASESTUDY ON BEHANCE</span>
        <Arrow />
      </Link>
    </Details>
  </Wrapper>
);

Card.propTypes = {
  background: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
