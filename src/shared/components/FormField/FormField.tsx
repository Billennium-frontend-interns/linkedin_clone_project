import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export interface FormFieldInterface {
  label: string;
  type: string;
  name: string;
  isError: boolean;
  errorText: string;
  value: string;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldInterface> = ({
  label,
  type,
  name,
  isError,
  errorText,
  value,
  onClick,
  onChange,
  className
}: FormFieldInterface) => (
  <TextField
    variant="standard"
    label={label}
    type={type}
    name={name}
    error={isError}
    helperText={errorText}
    onClick={onClick}
    value={value}
    className={className}
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
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
