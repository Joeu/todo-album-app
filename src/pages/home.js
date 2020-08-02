import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { Card, Loading, Error } from '../components';
import { breakpoints } from '../styles/mediaQueries';
import { sleutheYellow } from '../styles/colors';

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${breakpoints.small}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

const CardWrapper = styled.div`
  display: grid;

  .side {
    grid-area: 1 / 1 / 2 / 2;
    transition: all 0.8s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card--back {
    transform: rotateY(-180deg);
    background-color: ${sleutheYellow};
  }

  &:hover .card--front {
    transform: rotateY(180deg);
  }

  &:hover .card--back {
    transform: rotateY(0);
  }
`;

const StyledCard = styled(Card)``;

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

/*

{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
},
*/
const renderUserCard = (user) => {
  return (
    <CardWrapper>
      <StyledCard className='side card--front'>
        <div>{user.name}</div>
        <div>{user.userName}</div>
        <div>{user.email}</div>
      </StyledCard>
      <StyledCard className='side card--back'>
        <div>{user.phone}</div>
        <div>{user.website}</div>
        <div>{user.address.city}</div>
      </StyledCard>
    </CardWrapper>
  );
};

export default Home;
