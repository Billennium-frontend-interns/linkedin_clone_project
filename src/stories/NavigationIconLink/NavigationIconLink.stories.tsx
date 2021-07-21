import HomeIcon from '@material-ui/icons/Home';
import { MemoryRouter } from 'react-router-dom';
import { NavigationIconLink } from '../../components/NavigationIconLink/NavigationIconLink';

export default {
  component: NavigationIconLink,
  title: 'Components/NavigationIconLink',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Home = () => <NavigationIconLink path="/feed" Icon={HomeIcon} title="Home" />;
