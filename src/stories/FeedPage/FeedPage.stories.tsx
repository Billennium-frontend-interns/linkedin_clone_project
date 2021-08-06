import { MemoryRouter } from 'react-router-dom';
import { Feed } from '../../pages/Feed/Feed';

export default {
  component: Feed,
  title: 'Pages/Feed',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => <Feed />;
