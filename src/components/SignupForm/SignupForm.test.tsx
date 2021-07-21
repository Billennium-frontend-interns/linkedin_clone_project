import { render, fireEvent, cleanup } from '@testing-library/react';
import { SignupForm } from './SignupForm';

afterEach(cleanup);

it('Inputing text should update email', () => {
  const utils = render(<SignupForm />);
  const emailInput = utils.getByTestId('email') as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });

  expect(emailInput.value).toBe('example@mail.com');
});

it('Inputing text should update passsword', () => {
  const utils = render(<SignupForm />);
  const passwordInput = utils.getByTestId('password') as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: 'password1234' } });

  expect(passwordInput.value).toBe('password1234');
});

it('Inputing text should update repeat password', () => {
  const utils = render(<SignupForm />);
  const repeatPasswordInput = utils.getByTestId('repeatPassword') as HTMLInputElement;

  fireEvent.change(repeatPasswordInput, { target: { value: 'password1234' } });

  expect(repeatPasswordInput.value).toBe('password1234');
});

it('Inputing text should update nickname', () => {
  const utils = render(<SignupForm />);
  const nicknameInput = utils.getByTestId('name') as HTMLInputElement;

  fireEvent.change(nicknameInput, { target: { value: 'example nickname' } });

  expect(nicknameInput.value).toBe('example nickname');
});
