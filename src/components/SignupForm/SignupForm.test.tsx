import { render, fireEvent, cleanup } from '@testing-library/react';
import { SignupForm } from './SignupForm';

afterEach(cleanup);

it('Inputing text should update email', () => {
  const utils = render(<SignupForm />);
  const emailInput = utils.getByTestId('email') as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });
  expect(emailInput.value).toBe('example@mail.com');
});
