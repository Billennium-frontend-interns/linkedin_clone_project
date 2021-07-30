import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';
import { UserFollows } from '../shared/interfaces/UserInterfaces';

interface GetUserFollows {
  userFollows: string[];
  isLoading: boolean;
  isError: boolean;
}

export const useGetUserFollows = (): GetUserFollows => {
  const currentUser = useContext(AuthContext);
  const [state, setState] = useState<GetUserFollows>({
    userFollows: [],
    isLoading: true,
    isError: false
  });

  const getUserFollows = async () => {
    try {
      const snapshot = await db.collection('follows').doc(currentUser?.uid).get();
      const { followed } = snapshot.data() as UserFollows;
      setState({ ...state, userFollows: followed, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserFollows();
  }, []);

  return state;
};
