import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { UserPageFieldInterface, fields } from '../shared/interfaces/ProfileFieldInterfaces';

export const useGetUserProfileFields = (ownerUid: string): UserPageFieldInterface<fields[]> => {
  const [state, setState] = useState<UserPageFieldInterface<fields[]>>();
  const getUserProfileFields = async () => {
    try {
      const snapshot = await db.collection('users').doc(ownerUid).get();
      const fieldsData = snapshot.data()?.profileFields as fields[];
      setState({ data: fieldsData, isLoading: false, isError: false });
    } catch (error) {
      setState({ data: [], isLoading: false, isError: true });
    }
  };

  useEffect(() => {
    getUserProfileFields();
  });

  return state ?? { data: [], isLoading: true, isError: false };
};
