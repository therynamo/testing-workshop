import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render, waitForElement } from 'react-testing-library';
import nock from 'nock';

import TodoDetails from '..';

const matchStub = {
  params: {
    id: '1234',
  },
};

describe('TodoDetails', () => {
  it('should render when fetchTodoDetails call fails', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <TodoDetails match={matchStub} />
      </BrowserRouter>,
    );

    const scope = nock('http://localhost:3010')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/details/1234')
      .replyWithError('ohno');

    await waitForElement(() => getByText('Error'));

    expect(getByTestId('details-title')).toHaveTextContent('Error');
    expect(getByTestId('details-description')).toHaveTextContent('Failed to load details.');
    expect(scope.isDone()).toEqual(true);
  });

  it('should render when fetchTodoDetails call succeeds', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <TodoDetails match={matchStub} />
      </BrowserRouter>,
    );

    const scope = nock('http://localhost:3010')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/details/1234')
      .reply(200, {
        title: 'asdf',
        description: 'no',
      });

    await waitForElement(() => getByText('asdf'));

    expect(getByTestId('details-title')).toHaveTextContent('asdf');
    expect(getByTestId('details-description')).toHaveTextContent('no');
    expect(scope.isDone()).toEqual(true);
  });
});
