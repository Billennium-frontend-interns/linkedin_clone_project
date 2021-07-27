import React, { useContext } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { signout } from '../../actions/signout';

export const HeaderDropdown: React.FC = () => {
  const user = useContext(AuthContext);
  const history = useHistory();

  return (
    <ul>
      <li>
        <Avatar src={user?.photoURL || ''} />
      </li>
      <li>
        <p>{user?.displayName || 'User'}</p>
      </li>
      <li>
        <Button
          onClick={() => history.push('/myProfile')}
          className="dropdown__button"
          variant="outlined"
          color="primary"
        >
          View Profile
        </Button>
      </li>
      <li>
        <Button onClick={signout} className="dropdown__button" variant="outlined">
          Sign Out
        </Button>
      </li>
    </ul>
  );
};
