import { auth, db } from '../firebase';

export const createFollow = async (receiverUid: string): Promise<void> => {
  try {
    db.collection('follows').doc(auth.currentUser?.uid).set({
      followerUid: auth.currentUser?.uid,
      receiverUid
    });
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
