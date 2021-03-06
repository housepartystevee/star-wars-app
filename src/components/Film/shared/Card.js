import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  margin: 1rem;
  background: ${props => props.theme.card_bg};
  border-radius: 25px;
  border: 1px solid ${props => props.theme.secondary};
  box-shadow: ${props => props.theme.shadows};
  :hover {
        -webkit-transform: ${props => props.theme.transform};
        -ms-transform: ${props => props.theme.transform};
        transform: ${props => props.theme.transform};
        transition: ${props => props.theme.transiton};
      }
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
  }
  p {
    font-weight: 700;
    font-size: 1.3rem;
  }
`;

export default Card;
