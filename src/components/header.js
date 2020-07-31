import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem, auto;
`;

const Header = ({ routes }) => {
  return (
    <StyledHeader>
      {routes.map((route) => (
        <Link to={route.path}>{route.name}</Link>
      ))}
    </StyledHeader>
  );
};

export default Header;
