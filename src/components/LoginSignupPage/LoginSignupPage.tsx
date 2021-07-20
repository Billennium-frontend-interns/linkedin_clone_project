import React, { useState } from 'react';
import '../LoginPage/LoginPage.scss';
import '../../shared/styles/formstyles.scss';
import { Button, TextField } from '@material-ui/core';
import Logo from '../../shared/components/Logo/Logo';

interface LoginSignupPageProps {
  isLoginPage: boolean;
  form: React.ReactElement;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ isLoginPage, form }: LoginSignupPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="loginSignupPage__container">
      <span className="loginSignupPage__logo">
        <Logo variant="medium" />
      </span>
      <h1 className="loginSignupPage__signinText">{isLoginPage ? 'Sign in' : 'Sign up'}</h1>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <TextField className="form__input" label="E-mail" onChange={event => setEmail(event.target.value)} />
        <TextField
          className="form__input"
          label="Password"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />
        <Button className="form__submit" variant="contained" color="primary">
          Sign in
        </Button>
      </form>
      {isLoginPage ? (
        <h4>
          Don&apos;t have an account?{' '}
          <a href="http://localhost:3000/signup" className="cta__button">
            Sign up!
          </a>
        </h4>
      ) : (
        <h4>
          Already have an account?{' '}
          <a className="cta__button" href="http://localhost:3000/signin">
            Sign in!
          </a>
        </h4>
      )}
    </div>
  );
};

export default LoginSignupPage;
