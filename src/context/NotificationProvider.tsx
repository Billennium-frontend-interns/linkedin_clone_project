import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';
import { AuthContext } from './AuthProvider';

export type NotificationsStateType = {
  data: firebase.default.firestore.DocumentData[];
  unsubscriber: () => unknown;
};

interface INotifications {
  children: JSX.Element | JSX.Element[];
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
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .collection('followers')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setChanges({ data: snapshot.docs, unsubscriber: unsubscribe });
        });
    }
  }, [user]);

  return <NotificationContext.Provider value={changes}>{children}</NotificationContext.Provider>;
};

NotificationsProvider.propTypes = {
  children: PropTypes.element.isRequired
};
