import React, { useEffect, useState } from 'react';
import fetch from 'unfetch';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import TodoDetails from './components/TodoDetails';
import TodoListContainer from './components/TodoList';
import createTodo from './actions/createTodo';

import { AppContainer } from './styles';

const TodoList = withRouter(props => <TodoListContainer {...props} />);

const AppRouter = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateDetails = async (details) => {
    let todo = null;

    try {
      todo = await createTodo(details);
    } catch (e) {
      console.error('unable to add todo');
      return;
    }

    setTodos([...todos, todo]);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      let items = [];

      try {
        const res = await fetch('http://localhost:3010');
        items = await res.json();
      } catch (e) {
        console.error(e);
      }

      setTodos(items);
    };

    fetchTodos();
    setLoading(false);
  }, [loading]);

  return (
    <Router>
      <AppContainer>
        <TodoList
          refreshTodos={setLoading}
          items={todos}
          handleCreateDetails={handleCreateDetails}
        />
        <Route path="/:id" component={TodoDetails} />
      </AppContainer>
    </Router>
  );
};

export default AppRouter;
