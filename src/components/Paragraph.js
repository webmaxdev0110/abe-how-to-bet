import styled from 'styled-components';

const StyledParagraph = styled.p`
  max-width: 100%;
  width: ${({ width }) => width ? `${width}px` : '600px'};
  margin: ${({ top }) => `${top}px`} 0 0;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '18px'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : '26px'};
  text-align: ${({ align }) => align ? align : 'initial'};
  color: #001D29;
`;

export default StyledParagraph;
