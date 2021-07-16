import { auth, provider } from '../firebase';

export const signInWithPasswordAndEmail = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password).catch(error => error);
};

export const signInWithGoogle = async () => {
  await auth.signInWithPopup(provider).catch(error => error);
};
