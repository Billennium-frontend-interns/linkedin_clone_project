import { MemoryRouter } from 'react-router-dom';
import { SearchHint } from '../../components/SearchHint/SearchHint';

export default {
  component: SearchHint,
  title: 'Components/SearchHint',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

const User = [
  {
    id: '123123',
    displayName: 'Testing'
  }
];

export const Default = () => <SearchHint id={User[0].id} displayName={User[0].displayName} />;
