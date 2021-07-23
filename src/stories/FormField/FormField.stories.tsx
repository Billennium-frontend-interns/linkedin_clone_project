import { Story } from '@storybook/react';
import { FormFieldInterface, FormField } from '../../shared/components/FormField/FormField';

export default {
  component: FormField,
  title: 'Shared/Components/FormField'
};

export const Template: Story<FormFieldInterface> = (args: FormFieldInterface) => {
  const { label, type, name, isError, errorText, value, onClick, onChange } = args;
  return (
    <FormField
      label={label}
      type={type}
      name={name}
      isError={isError}
      errorText={errorText}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  );
};

export const EmailField = Template.bind({});
EmailField.args = {
  label: 'Enter email',
  type: 'email',
  name: 'email',
  isError: false,
  errorText: 'Enter correct email',
  value: ''
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Enter password',
  type: 'password',
  name: 'password',
  isError: false,
  errorText: 'Enter correct password',
  value: ''
};
