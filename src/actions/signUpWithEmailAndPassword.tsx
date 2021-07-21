import { History, LocationState } from 'history';
import { auth } from '../firebase';
import { ErrorInterface } from '../components/SignupForm/interfaces/SignupFormInterfaces';

interface SignWithCredentailsInterface {
  email: string;
  password: string;
  name: string;
  history: History<LocationState>;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
}

export const signWithCredentails = async ({
  email,
  password,
  name,
  history,
  setError
}: SignWithCredentailsInterface): Promise<void> => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser?.updateProfile({
      displayName: name
    });
    history.push('/home');
  } catch (err) {
    setError({
      isError: true,
      errorText: err.message
    });
  }
};
