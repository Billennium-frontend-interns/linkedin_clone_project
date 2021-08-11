import { History, LocationState } from 'history';
import { auth, provider } from '../firebase';
import { customToast } from './customToast';

interface SignInWithGoogle {
  history: History<LocationState>;
}

export const signInWithGooglePopup = ({ history }: SignInWithGoogle): void => {
  auth.signInWithPopup(provider).then(() => {
    history.push('/feed');
    customToast('success', 'Successfully Sign In with Google');
  });
};
