import { Button } from '@material-ui/core';

export default {
  component: Button,
  title: 'Components/Button'
};

export const DefaultButton = () => <Button>default</Button>;

export const LogOutButton = () => <Button variant="outlined">log out</Button>;

export const ViewProfileButton = () => (
  <Button variant="outlined" color="primary">
    view profile
  </Button>
);
