import React from 'react';
import styled from 'styled-components';
import LogoSvg from '../assets/images/logo.svg';

const StyledLogo = styled.img`
  position: relative;
  display: block;
  margin-right: 30.22px;
`;

const Logo = () => (
  <StyledLogo src={LogoSvg} />
);

export default Logo;
