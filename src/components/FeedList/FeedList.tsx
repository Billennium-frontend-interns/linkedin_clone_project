import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from './useGetPosts';
import { useGetUserFollows } from './useGetUserFollows';
import { postFilter } from './PostsFilter';
import { PostData } from './FeedListInterfaces';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [index, setIndex] = useState(0);

  const { data: userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { data: allPosts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();

  if (isFollowsLoading || isPostsLoading) {
    return <CircularProgress />;
  }

  if (isFollowsError || isPostsError) {
    return <p>Error has occurred please try again...</p>;
  }

  const userPosts = postFilter(userFollows, allPosts);

  const fetchMoreData = () => {
    if (index === 0) {
      setPosts(userPosts.slice(0, 1));
      setIndex(index + 1);
      return;
    }
    setPosts([...userPosts.splice(0, index + 1)]);
    setIndex(index + 1);
  };

  return (
    <section>
      {userPosts.map(({ id, ownerUid, displayName, content }) => (
        <div key={id}>
          <p>
            OwnerUid:{ownerUid}, OwnerName:{displayName}, PostContent: {content}
          </p>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          fetchMoreData();
        }}
      >
        click
      </button>
    </section>
  );
};
