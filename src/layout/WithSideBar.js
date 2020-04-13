import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StickySideBar from '../components/StickySideBar';

const StyledContainer = styled.div`
  display: flex;
`;

const StyledSideBar = styled.div`
  position: relative;
  max-width: 100%;
  width: calc(50vw - 282px);
`;

const StyledContent = styled.div`
  position: relative;
  min-height: 700px;
  flex: 1;
`;

const WithSideBar = ({ sidebar, children }) => (
  <StyledContainer>
    <StyledSideBar>
      <StickySideBar content={sidebar} />
    </StyledSideBar>
    <StyledContent>
      { children }
    </StyledContent>
  </StyledContainer>
);

WithSideBar.propTypes = {
  sidebar: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default WithSideBar;
