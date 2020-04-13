import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  border: 1px solid #F2F4F5;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
`;

const StyledContent = styled.div`
  padding-top: 30px;
  padding-left: calc(50vw - 570px);
  padding-right: 82px;
  padding-bottom: 10px;
  
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 0px 10px 10px 0px;
    padding-bottom: 24px;
  }
`;

const StyledContentInner = styled.div`
  max-height: 0;
  overflow: hidden;

  transition: all .3s;

  &.active {
    max-height: 400px;
  }
`;

const StyledHeading = styled.h2`
  margin: 0 0 12px;
  max-width: 192px;

  &.active {
    color: #0C40FC;
  }
`;

const StyledParagraph = styled.p`
  margin: 0 0 25px;
  line-height: 22px;
`;

const StyledHeadingLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 15px;
  font-family: Barlow;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const routes = [
  {
    label: 'Betting 101',
    description: 'We’ll put you on the path to becoming a successful sports bettor',
    link: 'betting-101',
    subPages: [
      { label: 'Sports Betting Basics', link: 'sports-betting-basics' },
      { label: 'Betting Odds', link: 'betting-odds' },
      { label: 'Comparing Odds', link: 'comparing-odds' },
      { label: 'Onshore Sportsbooks', link: 'onshore-sportsbooks' },
      { label: 'In-Game Betting', link: 'in-gaming-betting' },
      { label: 'Tips From the Sharps', link: 'tips-from-the-sharps' },
      { label: 'Glossary', link: 'glossary' },
    ]
  },
  {
    label: 'Advanced Betting Concepts',
    description: 'Take your sports betting game to the next level with advice from the pros',
    link: 'advanced-betting-concepts',
    subPages: [
      { label: 'Sports Betting Market', link: 'sports-betting-market' },
      { label: 'Implied Probability', link: 'implied-probability' },
      { label: '“Synthetic Hold”', link: 'synthetic-hold' },
      { label: 'Weak vs. Strong', link: 'weak-vs-strong' },
    ]
  }
]

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isPathActive = (link) => pathname.indexOf(link) > -1;

  const isOpen = (link) => {
    if (pathname === '/how-to-bet' && link === 'betting-101') {
      return true;
    }
    return pathname.indexOf(link) > -1;
  }

  return (
    <StyledContentContainer>
      { routes.map((route, index) => (
        <StyledContent key={index} className={ isOpen(route.link) ? 'active' : '' }>
          <StyledHeadingLink to={`/how-to-bet/${route.link}`}>
            <StyledHeading className={ isPathActive(route.link) ? 'active' : '' }>
              {route.label}
            </StyledHeading>
          </StyledHeadingLink>
          <StyledContentInner className={ isOpen(route.link) ? 'active' : '' }>
            <StyledParagraph>{route.description}</StyledParagraph>
            { route.subPages.map((subPage, subIndex) => (
              <StyledLink
                key={subIndex}
                className={ isPathActive(subPage.link) ? 'active' : '' }
                to={`/how-to-bet/${route.link}/${subPage.link}`}
              >{subPage.label}</StyledLink>
            )) }
          </StyledContentInner>
        </StyledContent>
      )) }
    </StyledContentContainer>
  );
};

export default SideBar;
