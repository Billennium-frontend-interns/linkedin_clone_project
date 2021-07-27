import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from './useGetPosts';
import { useGetUserFollows } from './useGetUserFollows';
import { postFilter } from './PostsFilter';

export const FeedList: React.FC = () => {
  const { data: userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();

  if (isFollowsLoading || isPostsLoading) {
    return <CircularProgress />;
  }

  if (isFollowsError || isPostsError) {
    return <p>Error has occurred please try again...</p>;
  }

  const userPosts = postFilter(userFollows, posts);

  return (
    <section>
      {userPosts.map(({ id, ownerUid, displayName, content }) => (
        <div key={id}>
          <p>
            OwnerUid:{ownerUid}, OwnerName:{displayName}, PostContent: {content}
          </p>
        </div>
      ))}
    </section>
  );
};
