// import { History, LocationState } from 'history';
import { auth, provider } from '../firebase';

// interface SignInWithGoogle {
// history: History<LocationState>;
// }

// const signInWithGooglePopup = ({ history }: SignInWithGoogle) => when router implemented

export const signInWithGooglePopup = (): void => {
  auth
    .signInWithPopup(provider)
    .then(res => /* redirect */ console.log(res))
    .catch(error => console.error(error));
};
