import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<firebase.default.firestore.DocumentData[]>([]);

  const getPosts = useCallback(async () => {
    const snapshot = await db.collection('posts').get();
    setPosts(snapshot.docs.map(doc => doc.data()));
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      <h1>FeedList</h1>
      {posts.map(post => {
        const { content, avatar, displayName } = post;
        return (
          <div
            style={{
              border: '2px solid black',
              margin: '20px'
            }}
          >
            <p>{displayName}</p>
            <img
              src={avatar}
              alt="Profile"
              style={{
                height: '100px',
                width: '100px'
              }}
            />
            <p>{content}</p>
          </div>
        );
      })}
    </section>
  );
};
