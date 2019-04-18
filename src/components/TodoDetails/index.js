import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { TodoDetailsContainer } from './styles';
import { CloseLink } from '../../styles';
import getTodo from '../../actions/getTodo';

const TodoDetails = ({ match }) => {
  const [todoDetails, setTodoDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodoDetails = async () => {
      let details = {};

      try {
        setLoading(true);
        details = await getTodo(match.params.id);
      } catch (e) {
        setLoading(false);
        details = { title: 'Error', description: 'Failed to load details.' };
        console.error('Failed to retreive todo details', e);
      }

      setTodoDetails(details);
      setLoading(false);
    };

    fetchTodoDetails();
  }, [match.params.id]);

  return (
    <TodoDetailsContainer>
      {loading ? (
        <p data-testid="details-loading"> loading </p>
      ) : (
        <>
          <CloseLink to="/" />
          <h1 data-testid="details-title">{todoDetails.title}</h1>
          <p data-testid="details-description">{todoDetails.description}</p>
        </>
      )}
    </TodoDetailsContainer>
  );
};

TodoDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
export default TodoDetails;
