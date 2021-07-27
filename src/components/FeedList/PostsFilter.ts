import { PostData } from './FeedListInterfaces';

export const postFilter = (follows: string[], posts: PostData[]): PostData[] =>
  posts.filter(post => follows.includes(post.ownerUid));
