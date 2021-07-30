import React, { useEffect, useState } from 'react';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';
import './RecommendedUsers.scss';

export const RecommendedUsers: React.FC = () => {
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { users, isLoading, isError } = useGetUsers();
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>();

  useEffect(() => {
    setRecommendedUsers(
      users
        .filter(user => !userFollows.includes(user.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
    );
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <div className="recommendedUsers">
          {recommendedUsers?.map(({ displayName, avatar, id }) => (
            <UserCard displayName={displayName} avatar={avatar} id={id} />
          ))}
        </div>
      </WithError>
    </WithLoader>
  );
};
