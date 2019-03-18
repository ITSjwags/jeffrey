import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-size: cover;
  background: url(${({ background }) => background}) no-repeat top center;
  border-radius: 2.8em;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: center;
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
