import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const history = useHistory();

const logout = () =>
  auth
    .signOut()
    .then(() => history.push('/'))
    .catch(error => alert(error.message));

export default logout;
