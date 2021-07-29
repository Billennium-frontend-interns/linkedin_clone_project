import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';

interface GetUserFollows {
  data: string[];
  isLoading: boolean;
  isError: boolean;
}

interface UserFollows {
  followed: string[];
}

export const useGetUserFollows = (): GetUserFollows => {
  const currentUser = useContext(AuthContext);
  const [state, setState] = useState<GetUserFollows>({
    data: [],
    isLoading: true,
    isError: false
  });

  const getUserFollows = async () => {
    try {
      const snapshot = await db.collection('follows').doc(currentUser?.uid).get();
      const { followed } = snapshot.data() as UserFollows;
      setState({ ...state, data: followed, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserFollows();
  }, []);

  return state;
};
