import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../context/usersContext';
import { useFetch } from '../hooks/useFetch';
import { Card, Loading, Error } from '../components';
import { mq, colors, typography } from '../styles';

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  @media screen and (min-width: ${mq.breakpoints.small}px) {
    grid-template-columns: 1fr 6fr;
    grid-gap: 2rem;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const StyledGallery = styled.div`
  display: grid;
  grid-row: 2 / -11;
  grid-column: 2 / 3;

  grid-template-columns: repeat(auto-fill, 20rem);
`;

const Albums = () => {
  const users = useContext(UserContext).response;
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchPhotos = () => {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${selectedUserId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGallery(data);
        });
    };
    fetchPhotos();
  }, [selectedUserId]);

  const renderLinks = (user) => {
    return (
      <Card onClick={() => setSelectedUserId(user.id)}>
        {user.name}'s album
      </Card>
    );
  };

  const renderGallery = () => {
    console.log(gallery);
    return (
      <StyledGallery>
        {gallery?.map((photo) => renderAlbumCard(photo))}
      </StyledGallery>
    );
  };

  return (
    <StyledSection>
      {users?.map((user) => renderLinks(user))}
      {renderGallery()}
    </StyledSection>
  );
};

const renderAlbumCard = (album) => {
  const { title, thumbnailUrl } = album;
  return (
    <StyledCard key={album.id}>
      <img src={thumbnailUrl} />
      {title}
    </StyledCard>
  );
};

export default Albums;
