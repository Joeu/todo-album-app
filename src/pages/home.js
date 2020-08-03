import React, { useContext } from 'react';
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
import UsercContext from '../context/usersContext';
import { Card, Loading, Error } from '../components';
import { mq, colors, typography } from '../styles';

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${mq.breakpoints.small}px) {
    grid-template-columns: repeat(auto-fill, 45rem);
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

  .card__major-icon {
    width: 20%;
  }

  .card__info {
    flex: 1;
  }

  .card__header {
    font-size: ${typography.heading.four};
  }
`;

const IconStyleWrapper = styled.div`
  margin: 1rem auto;
  font-size: ${typography.size.xlarge};
  align-self: flex-start;
  text-align: center;

  .row-info {
    display: flex;
    aling-items: center;
    justify-content: flex-start;
  }

  ${StyledIconBase} {
    color: ${colors.coralPink};
    height: ${typography.size.xlarge};
    padding-right: 0.5rem;
  }
`;

const Home = () => {
  const { response, loading, error } = useContext(UsercContext);

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
  const { name, username, email, phone, address, company } = user;
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
    <div key={text} className='row-info'>
      <SvgIcon />
      <div>{text}</div>
    </div>
  );

  const renderCardSide = (MajorIcon, header, dataArray) => {
    return (
      <>
        <div className='card__major-icon'>
          <MajorIcon size={40} />
        </div>
        <div className='card__info'>
          <div className='card__header'>{header}</div>
          <IconStyleWrapper>
            {dataArray.map((info) => renderInfoRow(info.icon, info.text))}
          </IconStyleWrapper>
        </div>
      </>
    );
  };

  return (
    <CardWrapper key={user.id}>
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
