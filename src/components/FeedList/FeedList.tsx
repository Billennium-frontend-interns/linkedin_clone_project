import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';
import { useGetPosts } from '../../actions/useGetPosts';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { postsFilter } from '../../actions/PostsFilter';
import { FeedPost, FeedPostProps } from '../FeedPost/FeedPost';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import './FeedList.scss';

export const FeedList: React.FC = () => {
  const [posts, setPosts] = useState<FeedPostProps[]>([]);
  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const { data: userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { data: allPosts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts();
  const userPosts = postsFilter(userFollows, allPosts);

  useEffect(() => {
    if (userFollows.length && allPosts.length) {
      setPosts(userPosts.slice(0, 5));
    }
    if (userPosts.length <= 5 && allPosts.length) {
      setHasMore(false);
    }
  }, [userFollows, allPosts]);

  const getMoreData = () => {
    if (posts.length >= userPosts.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setPosts(userPosts.slice(0, index + 4));
      setIndex(index + 1);
    }, 1000);
  };

  if (!userPosts.length && allPosts.length) {
    return <p className="noPostsError">Follow users to see their posts!</p>;
  }

  return (
    <section className="feedList">
      <Loader isLoading={isFollowsLoading || isPostsLoading}>
        <Error isError={isFollowsError || isPostsError}>
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
        </Error>
      </Loader>
    </section>
  );
};
