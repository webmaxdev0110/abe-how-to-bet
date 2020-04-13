import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleLink = styled(Link)`
  font-family: Barlow;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: #88979E;
  cursor: pointer;
`;

const PageNavLink = ({ to, children }) => (
  <StyleLink
    to={to}
  >
    {children}
  </StyleLink>
);

export default PageNavLink;
