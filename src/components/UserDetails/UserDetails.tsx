import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import AvatarPlaceholder from '../../assets/images/avatar_placeholder.png';
import { EditProfile } from '../EditProfile/EditProfile';
import { followAction } from '../../actions/followAction';
import { useDarkMode } from '../../context/DarkModeProvider';
import './UserDetails.scss';

interface UserDetailsProps {
  ownerUid: string;
  displayName: string;
  headline?: string;
  avatar: string;
  isMyUserDetails: boolean;
  isUserFollowedBy: boolean;
  isUserFollowing: boolean;
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  ownerUid,
  displayName,
  headline,
  avatar,
  isMyUserDetails,
  isUserFollowedBy,
  isUserFollowing
}: UserDetailsProps) => {
  const [isFollowing, setIsFollowing] = useState(isUserFollowing);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

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
    <section className={classNames('userDetails', { 'userDetails--dark': isDarkMode })}>
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
              <Button
                onClick={() => {
                  setIsEditModalOpen(true);
                }}
              >
                <EditIcon className={classNames('userDetails__icon', { 'userDetails__icon--dark': isDarkMode })} />
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
        <p className="userDetails__bio">{headline}</p>
      </div>
      <EditProfile isOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen} />
    </section>
  );
};

UserDetails.defaultProps = {
  headline: ''
};
