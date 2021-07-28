import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';
import { StateAble } from '../shared/interfaces/StateAbleInterface';

interface UserFollows {
  followed: string[];
}

export const useGetUserFollows = (): StateAble<string[]> => {
  const currentUser = useContext(AuthContext);
  const [state, setState] = useState<StateAble<string[]>>({
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
