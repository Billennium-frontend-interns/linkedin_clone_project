import { History, LocationState } from 'history';
import { auth } from '../firebase';
import { ErrorInterface } from '../shared/interfaces/FormInterfaces';

interface signInWithCredentials {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
  history: History<LocationState>;
}

// eslint-disable-next-line
export const signInWithCredentials = ({ email, password, setError, history }: signInWithCredentials): void => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => history.push('/feed'))
    .catch(error =>
      setError({
        isError: true,
        errorText: error.message
      })
    );
};
