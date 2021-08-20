import { db } from '../firebase';
import { User } from '../shared/interfaces/UserInterfaces';

export const userHints: (set: React.Dispatch<React.SetStateAction<User[][]>>, value: string) => void = async (
  set,
  value
) => {
  const snapshot = await db.collection('users').orderBy('displayName', 'asc').get();
  set(
    snapshot.docs
      .map(doc => [
        {
          displayName: doc.data().displayName,
          id: doc.data().id,
          avatar: doc.data().avatar,
          headline: doc.data().headline
        }
      ])
      .filter(doc => doc[0].displayName.toUpperCase().includes(value.toUpperCase()) && value)
      .slice(0, 5)
  );
};
