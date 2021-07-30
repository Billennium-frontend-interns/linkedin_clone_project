import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from '../../actions/useGetPosts';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { postsFilter } from '../../actions/postsFilter';
import { FeedPost, FeedPostProps } from '../FeedPost/FeedPost';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import './FeedList.scss';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>([]);
  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { allPosts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();
  const userPosts = postsFilter(userFollows, allPosts);

  const initializePosts = () => {
    if (userPosts.length) {
      setPosts(userPosts.slice(0, 5));
    }
  };

  const checkPostsAmount = () => {
    if (userPosts.length <= 5 && allPosts.length) {
      setHasMore(false);
    }
  };

  const getMoreData = () => {
    if (posts.length >= userPosts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setPosts(userPosts.slice(0, index + 4));
      setIndex(index + 4);
    }, 1000);
  };

  useEffect(() => {
    initializePosts();
    checkPostsAmount();
  }, [userFollows, allPosts]);

  if (!userPosts.length && allPosts.length) {
    return <WithError isError errorMessage="Follow users to see their posts!" className="noPostsError" />;
  }

  return (
    <section className="feedList" data-testid="feedList">
      <WithLoader isLoading={isFollowsLoading || isPostsLoading}>
        <WithError isError={isFollowsError || isPostsError} errorMessage="Error has occurred please try again...">
          <InfiniteScroll
            dataLength={posts.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={
              <div className="feedList__loader">
                <CircularProgress />
              </div>
            }
            endMessage={<p className="feedList__endMessage">Yay! You have seen it all</p>}
            className="feedList__posts"
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
        </WithError>
      </WithLoader>
    </section>
  );
};
