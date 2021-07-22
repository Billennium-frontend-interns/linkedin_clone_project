import { render, fireEvent, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SignupForm } from './SignupForm';

afterEach(cleanup);

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <SignupForm />
    </Router>
  );

  const emailInput = utils.getByTestId('email') as HTMLInputElement;
  const passwordInput = utils.getByTestId('password') as HTMLInputElement;
  const repeatPasswordInput = utils.getByTestId('repeatPassword') as HTMLInputElement;
  const nicknameInput = utils.getByTestId('name') as HTMLInputElement;
  const submitButton = utils.getByText('Register');

  return {
    utils,
    emailInput,
    passwordInput,
    repeatPasswordInput,
    nicknameInput,
    submitButton
  };
};

describe('Inputs should be updated', () => {
  it('Inputing text should update email', () => {
    const { emailInput } = setup();

    fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });

    expect(emailInput.value).toBe('example@mail.com');
  });

  it('Inputing text should update passsword', () => {
    const { passwordInput } = setup();

    fireEvent.change(passwordInput, { target: { value: 'password1234' } });

    expect(passwordInput.value).toBe('password1234');
  });

  it('Inputing text should update repeat password', () => {
    const { repeatPasswordInput } = setup();

    fireEvent.change(repeatPasswordInput, { target: { value: 'password1234' } });

    expect(repeatPasswordInput.value).toBe('password1234');
  });

  it('Inputing text should update nickname', () => {
    const { nicknameInput } = setup();

    fireEvent.change(nicknameInput, { target: { value: 'example nickname' } });

    expect(nicknameInput.value).toBe('example nickname');
  });
});

describe('Form validation', () => {
  it('should throws error if any field is empty', () => {
    const {
      utils: { getByText },
      nicknameInput,
      submitButton
    } = setup();

    fireEvent.change(nicknameInput, { target: { value: 'Jhon' } });
    fireEvent.click(submitButton);

    expect(getByText(`Fields can't be empty`)).toBeInTheDocument();
  });

  it('should throws error if nickname is less than 3 characters', () => {
    const {
      utils: { getByText },
      emailInput,
      passwordInput,
      repeatPasswordInput,
      nicknameInput,
      submitButton
    } = setup();

    fireEvent.change(emailInput, { target: { value: 'examplemail@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123456' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123456' } });
    fireEvent.change(nicknameInput, { target: { value: 'as' } });
    fireEvent.click(submitButton);

    expect(getByText('Nickname must be longer than 3 characters and shorter than 30 characters')).toBeInTheDocument();
  });

  it('should throws error if nickname is longer than 30 characters', () => {
    const {
      utils: { getByText },
      emailInput,
      passwordInput,
      repeatPasswordInput,
      nicknameInput,
      submitButton
    } = setup();

    fireEvent.change(emailInput, { target: { value: 'examplemail@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123456' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123456' } });
    fireEvent.change(nicknameInput, { target: { value: 'asasasasasasasasasasasasasasasasasasasasdfasdfasdf' } });
    fireEvent.click(submitButton);

    expect(getByText('Nickname must be longer than 3 characters and shorter than 30 characters')).toBeInTheDocument();
  });

  it('should throws error if password is shorter than 8 characters', () => {
    const {
      utils: { getByText },
      emailInput,
      passwordInput,
      repeatPasswordInput,
      nicknameInput,
      submitButton
    } = setup();

    fireEvent.change(emailInput, { target: { value: 'examplemail@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123456' } });
    fireEvent.change(nicknameInput, { target: { value: 'examplenickname' } });
    fireEvent.click(submitButton);

    expect(getByText('Password must be at least 8 characters')).toBeInTheDocument();
  });

  it(`should throws error if passwords don't match`, () => {
    const {
      utils: { getByText },
      emailInput,
      passwordInput,
      repeatPasswordInput,
      nicknameInput,
      submitButton
    } = setup();

    fireEvent.change(emailInput, { target: { value: 'examplemail@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password1234' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123456' } });
    fireEvent.change(nicknameInput, { target: { value: 'examplenickname' } });
    fireEvent.click(submitButton);

    expect(getByText('Passwords must match')).toBeInTheDocument();
  });
});
