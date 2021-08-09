import React, { useState } from 'react';

interface NotificationProps {
  uid: string;
  timestamp: firebase.default.firestore.Timestamp;
}

export const Notification: React.FC<NotificationProps> = ({ uid, timestamp }: NotificationProps) => {
  const [userData, setUserData] = useState<any>();

  return (
    <div>
      a{uid}
      {timestamp}
    </div>
  );
};
