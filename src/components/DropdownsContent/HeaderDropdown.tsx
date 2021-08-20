import React, { useContext } from 'react';
import { Avatar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { signOut } from '../../actions/signOut';
import { useGetUserData } from '../../actions/useGetUserData';
import './HeaderDropdown.scss';

interface HeaderDropdownProps {
  testid?: string;
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ testid }) => {
  const currentUser = useContext(AuthContext);
  const { userData } = useGetUserData(currentUser?.uid as string);
  const history = useHistory();

  return (
    <ul className="headerDropdown" data-testid={testid}>
      <li className="headerDropdown__listItem">
        <Avatar src={userData?.avatar || ''} />
      </li>
      <li className="headerDropdown__listItem">
        <p className="headerDropdown__info">
          {userData?.displayName || 'User'}
          <span>{userData?.headline}</span>
        </p>
      </li>
      <li className="headerDropdown__listItem">
        <Button
          data-testid={`${testid}ViewProfile`}
          onClick={() => history.push(`/user/${userData?.id}`)}
          className="headerDropdown__button"
          variant="outlined"
          color="primary"
        >
          View Profile
        </Button>
      </li>
      <li className="headerDropdown__listItem">
        <Button
          onClick={() => signOut({ history })}
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
