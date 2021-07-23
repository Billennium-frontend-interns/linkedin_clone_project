import { render, fireEvent, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { LoginForm } from './LoginForm';

afterEach(cleanup);

const history = createMemoryHistory();

it('Inputing email should update email', () => {
  const utils = render(
    <Router history={history}>
      <LoginForm />
    </Router>
  );
  const emailInput = utils.getByTestId('email') as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'example email' } });

  expect(emailInput.value).toBe('example email');
});

it('Inputing password should update password', () => {
  const utils = render(
    <Router history={history}>
      <LoginForm />
    </Router>
  );
  const passwordInput = utils.getByTestId('password') as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: 'example password' } });

  expect(passwordInput.value).toBe('example password');
});

it("Clicking button with empty fields should display error 'Fields can't be empty' message", () => {
  const utils = render(
    <Router history={history}>
      <LoginForm />
    </Router>
  );

  const signInButton = utils.getByTestId('signin_button') as HTMLButtonElement;

  fireEvent.click(signInButton);

  const getPage = utils.getByText("Fields can't be empty") as HTMLBodyElement;
  expect(getPage).toBeTruthy();
});
