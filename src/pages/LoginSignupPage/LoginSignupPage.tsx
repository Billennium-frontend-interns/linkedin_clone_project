import React from 'react';
import GoogleIcon from '@material-ui/icons/Google';
import { Link, useHistory } from 'react-router-dom';
import { signInWithGooglePopup } from '../../actions/signInWithGooglePopup';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import './LoginSignupPage.scss';
import '../../shared/styles/formstyles.scss';
import { Logo } from '../../shared/components/Logo/Logo';

interface LoginSignupPageProps {
  isLoginPage: boolean;
}

export const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ isLoginPage }: LoginSignupPageProps) => {
  const history = useHistory();

  return (
    <main className="loginSignupPage__container">
      <span className="loginSignupPage__logo">
        <Logo variant={window.screen.width < 281 ? 'small' : 'medium'} />
      </span>
      <h1 className="loginSignupPage__signinText">{isLoginPage ? 'Sign in' : 'Sign up'}</h1>
      {isLoginPage ? <LoginForm /> : <SignupForm />}
      <button
        className="loginSignupPage__signInGoogleButton"
        type="button"
        aria-label="Sign in with Google"
        onClick={() => signInWithGooglePopup({ history })}
      >
        {' '}
        Sign in with Google <GoogleIcon className="google__icon" />
      </button>
      {isLoginPage ? (
        <h4 className="hint">
          Don&apos;t have an account?
          <Link to="/signUp" className="cta__button">
            Sign up!
          </Link>
        </h4>
      ) : (
        <h4 className="hint">
          Already have an account?{' '}
          <Link className="cta__button" to="/signIn">
            Sign in!
          </Link>
        </h4>
      )}
    </main>
  );
};
