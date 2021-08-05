import { History, LocationState } from 'history';
import { auth, db } from '../firebase';
import { ErrorInterface, SignupCredentials } from '../shared/interfaces/FormInterfaces';
import { customToast } from './customToast';

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
    await db.collection('follows').doc(auth.currentUser?.uid).set({
      followed: [],
      followers: []
    });
    history.push('/feed');
    customToast('success', 'Successfully Sign Up');
  } catch (err) {
    setError({
      isError: true,
      errorText: err.message
    });
  }
};
