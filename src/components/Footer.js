import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import FooterNav from './FooterNav';
import InstagramIcon from '../assets/images/instagram.svg';
import TwitterIcon from '../assets/images/twitter.svg';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
`;

const StyledInnerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInnerRight = styled.div`
  max-width: 100%;
  width: 455px;
`;

const StyledFooterText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: #88979E;
`;

const StyledSocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #001D29;
  cursor: pointer;
`;

const Footer = () => (
  <StyledContainer>
    <StyledInnerLeft>
      <StyledSocialIcon>
        <img src={InstagramIcon} alt="instagram" />
      </StyledSocialIcon>
      <StyledSocialIcon>
        <img src={TwitterIcon} alt="twitter" />
      </StyledSocialIcon>
      <FooterNav />
    </StyledInnerLeft>
    <StyledInnerRight>
      <StyledFooterText>
        {`© 2020 PopOdds inc. Reserved.`}
        <br />
        {`If you or someone you know has a gambling problem and wants help, call 1-800-Gambler.`}
        <br />
        {`You must be 21 years or older to place a bet.`}      
      </StyledFooterText>
    </StyledInnerRight>
  </StyledContainer>
);

export default Footer;
