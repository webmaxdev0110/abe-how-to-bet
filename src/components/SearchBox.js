import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import SearchIcon from '../assets/images/search_icon.svg';

const StyledInputContainer = styled.div`
  position: relative;
  width: 280px;
  height: 46px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 100%;
  padding: 13px 48px 13px 22px;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
  background-color: white;
  color: #88979E;
`;

const StyledSearchIcon = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 17px;
  right: 16px;
`;

const SearchBox = ({ onChange }) => (
  <StyledInputContainer>
    <StyledInput placeholder="Search How To Bet" onChange={onChange} />
    <StyledSearchIcon src={SearchIcon} alt="Search Icon" />
  </StyledInputContainer>
);

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
