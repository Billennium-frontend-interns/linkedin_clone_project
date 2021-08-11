import React, { useEffect } from 'react';
import moment from 'moment';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useGetUserData } from '../../actions/useGetUserData';
import './Notification.scss';
import { db } from '../../firebase';

interface NotificationProps {
  followerId: string;
  userId: string | undefined;
  timestamp: firebase.default.firestore.Timestamp;
}

export const Notification: React.FC<NotificationProps> = ({ userId, followerId, timestamp }: NotificationProps) => {
  const followingSince = moment.unix(timestamp.seconds).fromNow();
  const { userData } = useGetUserData(followerId);

  useEffect(
    () => (): any => db.collection('users').doc(userId).collection('followers').doc(followerId).update({ seen: true }),
    []
  );

  return (
    <article className="notificationCard">
      <Avatar className="notificationCard__avatar" src={userData?.avatar} alt="user avatar" variant="circular" />
      <p className="notificationCard__text">
        <strong>
          <Link className="notificationCard__link" to={`user/${followerId}`}>
            {userData?.displayName}
          </Link>
        </strong>
        followed you {followingSince}
      </p>
    </article>
  );
};
