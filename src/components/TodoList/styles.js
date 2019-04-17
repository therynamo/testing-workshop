import styled from 'styled-components';

export const TodoListContainer = styled.div`
  background: #d3d3d3;
  padding: 10px;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  min-width: 275px;
`;

export const ListCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListCardImage = styled.img`
  width: 50px;
  height: 50px;

  object-fit: cover;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
