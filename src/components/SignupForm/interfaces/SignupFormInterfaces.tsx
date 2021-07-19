import React from 'react';

export interface SignUpFormDataInterface {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface FormFieldConfigInterface {
  label: string;
  type: string;
  name: string;
  isError: boolean;
  errorText: string;
  value: string;
}

export type FormFieldInterface = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormFieldConfigInterface;

export interface ErrorInterface {
  isError: boolean;
  errorText: string;
}

export interface ErrorMessageVisibleInterface {
  name: boolean;
  email: boolean;
  password: boolean;
  repeatPassword: boolean;
}
