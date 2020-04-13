import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'reactstrap';

const StyledContainer = styled.div`
  margin-top: 27px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  background: #FFFFFF;
`;

const StyledInput = styled(Input)`
  width: 280px;
  padding: 18px 48px 16px 22px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.02em;
  border: none;
  border-radius: 4px;
  background-color: #F9FAFA;
  color: #001D29;
  opacity: 0.9;
`;

const StyledButton = styled(Button)`
  margin-left: 28px;
  margin-right: 24px;
  padding: 0;
  border: none;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  background: transparent;
  color: #0C40FC;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #0C40FC;
  } 
`;

const BannerSignUp = () => (
  <StyledContainer>
    <StyledInput placeholder="your email here" />
    <StyledButton>sign up for free</StyledButton>
  </StyledContainer>
);

export default BannerSignUp;
