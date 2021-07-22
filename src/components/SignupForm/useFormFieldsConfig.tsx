import {
  SignUpCredentialsInterface,
  FormFieldConfigInterface,
  ErrorMessageSignupVisibleInterface
} from '../../shared/interfaces/FormInterfaces';

export const useFormFieldsConfig = (
  formData: SignUpCredentialsInterface,
  errorMessageVisible: ErrorMessageSignupVisibleInterface
): FormFieldConfigInterface[] => [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    isError: formData.email === '' && errorMessageVisible.email,
    errorText: formData.email === '' && errorMessageVisible.email ? "Email can't be empty" : ' ',
    value: formData.email
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    isError: formData.password === '' && errorMessageVisible.password,
    errorText: formData.password === '' && errorMessageVisible.password ? "Password can't be empty" : ' ',
    value: formData.password
  },
  {
    label: 'Repeat password',
    type: 'password',
    name: 'repeatPassword',
    isError: formData.repeatPassword === '' && errorMessageVisible.repeatPassword,
    errorText:
      formData.repeatPassword === '' && errorMessageVisible.repeatPassword ? "Repeat Password can't be empty" : ' ',
    value: formData.repeatPassword
  },
  {
    label: 'Nickname',
    type: 'text',
    name: 'name',
    isError: formData.name === '' && errorMessageVisible.name,
    errorText: formData.name === '' && errorMessageVisible.name ? "Nickname can't be empty" : ' ',
    value: formData.name
  }
];
