import { Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
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

export const Me = () => <NavigationIcon Icon={Avatar} title="Me" />;

export const Home = () => <NavigationIcon path="/feed" Icon={HomeIcon} title="Home" />;
