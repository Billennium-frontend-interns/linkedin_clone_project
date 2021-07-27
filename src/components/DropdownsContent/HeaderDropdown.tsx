import React, { useContext } from 'react';
import { Avatar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { signout } from '../../actions/signout';

interface HeaderDropdownProps {
  testid?: string;
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ testid }) => {
  const user = useContext(AuthContext);
  const history = useHistory();

  return (
    <ul data-testid={testid}>
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

HeaderDropdown.defaultProps = {
  testid: undefined
};

HeaderDropdown.propTypes = {
  testid: PropTypes.string
};
