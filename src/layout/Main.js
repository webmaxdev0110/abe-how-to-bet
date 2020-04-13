import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Header, Footer } from '../components';

const StyledContainer = styled(Container)`
  padding: 0;
  background-color: #F9FAFA;
`;

const Main = ({ children }) => (
  <StyledContainer fluid>
    <Header />
    {children}
    <Footer />
  </StyledContainer>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Main;
