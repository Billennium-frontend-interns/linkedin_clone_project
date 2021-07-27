import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { StateAble, PostData } from './FeedListInterfaces';

export const useGetPosts = (): StateAble<PostData[]> => {
  const [state, setState] = useState<StateAble<PostData[]>>({
    data: [],
    isLoading: true,
    isError: false
  });

  const getPosts = async () => {
    try {
      const snapshot = await db.collection('posts').get();
      const data = snapshot.docs.map(post => ({ ...post.data(), id: post.id })) as PostData[];
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
