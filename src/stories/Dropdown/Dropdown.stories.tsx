import React from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { MemoryRouter } from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { NavigationIcon } from '../../components/NavigationIcon/NavigationIcon';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const Default = () => (
  <Dropdown DropdownOpener={<NavigationIcon title="Dropdown" Icon={ArrowDropDownCircleIcon} />} content="" />
);
