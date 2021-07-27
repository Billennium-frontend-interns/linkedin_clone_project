import db from '../firebase';

export const userHints: (set: React.Dispatch<React.SetStateAction<string[]>>, value: string) => void = (set, value) => {
  db.collection('users')
    .orderBy('displayName', 'asc')
    .onSnapshot(snapshot => {
      set(
        snapshot.docs
          .map(doc => doc.data().displayName)
          .filter(doc => doc.startsWith(value) && value)
          .slice(0, 5)
      );
    });
};
