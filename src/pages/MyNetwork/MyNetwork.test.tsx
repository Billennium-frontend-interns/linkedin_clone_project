import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MyNetwork } from './MyNetwork';

afterEach(cleanup);

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <MyNetwork />
    </Router>
  );

  const myNetworkHeader = utils.getByTestId('myNetworkPageHeader');
  const followedUsersButton = utils.getByTestId('followedUsersButton');
  const recommendedUsersButton = utils.getByTestId('recommendedUsersButton');

  return {
    utils,
    myNetworkHeader,
    followedUsersButton,
    recommendedUsersButton
  };
};

describe('<MyNetwork />', () => {
  it('should header component be visible', async () => {
    const { myNetworkHeader } = setup();

    expect(myNetworkHeader).toBeInTheDocument();
  });

  it('should all buttons be visible', async () => {
    const { followedUsersButton, recommendedUsersButton } = setup();

    expect(followedUsersButton).toBeInTheDocument();
    expect(recommendedUsersButton).toBeInTheDocument();
  });

  it('should initially show recommended users', async () => {
    const { recommendedUsersButton } = setup();

    expect(recommendedUsersButton).toHaveClass('myNetwork__button--active');
  });

  it('should show followed users after clicking it', async () => {
    const { followedUsersButton } = setup();

    fireEvent.click(followedUsersButton);

    expect(followedUsersButton).toHaveClass('myNetwork__button--active');
  });

  it('should show recommended users after clicking it', async () => {
    const { followedUsersButton, recommendedUsersButton } = setup();

    fireEvent.click(followedUsersButton);
    fireEvent.click(recommendedUsersButton);

    expect(recommendedUsersButton).toHaveClass('myNetwork__button--active');
  });
});
