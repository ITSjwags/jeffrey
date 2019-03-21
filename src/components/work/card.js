import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Arrow from '../../images/icon-arrow';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  width: 277px;

  @media (min-width: 768px) {
    transition: transform 300ms ease;
    width: 350px;

    ${({ isHovering }) => isHovering && css`
      transform: translateY(-16px);
    `}
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
  mix-blend-mode: normal;

  @media (min-width: 768px) {
    height: 460px;
    transition: box-shadow 300ms ease;

    ${({ isHovering }) => isHovering && css`
      ${({ index }) => index === 1 && css`
        box-shadow: 0px 60px 60px rgba(51, 51, 51, 0.3);
      `};
      ${({ index }) => index === 2 && css`
        box-shadow: 0px 60px 60px rgba(13, 93, 187, 0.3);
      `};
      ${({ index }) => index === 3 && css`
        box-shadow: 0px 60px 60px rgba(57, 28, 132, 0.3);
      `};
      ${({ index }) => index === 4 && css`
        box-shadow: 0px 60px 60px rgba(42, 52, 73, 0.3);
      `};
      ${({ index }) => index === 5 && css`
        box-shadow: 0px 60px 60px rgba(10, 24, 73, 0.3);
      `};
      ${({ index }) => index === 6 && css`
        box-shadow: 0px 60px 60px rgba(23, 23, 23, 0.3);
      `};
      ${({ index }) => index === 7 && css`
        box-shadow: 0px 60px 60px rgba(35, 52, 63, 0.3);
      `};
    `}
  }
`;

const Icon = styled.img`
  display: block;
  transform: scale(0.75);
  width: var(--iconWidth);

  @media (min-width: 768px) {
    transform: scale(1);
    transition: opacity 300ms ease;
    transition-delay: 200ms;

    ${({ isHovering }) => isHovering && css`
      opacity: 0;
      transition-delay: 0s;
    `};
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
  overflow: hidden;
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    * {
      mix-blend-mode: normal;
    }
  }
`;

const Title = styled.p`
  font-size: 24px;
  line-height: normal;
  margin: 30px 0 0 0;

  @media (min-width: 768px) {
    font-size: 32px;
    transform: translateY(-200px);
    transition: transform 300ms ease-out;
    transition-delay: 0;

    ${({ isHovering }) => isHovering && css`
      transform: translateY(80px);
      transition-delay: 200ms;
    `};
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0 0 0;

  @media (min-width: 768px) {
    transform: translateY(-200px);
    transition: transform 300ms ease-out;
    transition-delay: 0;

    ${({ isHovering }) => isHovering && css`
      transform: translateY(80px);
      transition-delay: 100ms;
    `};
  }
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
    transform: translateY(100px);
    transition: transform 300ms ease-out;
    transition-delay: 0;

    ${({ isHovering }) => isHovering && css`
      transform: translateY(-40px);
      transition-delay: 200ms;
    `};
  }
`;

const Card = (props) => {
  const {
    title, subtitle, background, icon, url, index,
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      isHovering={hover}
    >
      <Container background={background} index={index} isHovering={hover}>
        <Icon src={icon} alt={title} index={index} isHovering={hover} />
      </Container>
      <Details isHovering={hover}>
        <span>
          <Title isHovering={hover}>{title}</Title>
          <SubTitle isHovering={hover}>{subtitle}</SubTitle>
        </span>
        <Link href={url} target="_blank" isHovering={hover}>
          <span>VIEW CASESTUDY ON BEHANCE</span>
          <Arrow />
        </Link>
      </Details>
    </Wrapper>
  );
};

Card.propTypes = {
  background: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
