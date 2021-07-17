import { History, LocationState } from 'history';
import { auth } from '../firebase';

interface SignInWithPasswordAndEmail {
  email: string;
  password: string;
  history: History<LocationState>;
}

const signInWithPasswordAndEmail = ({ email, password, history }: SignInWithPasswordAndEmail) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => history.push('/home'))
    .catch(error => console.log(error));
};

export default signInWithPasswordAndEmail;
