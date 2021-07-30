import React, { useEffect, useState } from 'react';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';
import './FollowedUsers.scss';

export const FollowedUsers: React.FC = () => {
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { users, isLoading, isError } = useGetUsers();
  const [followedUsers, setFollowedUsers] = useState<User[]>();

  useEffect(() => {
    setFollowedUsers(users.filter(user => userFollows.includes(user.id)));
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <div className="followedUsers">
          {followedUsers?.map(({ displayName, avatar, id }) => (
            <UserCard displayName={displayName} avatar={avatar} id={id} followed />
          ))}
        </div>
      </WithError>
    </WithLoader>
  );
};
