import { MemoryRouter } from 'react-router-dom';
import { UserDetails } from '../../components/UserDetails/UserDetails';

export default {
  component: UserDetails,
  title: 'Components/UserDetails',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

const userData = {
  ownerUid: '123',
  displayName: 'Jakub Gościniak',
  avatar: '',
  isMyUserDetails: false,
  isUserFollowedBy: true,
  isUserFollowing: true,
  headline: 'SSZEMZA'
};

export const Default = () => (
  <UserDetails
    ownerUid={userData.ownerUid}
    isUserFollowing={userData.isUserFollowing}
    headline={userData.headline}
    displayName={userData.displayName}
    avatar={userData.avatar}
    isMyUserDetails={userData.isMyUserDetails}
    isUserFollowedBy={userData.isUserFollowedBy}
  />
);
