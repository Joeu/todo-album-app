import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UsercContext from '../context/usersContext';
import { Card } from '../components';
import { mq, colors, typography } from '../styles';

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  justify-content: center;
  grid-template-columns: 1fr 5fr;
  grid-gap: 2rem;

  @media screen and (max-width: ${mq.breakpoints.small}px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
  }
`;

const StyledCardButton = styled(Card)`
  transition: all 0.2s;

  ${({ selected }) =>
    selected &&
    `
    background: ${colors.coralPink};
    color: ${colors.white};
    `}

  &:hover {
    cursor: pointer;
    background: ${colors.sleutheYellow};
  }
`;

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  justify-content: center;
`;

const PhotoCard = styled(Card)`
  display: flex;
  flex-direction: column;

  span {
    padding-top: 0.5rem;
    font-size: ${typography.xlarge};
  }
`;

const Albums = () => {
  const users = useContext(UsercContext).response;
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

  const renderLinks = () => {
    return (
      <div>
        {users?.map((user) => (
          <StyledCardButton
            key={user.id}
            onClick={() => setSelectedUserId(user.id)}
            selected={user.id === selectedUserId}
          >
            {user.name}
          </StyledCardButton>
        ))}
      </div>
    );
  };

  const renderGallery = () => {
    return (
      <StyledGallery>
        {gallery?.map((photo) => renderPhotoCard(photo))}
      </StyledGallery>
    );
  };

  const renderPhotoCard = (album) => {
    const { title, thumbnailUrl, id } = album;
    return (
      <PhotoCard key={id}>
        <img src={thumbnailUrl} alt={id} />
        <span>{title}</span>
      </PhotoCard>
    );
  };

  return (
    <StyledSection>
      {renderLinks()}
      {renderGallery()}
    </StyledSection>
  );
};

export default Albums;
