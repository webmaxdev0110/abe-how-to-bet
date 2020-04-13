import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleAnchor = styled.a`
  font-family: Barlow;
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '26px')};
  color: ${({ color }) => (color ? `${color}` : '#0C40FC')};
  cursor: pointer;
`;

const StyleLink = styled(Link)`
  font-family: Barlow;
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '26px')};
  color: ${({ color }) => (color ? `${color}` : '#0C40FC')};
  cursor: pointer;
`;

const Anchor = ({ to, href, fontSize, lineHeight, color, children }) => {
  if (to) {
    return (
      <StyleLink
        to={to}
        fontSize={fontSize}
        lineHeight={lineHeight}
        color={color}
      >
        {children}
      </StyleLink>
    );
  }
  return (
    <StyleAnchor
      href={href}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
    >
      {children}
    </StyleAnchor>
  );
};

export default Anchor;
