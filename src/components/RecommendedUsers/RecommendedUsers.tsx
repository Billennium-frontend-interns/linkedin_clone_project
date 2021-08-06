import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';
import './RecommendedUsers.scss';

interface RecommendedUsersProps {
  testid?: string;
}

export const RecommendedUsers: React.FC<RecommendedUsersProps> = ({ testid }) => {
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { users, isLoading, isError } = useGetUsers();
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>();

  const getRecommendedUsersInfo = () =>
    users
      .filter(user => !userFollows.includes(user.id) && !recommendedUsers?.includes(user))
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

  useEffect(() => {
    setRecommendedUsers(getRecommendedUsersInfo());
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <div className="recommendedUsers">
          <div data-testid={testid} className="recommendedUsers__wrapper">
            {recommendedUsers?.map(({ displayName, avatar, id }) => (
              <UserCard displayName={displayName} avatar={avatar} id={id} />
            ))}
          </div>
          <IconButton onClick={() => setRecommendedUsers(recommendedUsers?.concat(getRecommendedUsersInfo()))}>
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </div>
      </WithError>
    </WithLoader>
  );
};

RecommendedUsers.defaultProps = {
  testid: undefined
};

RecommendedUsers.propTypes = {
  testid: PropTypes.string
};
