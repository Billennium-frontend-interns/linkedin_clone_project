import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import AvatarPlaceholder from '../../assets/images/avatar_placeholder.png';
import { followAction } from '../../actions/followAction';
import './UserDetails.scss';

interface UserDetailsProps {
  ownerUid: string;
  displayName: string;
  bio?: string;
  avatar: string;
  isMyUserDetails: boolean;
  isUserFollowedBy: boolean;
  isUserFollowing: boolean;
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  ownerUid,
  displayName,
  bio,
  avatar,
  isMyUserDetails,
  isUserFollowedBy,
  isUserFollowing
}: UserDetailsProps) => {
  const [isFollowing, setIsFollowing] = useState(isUserFollowing);

  const handleClick = (action: 'follow' | 'unfollow') => {
    followAction(ownerUid, action);
    setIsFollowing(!isFollowing);
  };

  const followButtonHandler = () => {
    if (isFollowing) {
      return (
        <Button variant="outlined" color="primary" onClick={() => handleClick('unfollow')}>
          Unfollow
        </Button>
      );
    }
    if (isUserFollowedBy && !isFollowing) {
      return (
        <Button variant="outlined" color="primary" onClick={() => handleClick('follow')}>
          Follow back
        </Button>
      );
    }
    return (
      <Button variant="outlined" color="primary" onClick={() => handleClick('follow')}>
        Follow
      </Button>
    );
  };

  return (
    <section className="userDetails">
      <img
        className="userDetails__avatar"
        src={avatar || AvatarPlaceholder}
        alt="User Avatar"
        width="164px"
        height="164px"
      />
      <span className="userDetails__info">
        <p className="userDetails__name">
          {displayName}{' '}
          {isMyUserDetails && (
            <span aria-label="editButton" className="userDetails__edit">
              <Button>
                <EditIcon />
              </Button>
            </span>
          )}
        </p>
        {isUserFollowedBy && (
          <p className="userDetails__flare">
            <CheckCircleIcon fontSize="inherit" /> User is following you
          </p>
        )}
        {!isMyUserDetails && <span className="userDetails__followButton">{followButtonHandler()}</span>}
        <span className="userDetails__bio">{bio}</span>
      </span>
    </section>
  );
};

UserDetails.defaultProps = {
  bio: ''
};
