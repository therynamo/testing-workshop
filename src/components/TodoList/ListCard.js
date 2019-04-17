import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import deleteTodo from '../../actions/deleteTodo';

import { ListCardWrapper, ListCardImage } from './styles';
import { CloseButton } from '../../styles';

const ListCard = ({
  id, title, history, refreshTodos,
}) => {
  const handleClose = useCallback(() => {
    const deleteCard = async () => {
      await deleteTodo(id);
    };
    deleteCard();
    history.replace('/');
    refreshTodos(true);
  }, [history, refreshTodos]);

  return (
    <ListCardWrapper className="h-margin-v-tight" id={id}>
      <CloseButton onClick={handleClose} />
      <ListCardImage src="https://www.fillmurray.com/200/300" alt="item card" />
      <Link to={`/${id}`}>{title}</Link>
    </ListCardWrapper>
  );
};

ListCard.defaultProps = {
  id: '',
  title: 'Generic Title',
  refreshTodos: () => {},
};

ListCard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  id: PropTypes.string,
  refreshTodos: PropTypes.func,
  title: PropTypes.string,
};

export default ListCard;
