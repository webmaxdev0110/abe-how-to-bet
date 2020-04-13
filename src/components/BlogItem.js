import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from './Anchor';
import Arrow from '../assets/images/left_arrow.svg';

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
  width: 150px;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '18px'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : '22px'};
  color: black;
`;

const StyledCTA = styled.div`
  padding: 36px 7px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const StyledCategory = styled.span`
  margin-top: 16px;
  font-family: Barlow;
  font-weight: 600;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #001D29;
`;

const BlogItem = ({ image, title, category, link, fontSize, lineHeight }) => (
  <StyledContainer>
    <StyledImageWrapper>
      <img src={image} alt={title} />
    </StyledImageWrapper>
    <StyledTitle fontSize={fontSize} lineHeight={lineHeight}>{title}</StyledTitle>
    <StyledCTA>
      <Anchor to={link} fontSize="12" lineHeight="12">
        <img src={Arrow} alt="link" />
      </Anchor>
      <StyledCategory>
        {category}
      </StyledCategory>
    </StyledCTA>
  </StyledContainer>
);

BlogItem.defaultProps = {
  fontSize: '18',
  lineHeight: '22',
};

BlogItem.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
}

export default BlogItem;
