import { History, LocationState } from 'history';
import { auth, provider } from '../firebase';

interface SignInWithPwdEmailProps {
  email: string;
  password: string;
  history: History<LocationState>;
}
interface SignInWithGoogle {
  history: History<LocationState>;
}

export const signInWithPasswordAndEmail = ({ email, password, history }: SignInWithPwdEmailProps) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => history.push('/home'))
    .catch(error => error);
};

export const signInWithGoogle = ({ history }: SignInWithGoogle) => {
  auth
    .signInWithPopup(provider)
    .then(() => history.push('/home'))
    .catch(error => error);
};
