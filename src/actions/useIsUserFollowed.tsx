import { useState, useEffect } from 'react';
import { db } from '../firebase';

export const useIsUserFollowed = (currentUserId: string | undefined, pageUserId: string | undefined): boolean => {
  const [value, setValue] = useState(true);

  const getFollows = async () => {
    try {
      const follows = await db.collection('follows').doc(currentUserId).get();
      setValue(follows.data()?.followers.includes(pageUserId));
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
