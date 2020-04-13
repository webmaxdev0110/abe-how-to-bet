import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
  font-size: 14px;
  line-height: 22px;
`;

const FooterNav = () => (
  <StyledNavContainer>
    <StyledLink to="#">About Us</StyledLink>
    <StyledLink to="#">How abe Works</StyledLink>
    <StyledLink to="#">Privacy Policy</StyledLink>
    <StyledLink to="#">Terms Of Service</StyledLink>
  </StyledNavContainer>
);

export default FooterNav;
