import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import {
  Globe,
  Phone,
  Mail,
  UserOutline,
  Briefcase,
  BusinessCard,
  InfoLarge,
} from '@styled-icons/typicons';
import { useFetch } from '../hooks/useFetch';
import { Card, Loading, Error } from '../components';
import { mq, colors, typography } from '../styles';

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${mq.breakpoints.small}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

const CardWrapper = styled.div`
  perspective: 150rem;
  display: grid;

  .side {
    grid-area: 1 / 1 / 2 / 2;
    transition: all 0.8s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card--back {
    transform: rotateY(-180deg);
  }

  &:hover .card--front {
    transform: rotateY(180deg);
  }

  &:hover .card--back {
    transform: rotateY(0);
  }

  @media screen and (max-width: ${mq.breakpoints.extraLarge}px) {
    &:active .card--front {
      transform: rotateY(180deg);
    }

    &:active .card--back {
      transform: rotateY(0);
    }
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .card_major-icon {
    width: 20%;
  }

  .card_info {
    flex: 1;
  }

  .card_header {
    font-size: ${typography.heading.four};
  }
`;

const IconStyleWrapper = styled.div`
  margin: 1rem auto;
  font-size: ${typography.size.large};
  align-self: flex-start;
  text-align: center;

  .row-info {
    display: flex;
    aling-items: center;
    justify-content: flex-start;
  }

  ${StyledIconBase} {
    color: ${colors.coralPink};
    height: ${typography.size.xxlarge};
    padding-right: 0.5rem;
  }
`;

const Home = () => {
  const [response, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/users/'
  );
  return (
    <StyledSection>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>{response?.map((user) => renderUserCard(user))}</>
      )}
    </StyledSection>
  );
};

const renderUserCard = (user) => {
  const { name, username, email, phone, website, address, company } = user;
  const frontHeader = `${name} (${username})`;
  const frontData = [
    {
      icon: Mail,
      text: email,
    },
    {
      icon: Phone,
      text: phone,
    },
    {
      icon: Globe,
      text: address.city,
    },
  ];

  const backData = [
    {
      icon: InfoLarge,
      text: company.catchPhrase,
    },
    {
      icon: BusinessCard,
      text: company.bs,
    },
  ];

  const renderInfoRow = (SvgIcon, text) => (
    <div className='row-info'>
      <SvgIcon />
      <div>{text}</div>
    </div>
  );

  const renderCardSide = (MajorIcon, header, dataArray) => {
    return (
      <>
        <div className='card_major-icon'>
          <MajorIcon size={40} />
        </div>
        <div className='card_info'>
          <div className='card_header'>{header}</div>
          <IconStyleWrapper>
            {dataArray.map((info) => renderInfoRow(info.icon, info.text))}
          </IconStyleWrapper>
        </div>
      </>
    );
  };

  return (
    <CardWrapper>
      <StyledCard className='side card--front'>
        {renderCardSide(UserOutline, frontHeader, frontData)}
      </StyledCard>
      <StyledCard className='side card--back'>
        {renderCardSide(Briefcase, company.name, backData)}
      </StyledCard>
    </CardWrapper>
  );
};

export default Home;
