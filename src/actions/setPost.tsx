import { db } from '../firebase';
import { customToast } from './customToast';

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
      .then(() => {
        customToast('default', 'Adding Post 🚀', false);
      });
  } catch (error) {
    customToast('error', 'There was a problem with Adding a Post');
  }
};
