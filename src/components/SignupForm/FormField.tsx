import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { FormFieldInterface } from './interfaces/SignupFormInterfaces';

const FormField: React.FC<FormFieldInterface> = ({
  label,
  type,
  name,
  isError,
  errorText,
  value,
  onClick,
  onChange
}: FormFieldInterface) => (
  <TextField
    label={label}
    type={type}
    name={name}
    error={isError}
    helperText={errorText}
    onClick={onClick}
    value={value}
    onChange={onChange}
  />
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormField;
