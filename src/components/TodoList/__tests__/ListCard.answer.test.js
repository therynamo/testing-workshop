import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from 'react-testing-library';

import ListCard from '../ListCard';

const historyStub = {
  replace: jest.fn(),
};

describe('ListCard', () => {
  it('should have an empty title when item data is not provided', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ListCard />
      </BrowserRouter>,
    );

    expect(getByTestId('list-card-title')).toHaveTextContent('');
  });

  it('should delete list item when `x` is clicked', async () => {
    const spyRefreshTodos = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <ListCard id="1234" history={historyStub} title="fun" refreshTodos={spyRefreshTodos} />
      </BrowserRouter>,
    );

    expect(getByTestId('list-card-title')).toHaveTextContent('fun');

    fireEvent.click(getByTestId('list-card-delete'));

    expect(spyRefreshTodos).toHaveBeenCalledWith(true);
    expect(historyStub.replace).toHaveBeenCalledWith('/');
  });
});
