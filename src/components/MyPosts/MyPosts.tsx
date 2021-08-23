import React, { useState, useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { AuthContext } from '../../context/AuthProvider';
import { useGetPosts } from '../../actions/useGetPosts';
import { postsFilter } from '../../actions/postsFilter';
import { FeedPost } from '../FeedPost/FeedPost';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { Posts } from '../../constants/Posts';
import './MyPosts.scss';

export const MyPosts: React.FC = () => {
  const currentUser = useContext(AuthContext);
  const { allPosts, isLoading, isError } = useGetPosts();
  const userPosts = postsFilter([currentUser?.uid as string], allPosts);
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
