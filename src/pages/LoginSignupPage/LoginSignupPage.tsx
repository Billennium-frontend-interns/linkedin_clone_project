import React from 'react';
import GoogleIcon from '@material-ui/icons/Google';
import { signInWithGooglePopup } from '../../actions/signInWithGooglePopup';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import './LoginSignupPage.scss';
import '../../shared/styles/formstyles.scss';
import { Logo } from '../../shared/components/Logo/Logo';

interface LoginSignupPageProps {
  isLoginPage: boolean;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ isLoginPage }: LoginSignupPageProps) => (
  <div className="loginSignupPage__container">
    <span className="loginSignupPage__logo">
      <Logo variant="medium" />
    </span>
    <h1 className="loginSignupPage__signinText">{isLoginPage ? 'Sign in' : 'Sign up'}</h1>
    {isLoginPage ? <LoginForm /> : <SignupForm />}
    <button
      className="loginSignupPage__signInGoogleButton"
      type="button"
      aria-label="Sign in with Google"
      onClick={() => signInWithGooglePopup()}
    >
      {' '}
      Sign in with Google <GoogleIcon className="google__icon" />
    </button>
    {isLoginPage ? (
      <h4>
        Don&apos;t have an account?
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

export default LoginSignupPage;
