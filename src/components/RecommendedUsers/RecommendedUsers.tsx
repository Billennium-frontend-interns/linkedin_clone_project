import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
      .filter(user => !userFollows.includes(user.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

  useEffect(() => {
    setRecommendedUsers(getRecommendedUsersInfo());
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <div data-testid={testid} className="recommendedUsers">
          {recommendedUsers?.map(({ displayName, avatar, id }) => (
            <UserCard key={id} displayName={displayName} avatar={avatar} id={id} />
          ))}
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
