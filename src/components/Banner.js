import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BannerImg from '../assets/images/banner.png';
import Paragraph from './Paragraph';
import Heading from './Heading';
import BannerSignUp from './BannerSignUp';

const StyledBannerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: ${({ top }) => top ? `${top}px` : '52px'};
  padding-left: 45px;
  padding-bottom: 49px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #F2F4F5;
  background: #FFFFFF;
`;

const StyledContentWrapper = styled.div`
  padding-top: 44px;
`;

const StyledImageWrapper = styled.div`
  margin-left: -50px;
  padding-top: 21px;
`;

const Banner = ({ top }) => (
  <StyledBannerContainer top={top}>
    <StyledContentWrapper>
      <Heading top="0" color="#0C40FC" fontSize="30" lineHeight="32">Bet Smarter</Heading>
      <Heading top="0" fontSize="30" lineHeight="32">with abe insights</Heading>
      <Paragraph top="22" fontSize="18" lineHeight="26" width="363">
        {`The 3-minute newsletter with fresh takes on the betting news you need to start your day.`}
      </Paragraph>
      <BannerSignUp />
    </StyledContentWrapper>
    <StyledImageWrapper>
      <img src={BannerImg} alt="banner" />
    </StyledImageWrapper>
  </StyledBannerContainer>
);

Banner.defaultProps = {
  top: 0,
}

Banner.propTypes = {
  top: PropTypes.string,
}

export default Banner;
