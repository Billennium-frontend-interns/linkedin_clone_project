import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from '@material-ui/core';
import { followAction } from '../../actions/followAction';
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

  const handleClick = () => {
    if (!isFollowed) {
      followAction(id, 'follow');
    } else {
      followAction(id, 'unfollow');
    }
    setIsFollowed(!isFollowed);
  };

  return (
    <section className="userCard" data-testid={`${testid}${id}`}>
      <div className="userCard__info">
        <Avatar className="userCard__avatar" src={avatar} />
        <p>{displayName}</p>
      </div>
      <Button onClick={handleClick} variant="outlined" color="primary" className="userCard__button">
        {isFollowed ? 'Followed' : 'Follow'}
      </Button>
    </section>
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
