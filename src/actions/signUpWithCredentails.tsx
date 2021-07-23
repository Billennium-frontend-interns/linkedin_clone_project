import { History, LocationState } from 'history';
import { auth, db } from '../firebase';
import { ErrorInterface, SignupCredentials } from '../shared/interfaces/FormInterfaces';

type SignUpWithCredentailsInterface = SignupCredentials & {
  history: History<LocationState>;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
};

export const signUpWithCredentails = async ({
  email,
  password,
  name,
  history,
  setError
}: SignUpWithCredentailsInterface): Promise<void> => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser?.updateProfile({
      displayName: name
    });
    await db.collection('users').doc(auth.currentUser?.uid).set({
      displayName: name,
      id: auth.currentUser?.uid
    });
    history.push('/home');
  } catch (err) {
    setError({
      isError: true,
      errorText: err.message
    });
  }
};
