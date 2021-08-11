import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Notifications } from '../pages/Notifications/Notifications';
import { HeaderDropdown } from '../components/DropdownsContent/HeaderDropdown';

export const navigationItems = [
  { path: '/feed', icon: HomeIcon, title: 'Home' },
  { path: '/network', icon: SupervisorAccountIcon, title: 'My Network' },
  { path: '', icon: NotificationsIcon, title: 'Notifications', content: Notifications },
  { path: '', icon: Avatar, title: 'Me▼', content: HeaderDropdown }
];
