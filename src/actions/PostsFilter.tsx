import { FeedPostProps } from '../components/FeedPost/FeedPost';

export const postsFilter = (follows: string[], posts: FeedPostProps[]): FeedPostProps[] =>
  posts.filter(post => follows.includes(post.ownerUid));
