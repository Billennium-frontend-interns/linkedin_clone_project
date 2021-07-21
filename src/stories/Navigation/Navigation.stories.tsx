import { MemoryRouter } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation';

export default {
  component: Navigation,
  title: 'Components/Navigation',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => <Navigation />;
