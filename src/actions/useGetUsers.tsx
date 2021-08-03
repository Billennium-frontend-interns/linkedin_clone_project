import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { db } from '../firebase';
import { User } from '../shared/interfaces/UserInterfaces';

interface GetUser {
  users: User[];
  isLoading: boolean;
  isError: boolean;
}

export const useGetUsers = (): GetUser => {
  const [state, setState] = useState<GetUser>({
    users: [],
    isLoading: true,
    isError: false
  });
  const currentUser = useContext(AuthContext);

  const getUsers = async () => {
    try {
      const snapshot = await db.collection('users').orderBy('displayName', 'asc').get();
      const users = snapshot.docs.map(user => user.data()).filter(user => user.id !== currentUser?.uid) as User[];
      setState({ ...state, users, isLoading: false });
    } catch (error) {
      setState({ ...state, isLoading: false, isError: true });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return state;
};
