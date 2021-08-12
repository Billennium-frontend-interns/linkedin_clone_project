import React, { useContext } from 'react';
import { NotificationContext, NotificationsStateType } from '../../context/NotificationProvider';
import { AuthContext } from '../../context/AuthProvider';
import { Notification } from '../../components/Notification/Notification';

export const Notifications: React.FC = () => {
  const notifications = useContext<NotificationsStateType | undefined>(NotificationContext);
  const user = useContext(AuthContext);

  return (
    <article className="notifications">
      {notifications?.data.filter((data: firebase.default.firestore.DocumentData) => data.data().seen === false)
        .length === 0 ? (
        <p>No new notifications</p>
      ) : (
        notifications?.data.map(
          (data: firebase.default.firestore.DocumentData) =>
            !data.data().seen && (
              <Notification key={data.id} userId={user?.uid} followerId={data.id} timestamp={data.data().timestamp} />
            )
        )
      )}
    </article>
  );
};
