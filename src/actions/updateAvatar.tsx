import { auth, db, storage } from '../firebase';

export const updateAvatar = async (userUid: string, file: File): Promise<void> => {
  try {
    const url = `users/${userUid}/profile.jpg`;
    await storage.ref(url).put(file);
    const avatarUrl = await storage.ref(url).getDownloadURL();
    await db.collection('users').doc(userUid).update({
      avatar: avatarUrl
    });
    await auth.currentUser?.updateProfile({
      photoURL: avatarUrl
    });
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
