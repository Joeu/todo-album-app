import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem, auto;
  height: 7rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: 'red';
`;

const Header = ({ routes }) => {
  return (
    <StyledHeader>
      {routes.map((route) => (
        <StyledLink to={route.path}>{route.name}</StyledLink>
      ))}
    </StyledHeader>
  );
};

export default Header;
