import styled from 'styled-components';

import { colors } from '../styles';

const Card = styled.div`
  border: 0.1rem solid ${colors.lighterBlackBorder};
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
  background-color: ${colors.snow};
`;

export default Card;
