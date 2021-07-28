import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from './useGetPosts';
import { useGetUserFollows } from './useGetUserFollows';
import { postFilter } from './PostsFilter';
import { FeedPostProps } from '../FeedPost/FeedPost';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>([]);
  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const { data: userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { data: allPosts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();

  useEffect(() => {
    if (userFollows.length && allPosts.length) {
      setPosts(postFilter(userFollows, allPosts).slice(0, 5));
    }
  }, [userFollows, allPosts]);

  if (isFollowsLoading || isPostsLoading) {
    return <CircularProgress />;
  }

  if (isFollowsError || isPostsError) {
    return <p>Error has occurred please try again...</p>;
  }

  const userPosts = postFilter(userFollows, allPosts);

  const fetchMoreData = () => {
    if (posts.length >= userPosts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setPosts(userPosts.slice(0, index + 4));
      setIndex(index + 1);
    }, 1000);
  };

  return (
    <section
      style={{
        fontSize: '6rem'
      }}
    >
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map(({ testid, ownerUid, displayName, content }) => (
          <div key={testid}>
            <p>
              OwnerUid:{ownerUid}, OwnerName:{displayName}, PostContent: {content}
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
};
