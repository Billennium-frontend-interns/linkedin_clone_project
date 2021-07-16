import { History, LocationState } from 'history';
import { auth, provider } from '../firebase';

interface SignInWithGoogle {
  history: History<LocationState>;
}

const signInWithGooglePopup = ({ history }: SignInWithGoogle) => {
  auth
    .signInWithPopup(provider)
    .then(() => history.push('/home'))
    .catch(error => error);
};

export default signInWithGooglePopup;
