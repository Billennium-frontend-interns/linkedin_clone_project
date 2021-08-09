import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Feed } from './Feed';

afterEach(cleanup);

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <Feed />
    </Router>
  );

  const feedHeader = utils.getByTestId('feedPageHeader');
  const createPost = utils.getByTestId('createPost');
  const feedList = utils.getByTestId('feedList');

  return {
    utils,
    feedHeader,
    createPost,
    feedList
  };
};

describe('<Feed />', () => {
  it('should header component be visible', async () => {
    const { feedHeader } = setup();

    expect(feedHeader).toBeInTheDocument();
  });

  it('should createPost component be visible', async () => {
    const { createPost } = setup();

    expect(createPost).toBeInTheDocument();
  });

  it('should feedList component be visible', async () => {
    const { feedList } = setup();

    expect(feedList).toBeInTheDocument();
  });
});
