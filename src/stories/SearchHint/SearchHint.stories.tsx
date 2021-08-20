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
    displayName: 'Testing',
    avatar:
      'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTeDK7atisY59wDS-qONZEV7u27EzeGi4SjbNkSqVeJq8OQ3HNTxtY_-Mm_PsMm',
    headline: 'Random User'
  }
];

export const Default = () => (
  <SearchHint id={User[0].id} displayName={User[0].displayName} avatar={User[0].avatar} headline={User[0].headline} />
);
