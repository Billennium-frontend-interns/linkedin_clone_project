import { render, fireEvent, cleanup } from '@testing-library/react';
import { LoginForm } from './LoginForm';

afterEach(cleanup);

it('Inputing email should update email', () => {
  const utils = render(<LoginForm />);
  const emailInput = utils.getByTestId('email') as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'example email' } });

  expect(emailInput.value).toBe('example email');
});

it('Inputing password should update password', () => {
  const utils = render(<LoginForm />);
  const passwordInput = utils.getByTestId('password') as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: 'example password' } });

  expect(passwordInput.value).toBe('example password');
});

it("Clicking button with empty fields should display error Fields can't be empty", () => {
  const utils = render(<LoginForm />);
  const signInButton = utils.getByTestId('signin_button') as HTMLButtonElement;

  fireEvent.click(signInButton);

  const getPage = utils.getByText("Fields can't be empty") as HTMLBodyElement;

  expect(getPage).toBeTruthy();
});
