import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from 'react-testing-library';

import TodoList from '..';

describe('TodoList', () => {
  it('should show `add new card` when not provided any items', () => {
    const { getByTestId, queryByTestId } = render(
      <BrowserRouter>
        <TodoList />
      </BrowserRouter>,
    );

    const items = queryByTestId('list-card');

    expect(items).not.toBeInTheDocument();
    expect(getByTestId('add-new-card')).toMatchInlineSnapshot(`
      <button
        data-testid="add-new-card"
        type="button"
      >
        Add new card
      </button>
    `);
  });

  it('should show list cards when there are items', () => {
    const items = [
      {
        title: 'This is legit',
        description: 'Not really',
      },
    ];
    const { queryAllByTestId, getByTestId } = render(
      <BrowserRouter>
        <TodoList items={items} />
      </BrowserRouter>,
    );

    const listCards = queryAllByTestId('list-card');

    expect(listCards).toHaveLength(1);
    expect(getByTestId('list-card-title')).toHaveTextContent('This is legit');
  });

  it('should add new card when user submits', () => {
    const spyHandleCreateDetail = jest.fn();
    const items = [
      {
        title: 'This is legit',
        description: 'Not really',
      },
    ];
    const { getByText, queryAllByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <TodoList handleCreateDetails={spyHandleCreateDetail} items={items} />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Add new card'));

    expect(queryAllByTestId('list-form')).toHaveLength(1);

    fireEvent.change(getByPlaceholderText('title'), { target: { value: 'a' } });
    fireEvent.click(getByText('submit'));

    expect(spyHandleCreateDetail).toHaveBeenCalledWith({ title: 'a', description: '' });
  });
});
