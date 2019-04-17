import React, { useCallback, useState } from 'react';
import { PropTypes } from 'prop-types';

import ListCard from './ListCard';

import { TodoListContainer, StyledForm } from './styles';

const TodoList = ({
  items, handleCreateDetails, refreshTodos, history,
}) => {
  const [shouldShowNewCard, setShouldShowNewCard] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleNewTodoClick = useCallback(() => {
    setShouldShowNewCard(true);
  }, []);

  const handleCancel = useCallback(() => {
    setShouldShowNewCard(false);
  }, []);

  const handleOnCreateDetails = useCallback(
    (e) => {
      e.preventDefault();
      handleCreateDetails({ title, description });
      setShouldShowNewCard(false);
      setTitle('');
      setDescription('');
    },
    [title, description, handleCreateDetails],
  );

  return (
    <TodoListContainer className="h-margin-v-default">
      <div>
        {items.map((item = {}) => (
          <ListCard key={item.id} refreshTodos={refreshTodos} history={history} {...item} />
        ))}
      </div>
      <div>
        {!shouldShowNewCard && (
          <button type="button" onClick={handleNewTodoClick}>
            Add new card
          </button>
        )}
        {shouldShowNewCard && (
          <StyledForm>
            <input placeholder="title" onChange={e => setTitle(e.target.value)} value={title} />
            <textarea
              className="h-margin-v-tight"
              placeholder="description"
              type="text"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
            <div>
              <button type="button" onClick={handleCancel}>
                cancel
              </button>
              <button type="submit" onClick={handleOnCreateDetails}>
                submit
              </button>
            </div>
          </StyledForm>
        )}
      </div>
    </TodoListContainer>
  );
};

TodoList.defaultProps = {
  items: [{}],
  handleCreateDetails: () => {},
  refreshTodos: () => {},
};

TodoList.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  handleCreateDetails: PropTypes.func,
  refreshTodos: PropTypes.func,
};

export default TodoList;
