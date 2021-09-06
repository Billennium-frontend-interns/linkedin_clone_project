import { useState, useEffect } from 'react';
import { db } from '../firebase';

export const useIsUserFollowed = (currentUserId: string | undefined, pageUserId: string | undefined): boolean => {
  const [value, setValue] = useState(true);

  const getFollows = async () => {
    try {
      const follows = await db.collection('users').doc(currentUserId).collection('followers').doc(pageUserId).get();
      setValue(follows.exists);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };
  useEffect(() => {
    getFollows();
  }, [currentUserId, pageUserId]);

  return value;
};
