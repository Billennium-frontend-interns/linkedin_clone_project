import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import { Header } from '../../components/Header/Header';
import { FollowedUsers } from '../../components/FollowedUsers/FollowedUsers';
import { RecommendedUsers } from '../../components/RecommendedUsers/RecommendedUsers';
import { DarkModeContext } from '../../context/DarkModeProvider';
import './MyNetwork.scss';

export const MyNetwork: React.FC = () => {
  const [showRecommendedUsers, setShowRecommendedUsers] = useState(true);
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <div className={classNames('myNetwork', { 'myNetwork--dark': isDarkMode })} data-testid="myNetworkPage">
      <Header testid="myNetworkPageHeader" />
      <div className={classNames('myNetwork__container', { 'myNetwork__container--dark': isDarkMode })}>
        <div className="myNetwork__buttons">
          <Button
            size="large"
            variant="outlined"
            color="primary"
            data-testid="recommendedUsersButton"
            onClick={() => setShowRecommendedUsers(true)}
            className={classNames('myNetwork__button', { 'myNetwork__button--active': showRecommendedUsers })}
          >
            Recommended Users
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            data-testid="followedUsersButton"
            onClick={() => setShowRecommendedUsers(false)}
            className={classNames('myNetwork__button', { 'myNetwork__button--active': !showRecommendedUsers })}
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
