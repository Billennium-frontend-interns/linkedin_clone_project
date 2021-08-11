import React, { useContext, useEffect } from 'react';
import { NotificationContext } from '../../context/NotificationProvider';
import { AuthContext } from '../../context/AuthProvider';
import { Notification } from '../../components/Notification/Notification';

export const Notifications: React.FC = () => {
  const notifications = useContext<any>(NotificationContext);
  const user = useContext(AuthContext);

  useEffect(() => {
    console.log(notifications);
  }, []);

  return (
    <article className="notifications">
      {notifications?.data.filter((data: any) => data.data().seen === false).length === 0 ? (
        <p>No new notifications</p>
      ) : (
        notifications.data.map(
          (data: any) =>
            !data.data().seen && (
              <Notification userId={user?.uid} followerId={data.id} timestamp={data.data().timestamp} />
            )
        )
      )}
    </article>
  );
};
