import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { TodoDetailsContainer } from './styles';
import { CloseLink } from '../../styles';
import getTodo from '../../actions/getTodo';

const TodoDetails = ({ match }) => {
  const [todoDetails, setTodoDetails] = useState({});

  useEffect(() => {
    const fetchTodoDetails = async () => {
      let details = {};

      try {
        details = await getTodo(match.params.id);
      } catch (e) {
        console.error('Failed to retreive todo details', e);
      }

      setTodoDetails(details);
    };

    fetchTodoDetails();
  }, [match.params.id]);

  return (
    <TodoDetailsContainer>
      <CloseLink to="/" />
      <h1>{todoDetails.title}</h1>
      <p>{todoDetails.description}</p>
    </TodoDetailsContainer>
  );
};

TodoDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
export default TodoDetails;
