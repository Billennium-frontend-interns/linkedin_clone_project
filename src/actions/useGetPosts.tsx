import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { FeedPostProps } from '../components/FeedPost/FeedPost';

interface GetPosts {
  allPosts: FeedPostProps[];
  isLoading: boolean;
  isError: boolean;
}

export const useGetPosts = (): GetPosts => {
  const [state, setState] = useState<GetPosts>({
    allPosts: [],
    isLoading: true,
    isError: false
  });

  const getPosts = async () => {
    try {
      const snapshot = await db.collection('posts').orderBy('timestamp', 'desc').get();
      const allPosts = snapshot.docs.map(post => ({ ...post.data(), testid: post.id })) as FeedPostProps[];
      setState({ ...state, allPosts, isLoading: false });
    } catch (error) {
      setState({ ...state, isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return state;
};
