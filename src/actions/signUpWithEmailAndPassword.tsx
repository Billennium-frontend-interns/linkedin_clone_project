import { History, LocationState } from 'history';
import { auth } from '../firebase';
import ErrorInterface from '../components/SignupForm/interfaces/ErrorInterface';

interface SignUpWithEmailAndPassword {
  email: string;
  password: string;
  name: string;
  history: History<LocationState>;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
}

export const signUpWithEmailAndPassword = async ({
  email,
  password,
  name,
  history,
  setError
}: SignUpWithEmailAndPassword): Promise<void> => {
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
