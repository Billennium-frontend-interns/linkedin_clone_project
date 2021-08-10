import * as firebase from 'firebase';
import { auth, db } from '../firebase';
import { customToast } from './customToast';

type action = 'follow' | 'unfollow';

export const followAction = async (receiverUid: string, displayName: string, action: action): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  const userRef = db.collection('follows').doc(currentUserUid);
  const receiverRef = db.collection('follows').doc(receiverUid);
  switch (action) {
    case 'follow':
      try {
        await userRef.update({
          followed: firebase.default.firestore.FieldValue.arrayUnion(receiverUid)
        });
        await receiverRef.update({
          followers: firebase.default.firestore.FieldValue.arrayUnion(currentUserUid)
        });
        customToast('default', `Followed ${displayName} 😃`);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      break;
    case 'unfollow':
      try {
        await userRef.update({
          followed: firebase.default.firestore.FieldValue.arrayRemove(receiverUid)
        });
        await receiverRef.update({
          followers: firebase.default.firestore.FieldValue.arrayRemove(currentUserUid)
        });
        customToast('default', `Unfollowed ${displayName} ☹️`);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      break;
    default:
      throw new Error();
  }
};
