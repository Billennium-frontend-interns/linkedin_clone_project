import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Welcome } from './Welcome';
import App from '../../App';

it('renders welcome text correctly', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Welcome />
    </Router>
  );
  expect(getByText('Welcome to your professional community')).toBeInTheDocument();
});
it('renders sign in button correctly', () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Welcome />
    </Router>
  );
  expect(getByTestId('signIn')).toBeInTheDocument();
});
it('handleSignIn', async () => {
  const history = createMemoryHistory();
  history.push('/welcome');
  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  // const button = getByTestId('signIn');
  // fireEvent.click(button)
  // expect(helloText).toBeInTheDocument()
});
