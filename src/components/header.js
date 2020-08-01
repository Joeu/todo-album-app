import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: 7rem;
  width: 120rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: white;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: red;
    }
  }
`;

const activeStyle = {
  backgroundColor: 'blue',
  color: 'white',
};

const StyledLink = styled(NavLink)`
  font-size: 2rem;
  color: 'red';
`;

const Header = ({ routes }) => {
  return (
    <StyledHeader>
      {/* TODO: Logo Logo */}
      {routes.map((route) => (
        <StyledLink activeStyle={activeStyle} to={route.path}>
          {route.name}
        </StyledLink>
      ))}
      {/* TODO: Profile Item */}
    </StyledHeader>
  );
};

export default Header;
