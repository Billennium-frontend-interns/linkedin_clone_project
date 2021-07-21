export interface Credentials {
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentialsInterface {
  email: string;
  password: string;
}

export interface FormFieldConfigInterface {
  label: string;
  type: string;
  name: string;
  isError: boolean;
  errorText: string;
  value: string;
  className?: string;
}

export interface ErrorInterface {
  isError: boolean;
  errorText: string;
}

export type SignUpCredentialsInterface = Credentials & { repeatPassword: string };

export type ErrorMessageLoginVisibleInterface = {
  [Property in keyof LoginCredentialsInterface]: boolean;
};

export type ErrorMessageVisibleInterface = {
  [Property in keyof SignUpCredentialsInterface]: boolean;
};
