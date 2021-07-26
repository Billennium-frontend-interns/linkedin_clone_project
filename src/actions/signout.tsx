import { auth } from '../firebase';

export const signout: () => void = () => {
  auth.signOut().catch(error => console.log(error.message));
};
