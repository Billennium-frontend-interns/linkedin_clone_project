import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from '../../actions/useGetPosts';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { postsFilter } from '../../actions/PostsFilter';
import { FeedPost, FeedPostProps } from '../FeedPost/FeedPost';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { Posts } from '../../constants/Posts';
import './FeedList.scss';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>([]);
  const [index, setIndex] = useState(Posts.initialAmount);
  const [hasMore, setHasMore] = useState(true);
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { allPosts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();
  const userPosts = postsFilter(userFollows, allPosts);

  const initializePosts = () => {
    if (userPosts.length) {
      setPosts(userPosts.slice(0, Posts.initialAmount));
    }
  };

  const checkPostsAmount = () => {
    if (userPosts.length <= Posts.initialAmount && allPosts.length) {
      setHasMore(false);
    }
  };

  const getMoreData = () => {
    if (posts.length >= userPosts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setPosts(userPosts.slice(0, index + Posts.newAmount));
      setIndex(index + Posts.newAmount);
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
      <WithLoader isLoading={isFollowsLoading || isPostsLoading} className="feedList__loader">
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
            {posts.map(({ testid, ownerUid, content, timestamp }) => (
              <FeedPost
                key={`${ownerUid},${timestamp.seconds}`}
                testid={testid}
                ownerUid={ownerUid}
                content={content}
                timestamp={timestamp}
              />
            ))}
          </InfiniteScroll>
        </WithError>
      </WithLoader>
    </section>
  );
};
