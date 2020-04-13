import styled from 'styled-components';

const StyledHeading = styled.p`
  margin: ${({ top }) => `${top}px`} 0 0;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '19px'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : '26px'};
  font-weight: 500;
  text-align: ${({ align }) => align ? align : 'initial'};
  color: #001D29;
  text-transform: uppercase;
`;

export default StyledHeading;
