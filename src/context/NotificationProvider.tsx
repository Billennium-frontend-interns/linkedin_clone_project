import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';
import { AuthContext } from './AuthProvider';
import { FollowType } from '../shared/interfaces/UserInterfaces';

type NotificationsStateType = {
  data: FollowType[];
  unsubscriber: any;
};

interface INotifications {
  children: JSX.Element;
}

export const NotificationContext = createContext<NotificationsStateType | undefined>({
  data: [],
  unsubscriber: () => {
    throw new Error('unsubscriber must be overriden');
  }
});

export const NotificationsProvider: React.FC<INotifications> = ({ children }) => {
  const [changes, setChanges] = useState<NotificationsStateType>({
    data: [],
    unsubscriber: () => {
      throw new Error('unsubscriber must be overriden');
    }
  });
  const user = useContext(AuthContext);

  useEffect(() => {
    if (user && user.uid) {
      const followerData: FollowType[] = [];
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .collection('followers')
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              followerData.push({
                uid: change.doc.id,
                seen: change.doc.data().seen,
                timestamp: change.doc.data().timestamp
              });
            }
          });
          setChanges({ data: [...changes.data, ...followerData], unsubscriber: unsubscribe });
        });
    }
  }, [user]);
  return <NotificationContext.Provider value={changes}>{children}</NotificationContext.Provider>;
};

NotificationsProvider.propTypes = {
  children: PropTypes.element.isRequired
};
