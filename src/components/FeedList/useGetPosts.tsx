import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { StateAble } from './FeedListInterfaces';
import { FeedPostProps } from '../FeedPost/FeedPost';

export const useGetPosts = (): StateAble<FeedPostProps[]> => {
  const [state, setState] = useState<StateAble<FeedPostProps[]>>({
    data: [],
    isLoading: true,
    isError: false
  });

  const getPosts = async () => {
    try {
      const snapshot = await db.collection('posts').get();
      const data = snapshot.docs.map(post => ({ ...post.data(), testid: post.id })) as FeedPostProps[];
      setState({ ...state, data, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return state;
};
