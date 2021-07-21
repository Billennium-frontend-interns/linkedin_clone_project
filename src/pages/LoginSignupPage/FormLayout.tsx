import React, { ReactNode } from 'react';
import GoogleIcon from '@material-ui/icons/Google';
import { useHistory } from 'react-router-dom';
import { signInWithGooglePopup } from '../../actions/signInWithGooglePopup';
import './FormLayout.scss';
import '../../shared/styles/formstyles.scss';
import { Logo } from '../../shared/components/Logo/Logo';

interface FormLayoutProps {
  formComponent: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ formComponent }: FormLayoutProps) => {
  const history = useHistory();

  return (
    <main className="FormLayout__container">
      <Logo variant={window.screen.width < 281 ? 'small' : 'medium'} />
      {formComponent}
      <button
        className="FormLayout__signInGoogleButton"
        type="button"
        aria-label="Sign in with Google"
        onClick={() => signInWithGooglePopup({ history })}
      >
        {' '}
        Sign in with Google <GoogleIcon className="google__icon" />
      </button>
    </main>
  );
};
