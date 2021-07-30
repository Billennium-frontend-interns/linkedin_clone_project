import * as firebase from 'firebase';
import { auth, db } from '../firebase';

export const followUser = async (receiverUid: string): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  try {
    const userRef = db.collection('follows').doc(currentUserUid);
    const receiverRef = db.collection('follows').doc(receiverUid);
    await userRef.update({
      followed: firebase.default.firestore.FieldValue.arrayUnion(receiverUid)
    });
    await receiverRef.update({
      followers: firebase.default.firestore.FieldValue.arrayUnion(currentUserUid)
    });
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
