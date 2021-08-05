import { History, LocationState } from 'history';
import { auth } from '../firebase';
import { ErrorInterface } from '../shared/interfaces/FormInterfaces';
import { customToast } from './customToast';

interface signInWithCredentials {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
  history: History<LocationState>;
}

// eslint-disable-next-line
export const signInWithCredentials = ({ email, password, setError, history }: signInWithCredentials): Promise<void> =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      history.push('/feed');
      customToast('success', 'Successfully Sign In');
    })
    .catch(error =>
      setError({
        isError: true,
        errorText: error.message
      })
    );
