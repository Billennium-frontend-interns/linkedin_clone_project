import * as firebase from 'firebase';
import { auth, db } from '../firebase';
import { customToast } from './customToast';

type action = 'follow' | 'unfollow';

export const followAction = async (receiverUid: string, displayName: string, action: action): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  const userRef = db.collection('users').doc(currentUserUid).collection('followed').doc(receiverUid);
  const receiverRef = db.collection('users').doc(receiverUid).collection('followers').doc(currentUserUid);
  switch (action) {
    case 'follow':
      try {
        await userRef.set({
          timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
          seen: false
        });
        await receiverRef.set({
          timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
          seen: false
        });
        customToast('default', `Followed ${displayName} 😃`);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
      break;
    case 'unfollow':
      try {
        await userRef.delete();
        await receiverRef.delete();
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
