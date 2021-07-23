import { Button } from '@material-ui/core';

export default {
  component: Button,
  title: 'Components/Button'
};

export const Default = () => <Button>default</Button>;

export const Outlined = () => <Button variant="outlined">log out</Button>;

export const PrimaryOutlined = () => (
  <Button variant="outlined" color="primary">
    view profile
  </Button>
);
