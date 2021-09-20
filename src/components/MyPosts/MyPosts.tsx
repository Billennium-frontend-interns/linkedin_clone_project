import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { useGetPosts } from '../../actions/useGetPosts';
import { postsFilter } from '../../actions/PostsFilter';
import { FeedPost } from '../FeedPost/FeedPost';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { Posts } from '../../constants/Posts';
import './MyPosts.scss';

interface MyPostsProps {
  userUid: string;
}

export const MyPosts: React.FC<MyPostsProps> = ({ userUid }) => {
  const { allPosts, isLoading, isError } = useGetPosts();
  const userPosts = postsFilter([userUid], allPosts);
  const [postIndex, setPostIndex] = useState(Posts.initialAmount);
  const isMorePosts = postIndex <= userPosts.length;

  return (
    <WithLoader isLoading={isLoading}>
      <WithError isError={isError} errorMessage="Error has occurred please try again...">
        <article className="myPosts">
          {userPosts.slice(0, postIndex).map(({ content, ownerUid, timestamp, testid }) => (
            <FeedPost content={content} ownerUid={ownerUid} timestamp={timestamp} testid={testid} />
          ))}
          {isMorePosts && (
            <div className="myPosts__wrapper">
              <IconButton
                className="myPosts__showMore"
                onClick={() => {
                  setPostIndex(postIndex + Posts.newAmount);
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          )}
        </article>
      </WithError>
    </WithLoader>
  );
};

MyPosts.propTypes = {
  userUid: PropTypes.string.isRequired
};
