import { db } from '../firebase';

interface FeedPostProps {
  ownerUid: string | undefined | null;
  displayName: string | undefined | null;
  avatar?: string | undefined | null;
  content: string;
  timestamp: string;
}

export const setPost = async ({ ownerUid, content, avatar, timestamp, displayName }: FeedPostProps): Promise<void> => {
  db.collection('posts')
    .add({ ownerUid, content, avatar, timestamp, displayName })
    .then(data => console.log(data))
    .catch(error => console.log(error.message));
};
