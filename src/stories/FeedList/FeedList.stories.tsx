import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { FeedList } from '../../components/FeedList/FeedList';

export default {
  component: FeedList,
  title: 'Components/FeedList',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </MemoryRouter>
    )
  ]
};

export const Template = () => <FeedList />;
