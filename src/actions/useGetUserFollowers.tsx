import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';

interface GetUserFollows {
  userFollowers: string[];
  isLoading: boolean;
  isError: boolean;
}

export const useGetUserFollowers = (): GetUserFollows => {
  const user = useContext(AuthContext);
  const [state, setState] = useState<GetUserFollows>({
    userFollowers: [],
    isLoading: true,
    isError: false
  });

  const getUserFollows = async () => {
    try {
      const snapshot = await db.collection('users').doc(user?.uid).collection('followers').get();
      const followedIds = snapshot.docs.map(followers => followers.id);
      setState({ ...state, userFollowers: followedIds, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };
  useEffect(() => {
    getUserFollows();
  }, []);

  return state;
};
