import React, { useContext, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import moment from 'moment';
import { NotificationContext } from '../../context/NotificationProvider';

export const Notifications: React.FC = () => {
  const notifications = useContext<any>(NotificationContext);

  const followingSince = moment.unix(notifications?.timestamp).fromNow();

  useEffect(() => {
    console.log(notifications);
    // DISPLAY ONLY {SEEN: FALSE} NOTIFICATIONS

    // SET SEEN PROPERTY IN DATABASE TO TRUE ->
    // -> TO EVERY DISPLAYED FOLLOW NOTIFICATION
  }, []);

  // SIGNOUT SHOULD USE NOTIFICATIONCONTEXT TO UNSUBSCRIBE TO LISTENER
  // EVERY HOT RELOAD OF APP WILL ATTACH NEW LISTENER
  // SO YOU NEED TO REFRESH PAGE AFTER EVERY HOT RELOAD
  return (
    <article className="notifications">
      <Avatar />
    </article>
  );
};
