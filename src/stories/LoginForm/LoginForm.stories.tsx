import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import '../../styles/FormStyles.scss';
import '../../pages/FormLayout/FormLayout.scss';

export default {
  component: LoginForm,
  title: 'Components/LoginForm',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Template: React.VFC = () => <LoginForm />;
