// import { History, LocationState } from 'history';
import { auth } from '../firebase';
import { ErrorInterface } from '../shared/interfaces/FormInterfaces';

interface SignInWithPasswordAndEmail {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
  // history: History<LocationState>;
}

export const signInWithPasswordAndEmail = ({ email, password, setError }: SignInWithPasswordAndEmail): void => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => alert('push home')) //  redirect when router implemented
    .catch(error =>
      setError({
        isError: true,
        errorText: error.message
      })
    );
};

export default signInWithPasswordAndEmail;
