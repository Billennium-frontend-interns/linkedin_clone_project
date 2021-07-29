import * as firebase from 'firebase';
import { auth, db } from '../firebase';

export const createFollow = async (receiverUid: string): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  const userRef = db.collection('follows').doc(currentUserUid);
  const receiverRef = db.collection('follows').doc(receiverUid);
  userRef.update({
    followed: firebase.default.firestore.FieldValue.arrayUnion(receiverUid)
  });
  receiverRef.update({
    followers: firebase.default.firestore.FieldValue.arrayUnion(currentUserUid)
  });
};
