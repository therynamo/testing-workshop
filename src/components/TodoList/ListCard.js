import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import deleteTodo from '../../actions/deleteTodo';

import { ListCardWrapper, ListCardImage } from './styles';
import { CloseButton } from '../../styles';

const ListCard = ({
  id, title, history, refreshTodos,
}) => {
  const [deleted, setDeleted] = useState(false);

  const handleClose = useCallback(() => {
    const deleteCard = async () => {
      try {
        await deleteTodo(id);
      } catch (e) {
        console.log(e);
      }
    };
    deleteCard();
    history.replace('/');
    refreshTodos(true);
    setDeleted(true);
  }, [history, refreshTodos, id, title]);

  return (
    <ListCardWrapper data-testid="list-card" className="h-margin-v-tight" id={id}>
      <CloseButton data-testid="list-card-delete" onClick={handleClose} />
      <ListCardImage src="https://www.fillmurray.com/200/300" alt="item card" />
      <Link data-testid="list-card-title" to={`/${id}`}>
        {title}
      </Link>
      {deleted && <p data-testid="list-card-deleted">deleted</p>}
    </ListCardWrapper>
  );
};

ListCard.defaultProps = {
  id: '',
  title: '',
  refreshTodos: () => {},
};

ListCard.propTypes = {
  history: PropTypes.shape({ replace: PropTypes.func }).isRequired,
  id: PropTypes.string,
  refreshTodos: PropTypes.func,
  title: PropTypes.string,
};

export default ListCard;
