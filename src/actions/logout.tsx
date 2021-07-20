import { History, LocationState } from 'history';
import { auth } from '../firebase';

const logout = (history: History<LocationState>) => {
  auth
    .signOut()
    .then(() => history.push('/'))
    .catch(error => console.log(error.message));
};

export { logout };
