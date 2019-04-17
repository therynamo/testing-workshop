import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 376px) {
    flex-direction: column;
  }
`;

export const CloseLink = styled(Link)`
  align-self: flex-end;
  text-decoration: none;
  &:before {
    content: 'x';
    color: #666;
    font-weight: 300;
    font-family: Arial, sans-serif;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  text-decoration: none;
  &:before {
    content: 'x';
    color: #666;
    font-weight: 300;
    font-family: Arial, sans-serif;
  }
`;
