import React from 'react';

interface FormFieldInterface {
  label: string;
  type: string;
  name: string;
  error: boolean;
  helperText: string;
  onClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default FormFieldInterface;
