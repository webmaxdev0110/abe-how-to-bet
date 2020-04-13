import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import HeaderLogo from './HeaderLogo';

const NavWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 25px 0;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 28px;
  margin-bottom: 4px;
  padding: 0;
  text-transform: capitalize;
  text-align: center;

  &:hover,
  &.active {
    text-shadow: 0 0 .65px #0C40FC, 0 0 .65px #0C40FC;
  }
`;

const routes = [
  { label: 'Odds', link: '/odds' },
  { label: 'Futures', link: '/futures' },
  { label: 'How To Bet', link: '/how-to-bet' },
  { label: 'Leagues', link: '/leagues' },
  { label: 'Legalization', link: '/legalization' },
  { label: 'Insights', link: '/insights' },
  { label: 'Reviews', link: '/reviews' },
  { label: 'Deals', link: '/deals' },
]

const HeaderNav = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <HeaderLogo />
      <Nav>
        {routes.map((route) => (
          <NavItem>
            <StyledNavLink
              tag={Link}
              to={route.link}
              className={location.pathname === route.link ? 'active' : ''}
            >
              {route.label}
            </StyledNavLink>
          </NavItem>
        ))}
      </Nav>
    </NavWrapper>
  );
};

export default HeaderNav;
