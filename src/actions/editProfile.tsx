import { auth, db } from '../firebase';
import { User } from '../shared/interfaces/UserInterfaces';
import { customToast } from './customToast';

export const editProfile = async (userUid: string, newData: User): Promise<void> => {
  try {
    await auth.currentUser?.updateProfile(newData);
    await db
      .collection('users')
      .doc(userUid)
      .update(newData)
      .then(() => customToast('success', 'Profil successfully edited'));
  } catch (error) {
    // eslint-disable-next-line
    customToast('error', 'There was a problem with Editing Your Profile');
  }
};
