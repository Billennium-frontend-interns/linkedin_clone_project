import { useState, useEffect } from 'react';
import { UserData } from '../shared/interfaces/UserInterfaces';
import { db } from '../firebase';

interface GetUserData {
  userData: UserData;
  isLoading: boolean;
  isError: boolean;
}

export const useGetUserData = (userUid: string): GetUserData => {
  const [state, setState] = useState<GetUserData>({
    userData: {
      displayName: '',
      bio: ''
    },
    isLoading: true,
    isError: false
  });

  const getUserData = async () => {
    try {
      const userData = (await db.collection('users').doc(userUid).get()).data();
      setState({ ...state, isLoading: false, userData: userData as UserData });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return state;
};
