import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { pinkLeaf, sleutheYellow, shadowBlue, white } from '../styles/colors';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 7rem;
  z-index: 100;
  width: 100%;
  box-shadow: 0 0.5rem 0 rgba(0, 0, 0, 0.07);
  background-color: ${shadowBlue};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const Logo = styled.div`
  flex: 1;
  height: inherit;
  color: white;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 0 1rem;
  height: 4rem;
  margin: 0 0.2rem;
  background-color: ${pinkLeaf};
  transform: skewX(-9deg);
  transition: all 0.3s;

  &:hover {
    background-color: ${sleutheYellow};
  }

  span {
    transform: skewX(9deg);
  }
`;

const activeStyle = {
  backgroundColor: white,
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
