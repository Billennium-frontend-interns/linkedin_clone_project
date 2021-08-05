import { db } from '../firebase';

type userHint = {
  displayName: string;
  id: string;
};

export const userHints: (set: React.Dispatch<React.SetStateAction<userHint[][]>>, value: string) => void = async (
  set,
  value
) => {
  const snapshot = await db.collection('users').orderBy('displayName', 'asc').get();
  set(
    snapshot.docs
      .map(doc => [{ displayName: doc.data().displayName, id: doc.data().id }])
      .filter(doc => doc[0].displayName.startsWith(value) && value)
      .slice(0, 5)
  );
};
