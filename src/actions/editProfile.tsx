import { auth, db } from '../firebase';

export interface UserEditData {
  displayName: string;
  bio: string;
}

export const editProfile = async (userUid: string, newData: UserEditData): Promise<void> => {
  try {
    await auth.currentUser?.updateProfile(newData);
    await db.collection('users').doc(userUid).update(newData);
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
