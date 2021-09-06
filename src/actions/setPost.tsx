import * as firebase from 'firebase';
import { db } from '../firebase';
import { customToast } from './customToast';

interface SetPostProps {
  ownerUid: string;
  displayName: string;
  avatar?: string;
  content: string;
}

export const setPost = ({ ownerUid, content, avatar, displayName }: SetPostProps): void => {
  try {
    db.collection('posts')
      .add({
        ownerUid,
        content,
        avatar,
        timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
        displayName
      })
      .then(() => {
        customToast('success', 'Post successfully added', false);
      });
  } catch (error) {
    customToast('error', 'There was a problem with Adding a Post');
  }
};
