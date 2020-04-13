import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cross from '../assets/images/cross.svg';

const StyledContainer = styled.div`
  width: 294px;
  max-width: 100%;
  margin-right: 12px;
  margin-bottom: 12px;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

const StyledImageWrapper = styled.div`
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 5px 5px 10px;
  background: #F9FAFA;
`;

const StyledTitle = styled.h3`
  margin: 0 0 0 9px;
  width: 159px;
  font-size: 18px;
  line-height: 22px;
  color: black;
`;

const StyledButton = styled.a`
  margin: 0 11px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C40FC;
  cursor: pointer;

  transition: all .2s;

  &:hover {
    background-color: #001D29;
  }
`;

const BetItem = ({ image, title, onClick }) => (
  <StyledContainer>
    <StyledImageWrapper>
      <img src={image} alt={title} />
    </StyledImageWrapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledButton onClick={onClick}>
      <img src={Cross} alt="plus" />
    </StyledButton>
  </StyledContainer>
);

BetItem.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BetItem;
