import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import '../../styles/FormStyles.scss';
import '../../pages/FormLayout/FormLayout.scss';

export default {
  component: SignupForm,
  title: 'Components/SignupForm',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Template: React.VFC = () => <SignupForm />;
