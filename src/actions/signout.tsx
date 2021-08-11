import { History, LocationState } from 'history';
import { auth } from '../firebase';
import { customToast } from './customToast';

interface signOutProps {
  history: History<LocationState>;
}

export const signOut = ({ history }: signOutProps): void => {
  auth
    .signOut()
    .then(() => {
      history.push('/');
      customToast('success', 'Successfully Sign Out');
    })
    .catch(() => customToast('error', 'There was a problem with Sign Out'));
};
