import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetUserFollows } from '../../actions/useGetUserFollows';
import { useGetUsers } from '../../actions/useGetUsers';
import { User } from '../../shared/interfaces/UserInterfaces';
import { UserCard } from '../UserCard/UserCard';
import { WithError } from '../WithError/WithError';
import { WithLoader } from '../WithLoader/WithLoader';
import './FollowedUsers.scss';

interface FollowedUsersProps {
  testid?: string;
}

export const FollowedUsers: React.FC<FollowedUsersProps> = ({ testid }) => {
  const { userFollows, isLoading: isFollowsLoading, isError: isFollowsError } = useGetUserFollows();
  const { users, isLoading, isError } = useGetUsers();
  const [followedUsers, setFollowedUsers] = useState<User[]>();

  const getFollowedUsersInfo = () => users.filter(user => userFollows.includes(user.id));

  useEffect(() => {
    setFollowedUsers(getFollowedUsersInfo());
  }, [isLoading, isFollowsLoading]);

  return (
    <WithLoader isLoading={isLoading || isFollowsLoading}>
      <WithError isError={isFollowsError || isError} errorMessage="Error has occurred please try again...">
        <div data-testid={testid} className="followedUsers">
          {followedUsers?.map(({ displayName, avatar, id }) => (
            <UserCard key={id} displayName={displayName} avatar={avatar} id={id} followed />
          ))}
        </div>
      </WithError>
    </WithLoader>
  );
};

FollowedUsers.defaultProps = {
  testid: undefined
};

FollowedUsers.propTypes = {
  testid: PropTypes.string
};
