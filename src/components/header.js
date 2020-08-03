import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mq, colors, typography } from '../styles';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 7rem;
  z-index: 100;
  width: 100%;
  box-shadow: 0 0.5rem 0 rgba(0, 0, 0, 0.07);
  background-color: ${colors.shadowBlue};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: inherit;

  @media screen and (max-width: ${mq.breakpoints.small}px) {
    flex-sirection: column;
    margin: 0 1rem;
  }
`;

const Logo = styled.div`
  flex: 1;
  height: inherit;
  color: ${colors.white};

  @media screen and (max-width: ${mq.breakpoints.small}px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.size.xxlarge};
  padding: 0 1rem;
  height: 4rem;
  margin: 0 0.2rem;
  background-color: ${colors.pinkLeaf};
  transform: skewX(-9deg);
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.sleutheYellow};
  }

  span {
    transform: skewX(9deg);
  }
`;

const activeStyle = {
  backgroundColor: colors.white,
};

const Header = ({ routes }) => {
  const renderLogo = () => (
    <Logo>
      <h1>Logo</h1>
    </Logo>
  );

  const renderMenu = () =>
    routes.map((route) => (
      <StyledNavLink
        key={route.name}
        activeStyle={activeStyle}
        to={route.path}
        exact={route.exact}
      >
        <span>{route.name}</span>
      </StyledNavLink>
    ));

  return (
    <HeaderWrapper>
      <HeaderContent className='header__content'>
        {renderLogo()}
        {renderMenu()}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
