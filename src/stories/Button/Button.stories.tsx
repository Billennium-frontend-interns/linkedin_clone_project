import React from 'react';
import { Button } from '@material-ui/core';
import logout from '../../actions/logout';

export default {
  component: Button,
  title: 'Components/Button'
};

export const DefaultButton = () => <Button>deafult</Button>;

export const LogOutButton = () => <Button variant="outlined">log out</Button>;

export const ViewProfileButton = () => (
  <Button variant="outlined" color="primary">
    view profile
  </Button>
);
