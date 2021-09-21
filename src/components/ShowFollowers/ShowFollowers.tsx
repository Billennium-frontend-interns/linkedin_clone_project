import React, { useEffect, useState } from 'react';
import { Grow } from '@material-ui/core';
import { useGetUserFollowers } from '../../actions/useGetUserFollowers';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';
import { useGetUserFollows } from '../../actions/useGetUserFollows';

export const ShowFollowers: React.FC = () => {
  const { userFollowers, isLoading: isFollowersLoading, isError: isFollowersError } = useGetUserFollowers();
  const { userFollows } = useGetUserFollows();
  const { users, isLoading, isError } = useGetUsers();
  const [followersUsers, setFollowersUsers] = useState<User[]>();

  const getFollowedUsersInfo = () => users.filter(user => userFollowers.includes(user.id));

  useEffect(() => {
    setFollowersUsers(getFollowedUsersInfo());
  }, [isLoading, isFollowersLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowersLoading}>
      <WithError isError={isFollowersError || isError} errorMessage="Error has occurred please try again...">
        <Grow in timeout={500}>
          <div className="followedUsers">
            {followersUsers?.map(({ displayName, avatar, headline, id }) => {
              if (userFollows.includes(id)) {
                return (
                  <UserCard key={id} displayName={displayName} avatar={avatar} id={id} headline={headline} followed />
                );
              }
              return (
                <UserCard
                  key={id}
                  displayName={displayName}
                  avatar={avatar}
                  id={id}
                  headline={headline}
                  followed={false}
                />
              );
            })}
          </div>
        </Grow>
      </WithError>
    </WithLoader>
  );
};
