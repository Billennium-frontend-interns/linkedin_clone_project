import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

export const navigationItems = [
  { path: '/feed', icon: HomeIcon, title: 'Home' },
  { path: '/network', icon: SupervisorAccountIcon, title: 'My Network' },
  { path: '/notifications', icon: NotificationsIcon, title: 'Notifications' },
  { path: null, icon: Avatar, title: 'Me ▼' }
];
