import { LoginFormDataInterface, FormFieldConfigInterface } from '../../shared/interfaces/FormInterfaces';

export const useFormLoginFieldsConfig = (
  formData: LoginFormDataInterface,
  errorMessageVisible: {
    email: boolean;
    password: boolean;
  }
): FormFieldConfigInterface[] => [
  {
    label: 'E-mail',
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
  }
];
