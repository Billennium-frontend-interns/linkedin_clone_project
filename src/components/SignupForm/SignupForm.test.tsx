import { render, fireEvent, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SignupForm } from './SignupForm';

afterEach(cleanup);
const history = createMemoryHistory();

it('Inputing text should update email', () => {
  const utils = render(
    <Router history={history}>
      <SignupForm />
    </Router>
  );
  const emailInput = utils.getByTestId('email') as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });

  expect(emailInput.value).toBe('example@mail.com');
});

it('Inputing text should update passsword', () => {
  const utils = render(
    <Router history={history}>
      <SignupForm />
    </Router>
  );
  const passwordInput = utils.getByTestId('password') as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: 'password1234' } });

  expect(passwordInput.value).toBe('password1234');
});

it('Inputing text should update repeat password', () => {
  const utils = render(
    <Router history={history}>
      <SignupForm />
    </Router>
  );
  const repeatPasswordInput = utils.getByTestId('repeatPassword') as HTMLInputElement;

  fireEvent.change(repeatPasswordInput, { target: { value: 'password1234' } });

  expect(repeatPasswordInput.value).toBe('password1234');
});

it('Inputing text should update nickname', () => {
  const utils = render(
    <Router history={history}>
      <SignupForm />
    </Router>
  );
  const nicknameInput = utils.getByTestId('name') as HTMLInputElement;

  fireEvent.change(nicknameInput, { target: { value: 'example nickname' } });

  expect(nicknameInput.value).toBe('example nickname');
});
