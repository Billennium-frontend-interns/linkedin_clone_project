import { useState, useEffect } from 'react';
import { User } from '../shared/interfaces/UserInterfaces';
import { db } from '../firebase';

interface GetUserData {
  userData: User;
  isLoading: boolean;
  isError: boolean;
}

export const useGetUserData = (userUid: string): GetUserData => {
  const [state, setState] = useState<GetUserData>({
    userData: {
      displayName: '',
      headline: '',
      avatar: '',
      id: ''
    },
    isLoading: true,
    isError: false
  });

  const getUserData = async () => {
    try {
      const userData = (await db.collection('users').doc(userUid).get()).data();
      setState({ ...state, isLoading: false, userData: userData as User });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return state;
};
