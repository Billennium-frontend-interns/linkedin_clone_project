import { auth, db } from '../firebase';
import { UserData } from '../shared/interfaces/UserInterfaces';

export const editProfile = async (userUid: string, newData: UserData): Promise<void> => {
  try {
    await auth.currentUser?.updateProfile(newData);
    await db.collection('users').doc(userUid).update(newData);
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
