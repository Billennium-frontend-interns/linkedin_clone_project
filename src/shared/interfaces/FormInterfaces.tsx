export interface SignupCredentials {
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

export type SignUpCredentialsInterface = SignupCredentials & { repeatPassword: string };

export type ErrorMessageLoginVisibleInterface = {
  [Property in keyof LoginCredentialsInterface]: boolean;
};

export type ErrorMessageSignupVisibleInterface = {
  [Property in keyof SignUpCredentialsInterface]: boolean;
};
