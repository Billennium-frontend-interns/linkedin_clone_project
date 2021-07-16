import SignUpFormDataInterface from './interfaces/SignupFormDataInterface';
import FormFieldConfigInterface from './interfaces/FormFieldConfigInterface';

const useFormFieldsConfig = (
  formData: SignUpFormDataInterface,
  errorMessageVisible: {
    name: boolean;
    email: boolean;
    password: boolean;
    repeatPassword: boolean;
  }
): FormFieldConfigInterface[] => {
  const formFieldsConfig = [
    {
      key: 'input1',
      label: 'Email',
      type: 'email',
      name: 'email',
      isError: formData.email === '' && errorMessageVisible.email,
      helperText: formData.email === '' && errorMessageVisible.email ? "Email can't be empty" : '',
      value: formData.email
    },
    {
      key: 'input2',
      label: 'Password',
      type: 'password',
      name: 'password',
      isError: formData.password === '' && errorMessageVisible.password,
      helperText: formData.password === '' && errorMessageVisible.password ? "Password can't be empty" : '',
      value: formData.password
    },
    {
      key: 'input3',
      label: 'Repeart password',
      type: 'password',
      name: 'repeatPassword',
      isError: formData.repeatPassword === '' && errorMessageVisible.repeatPassword,
      helperText:
        formData.repeatPassword === '' && errorMessageVisible.repeatPassword ? "Repeat Password can't be empty" : '',
      value: formData.repeatPassword
    },
    {
      key: 'input4',
      label: 'Nickname',
      type: 'text',
      name: 'name',
      isError: formData.name === '' && errorMessageVisible.name,
      helperText: formData.name === '' && errorMessageVisible.name ? "Nickname can't be empty" : '',
      value: formData.name
    }
  ];
  return formFieldsConfig;
};

export default useFormFieldsConfig;
