import { PostData } from './FeedListInterfaces';

export const filterItems = (follows: string[], posts: PostData[]): PostData[] =>
  posts.filter(post => follows.includes(post.ownerUid));
