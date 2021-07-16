import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WelcomeBtn from './WelcomeBtn';
import './Welcome.scss';

const Welcome: React.FC = () => {
  const text = 'Linked';

  const handleSignIn = () => {
    console.log('sign in');
  };
  const handleSignUp = () => {
    console.log('sign up');
  };
  return (
    <div className="main-content">
      <div className="wrapper">
        <div className="wrapper__header">
          <span>{text}</span>
          <LinkedInIcon className="wrapper__header--icon" />
        </div>
        <h4>Welcome to your professional community</h4>
        <div className="wrapper__btns">
          <WelcomeBtn handleOnClick={handleSignIn} text="Sign in" />
          <WelcomeBtn handleOnClick={handleSignUp} text="Sign up" />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
