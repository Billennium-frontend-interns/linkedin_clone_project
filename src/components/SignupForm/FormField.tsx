import React from 'react';
import { TextField } from '@material-ui/core';
import FormFieldInterface from './interfaces/FormFieldInterface';

const FormField: React.FC<FormFieldInterface> = ({
  label,
  type,
  name,
  error,
  helperText,
  onClick,
  value,
  onChange
}: FormFieldInterface) => (
  <TextField
    label="Email"
    type="email"
    name="email"
    error={error}
    helperText={helperText}
    onClick={onClick}
    value={value}
    onChange={onChange}
  />
);
export default FormField;
