import styled from 'styled-components';

import { lighterBlackBorder, snow } from '../styles/colors';

const Card = styled.div`
  border: 0.1rem solid ${lighterBlackBorder};
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
  background-color: ${snow};
`;

export default Card;
