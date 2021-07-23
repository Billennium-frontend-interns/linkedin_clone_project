import React, { useEffect } from 'react';
import { db } from '../../firebase';

export const FeedList: React.FC = () => {
  useEffect(() => {
    db.collection('posts')
      .get()
      .then(doc => {
        // eslint-disable-next-line
        console.log(doc);
      });
  }, []);

  return (
    <div>
      <h1>FeedList</h1>
    </div>
  );
};
