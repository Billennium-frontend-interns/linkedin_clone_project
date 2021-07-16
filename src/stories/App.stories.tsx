import React from 'react';

import { Meta } from '@storybook/react';

import App from '../App';

export default {
  component: App,
  title: 'Components/App'
} as Meta;

export const Primary: React.VFC = () => <App />;
