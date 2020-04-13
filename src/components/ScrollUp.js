import React from 'react';
import styled from 'styled-components';

const UpArrow = styled.a`
  width: 20px;
  margin-top: 140px;
  height: 12.35px;
  cursor: pointer;

  &:hover {
    path {
      fill: #001D29;
    }
  }
`;

const ScrollUp = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <UpArrow onClick={handleClick}>
      <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.65 12.35L10 4.71664L2.35 12.35L-2.80229e-08 9.99998L10 -2.49148e-05L20 9.99998L17.65 12.35Z" fill="#CED7DB"/>
      </svg>
    </UpArrow>
  );
};

export default ScrollUp;
