import React, { useEffect, useState } from 'react';
import { Grow } from '@material-ui/core';
import { useGetUserFollowers } from '../../actions/useGetUserFollowers';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';

interface ShowFollowersProps {
  isUserFollowedBy: boolean;
}

export const ShowFollowers: React.FC<ShowFollowersProps> = () => {
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollowers();
  const { users, isLoading, isError } = useGetUsers();
  const [followedUsers, setFollowedUsers] = useState<User[]>();

  const getFollowedUsersInfo = () => users.filter(user => userFollows.includes(user.id));

  useEffect(() => {
    setFollowedUsers(getFollowedUsersInfo());
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <Grow in timeout={500}>
          <div className="followedUsers">
            {followedUsers?.map(({ displayName, avatar, headline, id }) => (
              <UserCard key={id} displayName={displayName} avatar={avatar} id={id} headline={headline} followed />
            ))}
          </div>
        </Grow>
      </WithError>
    </WithLoader>
  );
};
