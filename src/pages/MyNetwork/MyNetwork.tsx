import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import { Header } from '../../components/Header/Header';
import { FollowedUsers } from '../../components/FollowedUsers/FollowedUsers';
import { RecommendedUsers } from '../../components/RecommendedUsers/RecommendedUsers';
import { useDarkMode } from '../../context/DarkModeProvider';
import './MyNetwork.scss';

export const MyNetwork: React.FC = () => {
  const [showRecommendedUsers, setShowRecommendedUsers] = useState(true);
  const { isDarkMode } = useDarkMode();

  return (
    <div className={classNames('myNetwork', { 'myNetwork--dark': isDarkMode })} data-testid="myNetworkPage">
      <Header testid="myNetworkPageHeader" />
      <div className={classNames('myNetwork__container', { 'myNetwork__container--dark': isDarkMode })}>
        <div className={classNames('myNetwork__buttons', { 'myNetwork__buttons--dark': isDarkMode })}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            data-testid="recommendedUsersButton"
            onClick={() => setShowRecommendedUsers(true)}
            className={classNames(
              'myNetwork__button',
              { 'myNetwork__button--active': showRecommendedUsers },
              { 'myNetwork__button--active--dark': isDarkMode && showRecommendedUsers }
            )}
          >
            Recommended Users
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            data-testid="followedUsersButton"
            onClick={() => setShowRecommendedUsers(false)}
            className={classNames(
              'myNetwork__button',
              { 'myNetwork__button--active': !showRecommendedUsers },
              { 'myNetwork__button--dark': isDarkMode },
              { 'myNetwork__button--active--dark': isDarkMode && !showRecommendedUsers }
            )}
          >
            Followed Users
          </Button>
        </div>
        {showRecommendedUsers ? (
          <RecommendedUsers testid="recommendedUsers" />
        ) : (
          <FollowedUsers testid="followedUsers" />
        )}
      </div>
    </div>
  );
};
