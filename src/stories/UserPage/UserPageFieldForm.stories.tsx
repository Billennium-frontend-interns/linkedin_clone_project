import { MemoryRouter } from 'react-router-dom';
import { UserPageFieldForm } from '../../components/UserPageFieldForm/UserPageFieldForm';

export default {
  component: UserPageFieldForm,
  title: 'Components/UserPageFieldForm',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => <UserPageFieldForm />;
