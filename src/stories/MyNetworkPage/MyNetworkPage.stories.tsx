import { MemoryRouter } from 'react-router-dom';
import { MyNetwork } from '../../pages/MyNetwork/MyNetwork';

export default {
  component: MyNetwork,
  title: 'Pages/MyNetwork',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => <MyNetwork />;
