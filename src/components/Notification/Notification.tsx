import React, { useEffect } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useGetUserData } from '../../actions/useGetUserData';
import { db } from '../../firebase';
import { useDarkMode } from '../../context/DarkModeProvider';
import './Notification.scss';

interface NotificationProps {
  followerId: string;
  userId: string | undefined;
  timestamp: firebase.default.firestore.Timestamp;
}

export const Notification: React.FC<NotificationProps> = ({ userId, followerId, timestamp }: NotificationProps) => {
  const followingSince = moment.unix(timestamp.seconds).fromNow();
  const { userData } = useGetUserData(followerId);
  const { isDarkMode } = useDarkMode();

  useEffect(
    // eslint-disable-next-line
    () => (): any => db.collection('users').doc(userId).collection('followers').doc(followerId).update({ seen: true }),
    []
  );

  return (
    <Link
      className={classNames('notificationCard__link', { 'notificationCard__link--dark': isDarkMode })}
      to={`/user/${followerId}`}
    >
      <article className="notificationCard">
        <Avatar
          className="notificationCard__avatar"
          src={userData?.avatar}
          alt="user avatar"
          variant="rounded"
          style={{ height: '64px', width: '64px' }}
        />
        <div className="notificationCard__text">
          <strong>{userData?.displayName}</strong>
          <p className="notificationCard__action">followed you</p>
          <p className="notificationCard__timestamp">{followingSince}</p>
        </div>
      </article>
    </Link>
  );
};
