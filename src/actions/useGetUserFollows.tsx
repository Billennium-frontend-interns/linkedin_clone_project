import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';

interface GetUserFollows {
  userFollows: string[];
  isLoading: boolean;
  isError: boolean;
}

export const useGetUserFollows = (): GetUserFollows => {
  const user = useContext(AuthContext);
  const [state, setState] = useState<GetUserFollows>({
    userFollows: [],
    isLoading: true,
    isError: false
  });

  const getUserFollows = async () => {
    try {
      const snapshot = await db.collection('users').doc(user?.uid).collection('followed').get();
      const followedIds = snapshot.docs.map(followed => followed.id);
      setState({ ...state, userFollows: followedIds, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };
  useEffect(() => {
    getUserFollows();
  }, []);

  return state;
};
