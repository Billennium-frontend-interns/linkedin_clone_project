import { db } from '../firebase';

interface FeedPostProps {
  ownerUid: string;
  displayName: string;
  avatar?: string;
  content: string;
  timestamp: string;
}

export const setPost = ({ ownerUid, content, avatar, timestamp, displayName }: FeedPostProps): void => {
  try {
    db.collection('posts')
      .add({ ownerUid, content, avatar, timestamp, displayName })
      .then(post => post);
  } catch (error) {
    console.log(error.message);
  }
};
