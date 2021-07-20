import React from 'react';
import './LoginSignupPage.scss';
import '../../shared/styles/formstyles.scss';
import Logo from '../../shared/components/Logo/Logo';
import { SignupForm } from '../../components/SignupForm/SignupForm';

interface LoginSignupPageProps {
  isLoginPage: boolean;
}

export const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ isLoginPage }: LoginSignupPageProps) => (
  <div className="loginSignupPage__container">
    <span className="loginSignupPage__logo">
      <Logo variant="medium" />
    </span>
    <h1 className="loginSignupPage__signinText">{isLoginPage ? 'Sign in' : 'Sign up'}</h1>
    {isLoginPage ? '' : <SignupForm />}
    {isLoginPage ? (
      <h4>
        Don&apos;t have an account?{' '}
        <a href="/signup" className="cta__button">
          Sign up!
        </a>
      </h4>
    ) : (
      <h4>
        Already have an account?{' '}
        <a className="cta__button" href="/signin">
          Sign in!
        </a>
      </h4>
    )}
  </div>
);
