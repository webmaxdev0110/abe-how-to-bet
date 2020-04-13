import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import HeaderNav from './HeaderNav';
import HeaderCTA from './HeaderCTA';

const StyledContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const Header = () => {
  return (
    <StyledContainer>
      <Container>
        <HeaderWrap>
          <HeaderNav />
          <HeaderCTA />
        </HeaderWrap>
      </Container>
    </StyledContainer>
  );
}

export default Header;
