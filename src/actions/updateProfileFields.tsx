import * as firebase from 'firebase';
import { auth, db } from '../firebase';
import { fields } from '../shared/interfaces/ProfileFieldInterfaces';

export const updateProfileFields = async (profileField: fields): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  const userRef = db.collection('users').doc(currentUserUid);
  try {
    await userRef.update({
      profileFields: firebase.default.firestore.FieldValue.arrayUnion(profileField)
    });
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
