import React, { ReactNode } from 'react';
import GoogleIcon from '@material-ui/icons/Google';
import { useHistory } from 'react-router-dom';
import { signInWithGooglePopup } from '../../actions/signInWithGooglePopup';
import { Logo } from '../../shared/components/Logo/Logo';
import './FormLayout.scss';
import '../../styles/FormStyles.scss';

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
