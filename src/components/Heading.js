import styled from 'styled-components';

const StyledHeading = styled.h2`
  margin: ${({ top }) => `${top}px`} 0 0;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '25px'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : '28px'};
  text-align: ${({ align }) => align ? align : 'initial'};
  color: ${({ color }) => color ? color : '#001D29'};
`;

export default StyledHeading;
