import { auth } from '../firebase';

export const signout: () => void = () => {
  // eslint-disable-next-line
  auth.signOut().catch(error => console.log(error.message));
};
