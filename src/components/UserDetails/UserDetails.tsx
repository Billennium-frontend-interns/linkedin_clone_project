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
    followAction(ownerUid, displayName, action);
    setIsFollowing(!isFollowing);
  };

  const followButtonHandler = () => {
    const action = isFollowing ? 'unfollow' : 'follow';
    const text = isUserFollowedBy ? 'follow back' : 'follow';

    return (
      <button type="button" className="userDetails__followButton" onClick={() => handleClick(action)}>
        {isFollowing ? 'unfollow' : text}
      </button>
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
      <div className="userDetails__info">
        <header className="userDetails__name">
          {displayName}{' '}
          {isMyUserDetails ? (
            <span aria-label="editButton" className="userDetails__edit">
              <Button>
                <EditIcon />
              </Button>
            </span>
          ) : (
            followButtonHandler()
          )}
        </header>
        {isUserFollowedBy && (
          <p className="userDetails__flare">
            <CheckCircleIcon fontSize="inherit" /> User is following you
          </p>
        )}
        <p className="userDetails__bio">{bio}</p>
      </div>
    </section>
  );
};

UserDetails.defaultProps = {
  bio: ''
};
