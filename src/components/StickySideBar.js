import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';

const StyledContainer = styled.div`
  position: sticky;
  left: 0;
  top: 90px;
  padding-top: 33px;
`;

const StyledSearchContainer = styled.div`
  position: relative;
  padding-left: calc(50vw - 570px);
  padding-bottom: 23px;
`;

const StickySideBar = ({ content }) => (
  <StyledContainer>
    <StyledSearchContainer>
      <SearchBox onChange={() => {}} />
    </StyledSearchContainer>
    { content() }
  </StyledContainer>
);

StickySideBar.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default StickySideBar;
