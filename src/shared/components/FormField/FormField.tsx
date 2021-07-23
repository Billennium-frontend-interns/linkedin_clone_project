import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { FormFieldConfigInterface } from '../../interfaces/FormInterfaces';

export type FormFieldInterface = FormFieldConfigInterface & {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormField: React.FC<FormFieldInterface> = ({
  label,
  type,
  name,
  isError,
  errorText,
  value,
  className,
  onClick,
  onChange
}: FormFieldInterface) => (
  <TextField
    variant="standard"
    label={label}
    type={type}
    name={name}
    error={isError}
    helperText={errorText}
    value={value}
    className={className}
    onClick={onClick}
    onChange={onChange}
    inputProps={{
      'data-testid': name
    }}
  />
);

FormField.defaultProps = {
  className: ''
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
