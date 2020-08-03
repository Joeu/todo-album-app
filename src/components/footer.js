import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { SocialGithub, SocialLinkedin } from '@styled-icons/typicons';
import { colors, typography } from '../styles';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  background-color: ${colors.lightBlack};
  height: 6rem;
  color: white;
`;

const ExternalLinks = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;

  ${StyledIconBase} {
    &:hover {
      color: ${colors.sleutheYellow};
      cursor: pointer;
    }
  }
`;

const DeveloperInfo = styled.div`
  padding-right: 2rem;
  align-self: center;
  justify-conetnt: flex-end;
  font-size: ${typography.size.large};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ExternalLinks className='footer__content'>
        <DeveloperInfo>joeumar@gmail.com</DeveloperInfo>
        <SocialGithub
          size={30}
          onClick={() => window.open('http://github.com/joeu')}
        />
        <SocialLinkedin
          size={30}
          onClick={() => window.open('http://github.com/joeu')}
        />
      </ExternalLinks>
    </StyledFooter>
  );
};

export default Footer;
