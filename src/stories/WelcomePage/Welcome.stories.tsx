import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Welcome } from '../../pages/Welcome/Welcome';

export default {
  component: Welcome,
  title: 'Components/Pages',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const WelcomePage: React.VFC = () => <Welcome />;
