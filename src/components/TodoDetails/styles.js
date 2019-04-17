import styled from 'styled-components';

export const TodoDetailsContainer = styled.div`
  background: #d3d3d3;
  padding: 10px;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  min-width: 275px;

  @media (min-width: 376px) {
    margin-left: 10px;
  }
`;
