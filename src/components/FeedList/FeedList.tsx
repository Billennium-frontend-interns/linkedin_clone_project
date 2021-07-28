import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from '../../actions/useGetPosts';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { postFilter } from './PostsFilter';
import { FeedPost, FeedPostProps } from '../FeedPost/FeedPost';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

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

  const userPosts = postFilter(userFollows, allPosts);

  const getMoreData = () => {
    if (posts.length >= userPosts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setPosts(userPosts.slice(0, index + 4));
      setIndex(index + 1);
    }, 3000);
  };

  return (
    <section>
      <Loader isLoading={isFollowsLoading || isPostsLoading}>
        <Error isError={isFollowsError || isPostsError}>
          <InfiniteScroll
            dataLength={posts.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<CircularProgress />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {posts.map(({ testid, ownerUid, displayName, content, avatar, timestamp }) => (
              <FeedPost
                key={testid}
                testid={testid}
                ownerUid={ownerUid}
                displayName={displayName}
                content={content}
                avatar={avatar}
                timestamp={timestamp}
              />
            ))}
          </InfiniteScroll>
        </Error>
      </Loader>
    </section>
  );
};
