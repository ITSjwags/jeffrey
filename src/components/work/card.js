import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: url(${({ background }) => background}) no-repeat top center;
  background-size: cover;
  border-radius: 2.8em;
  height: 460px;
  position: relative;
  width: 350px;
`;

const Card = ({
  title, subtitle, background, icon,
}) => (
  <Container background={background}>
    <img src={icon} alt={title} />
    <p>{title}</p>
    <p>{subtitle}</p>
  </Container>
);

Card.propTypes = {
  background: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
