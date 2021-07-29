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

const Users = ['Jakub Gość', 'Mateusz Szklarz', 'Mateusz DJ', 'Matuesz Opiekun'];

export const Default = () => Users.map(user => <SearchHint hint={user} />);
