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
