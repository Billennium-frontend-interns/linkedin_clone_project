import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export default {
  component: Header,
  title: 'Components/Header',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => <Header />;
