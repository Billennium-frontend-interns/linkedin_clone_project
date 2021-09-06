import * as firebase from 'firebase';
import { auth, db } from '../firebase';
import { fields } from '../shared/interfaces/ProfileFieldInterfaces';
import { customToast } from './customToast';

type action = 'update' | 'delete';

export const updateProfileFields = async (profileField: fields, action: string): Promise<void> => {
  const currentUserUid = auth.currentUser?.uid;
  const userRef = db.collection('users').doc(currentUserUid);

  switch (action) {
    case 'update':
      try {
        await userRef
          .update({
            profileFields: firebase.default.firestore.FieldValue.arrayUnion(profileField)
          })
          .then(() => customToast('success', 'Field Added'));
      } catch (error) {
        // eslint-disable-next-line
        customToast('error', 'There was a problem with adding a field');
        console.log(error);
      }
      break;
    case 'delete':
      try {
        await userRef
          .update({
            profileFields: firebase.default.firestore.FieldValue.arrayRemove(profileField)
          })
          .then(() => customToast('success', 'Field Removed'));
      } catch (error) {
        // eslint-disable-next-line
        customToast('error', 'There was a problem with removing a field');
        console.log(error);
      }
      break;
    default:
      throw new Error();
  }
};
