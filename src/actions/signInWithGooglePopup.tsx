import { History, LocationState } from 'history';
import { auth, provider } from '../firebase';

interface SignInWithGoogle {
  history: History<LocationState>;
}

export const signInWithGooglePopup = ({ history }: SignInWithGoogle): void => {
  auth
    .signInWithPopup(provider)
    .then(() => history.push('/feed'))
    .catch(error => console.error(error));
};
