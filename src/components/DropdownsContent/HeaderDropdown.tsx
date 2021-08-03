import React, { useContext } from 'react';
import { Avatar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { signout } from '../../actions/signout';
import './HeaderDropdown.scss';

interface HeaderDropdownProps {
  testid?: string;
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ testid }) => {
  const user = useContext(AuthContext);
  const history = useHistory();

  return (
    <ul className="headerDropdown" data-testid={testid}>
      <li className="headerDropdown__listItem">
        <Avatar src={user?.photoURL || ''} />
      </li>
      <li className="headerDropdown__listItem">
        <p>{user?.displayName || 'User'}</p>
      </li>
      <li className="headerDropdown__listItem">
        <Button
          data-testid={`${testid}ViewProfile`}
          onClick={() => history.push(`/user/${user?.uid}`)}
          className="headerDropdown__button"
          variant="outlined"
          color="primary"
        >
          View Profile
        </Button>
      </li>
      <li className="headerDropdown__listItem">
        <Button
          onClick={signout}
          data-testid={`${testid}SignOut`}
          className="headerDropdown__button"
          variant="outlined"
        >
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
