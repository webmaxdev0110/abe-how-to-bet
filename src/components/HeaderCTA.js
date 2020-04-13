import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const CTAWrapper = styled.div`
  padding: 24px 0 16px;
`;

const CTAButton = styled(Button)`
  margin-left: 10px;
`;

const HeaderCTA = () => (
  <CTAWrapper>
    <CTAButton outline color="secondary">Log In</CTAButton>
    <CTAButton color="primary">Join Now</CTAButton>
  </CTAWrapper>
);

export default HeaderCTA;
