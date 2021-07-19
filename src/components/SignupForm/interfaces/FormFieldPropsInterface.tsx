import React from 'react';

interface FormFieldInterface {
  testId: string;
  label: string;
  type: string;
  name: string;
  isError: boolean;
  errorText: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default FormFieldInterface;
