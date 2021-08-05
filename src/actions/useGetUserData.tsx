import { useState, useEffect } from 'react';
import { UserEditData } from './editProfile';
import { db } from '../firebase';

interface GetUserData {
  userData: UserEditData;
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
      setState({ ...state, isLoading: false, userData: userData as UserEditData });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return state;
};
