import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import { Header } from '../../components/Header/Header';
import { FollowedUsers } from '../../components/FollowedUsers/FollowedUsers';
import { RecommendedUsers } from '../../components/RecommendedUsers/RecommendedUsers';
import './MyNetwork.scss';

export const MyNetwork: React.FC = () => {
  const [showRecommendedUsers, setShowRecommendedUsers] = useState(true);

  return (
    <div className="myNetwork">
      <Header />
      <div className="myNetwork__container">
        <div className="myNetwork__buttons">
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => setShowRecommendedUsers(true)}
            className={classNames('myNetwork__button', { 'myNetwork__button--active': showRecommendedUsers })}
          >
            Recommended User
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => setShowRecommendedUsers(false)}
            className={classNames('myNetwork__button', { 'myNetwork__button--active': !showRecommendedUsers })}
          >
            Followed User
          </Button>
        </div>
        {showRecommendedUsers ? <RecommendedUsers /> : <FollowedUsers />}
      </div>
    </div>
  );
};
