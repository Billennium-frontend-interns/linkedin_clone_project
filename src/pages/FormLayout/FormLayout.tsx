import React, { ReactNode } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { signInWithGooglePopup } from '../../actions/signInWithGooglePopup';
import { Logo } from '../../shared/components/Logo/Logo';
import GoogleButtonImage from '../../assets/images/btn_google_signin_light_normal_web.png';
import { auth } from '../../firebase';
import './FormLayout.scss';
import '../../styles/FormStyles.scss';

interface FormLayoutProps {
  formComponent: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ formComponent }: FormLayoutProps) => {
  const history = useHistory();
  const { currentUser } = auth;

  if (currentUser) {
    return <Redirect to="/feed" />;
  }

  return (
    <main className="formLayout__container">
      <Logo variant={window.screen.width < 281 ? 'small' : 'medium'} />
      {formComponent}
      <button
        className="formLayout__signInGoogleButton"
        type="button"
        aria-label="Sign in with Google"
        onClick={() => signInWithGooglePopup({ history })}
      >
        <img src={GoogleButtonImage} alt="Sign in with google" />
      </button>
    </main>
  );
};
