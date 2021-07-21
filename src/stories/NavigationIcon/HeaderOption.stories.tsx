import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MemoryRouter } from 'react-router-dom';
import { NavigationIcon } from '../../components/NavigationIcon/NavigationIcon';

export default {
  component: NavigationIcon,
  title: 'Components/NavigationIcon',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const FeedNavigationIcon = () => <NavigationIcon path="/feed" Icon={HomeIcon} title="Home" />;
export const NetworkNavigationIcon = () => (
  <NavigationIcon path="/network" Icon={SupervisorAccountIcon} title="My Network" />
);
export const NotificationNavigationIcon = () => (
  <NavigationIcon path="/notification" Icon={NotificationsIcon} title="Notification" />
);
export const AvatarNavigationIcon = () => (
  <NavigationIcon
    avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/842px-Apple_logo_black.svg.png"
    title="me ▼"
  />
);
