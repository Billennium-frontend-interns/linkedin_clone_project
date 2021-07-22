import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Welcome } from './Welcome';

it('welcome page contains sign in button', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Welcome />
    </Router>
  );
  const signInButton = getByText(/Sign in/);

  expect(signInButton).toBeTruthy();
});

it('sing in button redirects to sign in page', () => {
  ('');
});

it('renders sign up button correctly', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Welcome />
    </Router>
  );
  const signInButton = getByText(/Sign up/);

  expect(signInButton).toBeTruthy();
});

it('sing in button redirects to sign up page', () => {
  ('');
});
