import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Avatar, Button, Grow } from '@material-ui/core';
import { followAction } from '../../actions/followAction';
import { useDarkMode } from '../../context/DarkModeProvider';
import './UserCard.scss';

interface UserCardProps {
  avatar?: string;
  displayName: string;
  followed?: boolean;
  id: string;
  testid?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ avatar, displayName, followed, id, testid }) => {
  const [isFollowed, setIsFollowed] = useState(followed);
  const { isDarkMode } = useDarkMode();

  const handleClick = () => {
    if (!isFollowed) {
      followAction(id, displayName, 'follow');
    } else {
      followAction(id, displayName, 'unfollow');
    }
    setIsFollowed(!isFollowed);
  };

  return (
    <Grow in timeout={500}>
      <section className={classNames('userCard', { 'userCard--dark': isDarkMode })} data-testid={`${testid}${id}`}>
        <Link className="userCard__info" data-testid={`"userCard__displayName--${testid}`} to={`/user/${id}`}>
          <Avatar className="userCard__avatar" src={avatar} />
          <p className={classNames('userCard__displayName', { 'userCard__displayName--dark': isDarkMode })}>
            {displayName}
          </p>
        </Link>
        <Button
          onClick={handleClick}
          variant={isFollowed ? 'contained' : 'outlined'}
          color="primary"
          className="userCard__button"
        >
          {isFollowed ? 'Followed' : 'Follow'}
        </Button>
      </section>
    </Grow>
  );
};

UserCard.defaultProps = {
  avatar: '',
  followed: false,
  testid: undefined
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  followed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  testid: PropTypes.string
};
