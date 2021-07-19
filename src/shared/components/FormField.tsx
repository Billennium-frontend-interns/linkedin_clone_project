import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

interface FormFieldInterface {
  label: string;
  type: string;
  name: string;
  isError: boolean;
  errorText: string;
  value: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
    inputProps={{
      testId: name
    }}
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
