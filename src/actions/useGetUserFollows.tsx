import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthProvider';
import { StateAble } from '../components/FeedList/FeedListInterfaces';

export const useGetUserFollows = (): StateAble<string[]> => {
  const currentUser = useContext(AuthContext);
  const [state, setState] = useState<StateAble<string[]>>({
    data: [],
    isLoading: true,
    isError: false
  });

  const getUserFollows = async () => {
    try {
      const snapshot = await db.collection('follows').where('followId', '==', currentUser?.uid).get();
      const data = snapshot.docs.map(follow => follow.data().receiverId);
      setState({ ...state, data, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserFollows();
  }, []);

  return state;
};
