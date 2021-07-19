import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SignUpFormDataInterface from './interfaces/SignupFormDataInterface';
import ErrorMessageVisibleInterface from './interfaces/ErrorMessageVisibleInterface';
import useSignupFormValidation from './useSignupFormValidation';
import useFormFieldsConfig from './useFormFieldsConfig';
import FormField from './FormField';
import { auth } from '../../firebase';

const SignupForm: React.FC = () => {
  const initialFormData: SignUpFormDataInterface = {
    name: '',
    password: '',
    repeatPassword: '',
    email: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const initialErrorMessageVisible: ErrorMessageVisibleInterface = {
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  };
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(initialErrorMessageVisible);

  const [isLoading, setIsLoading] = useState(false);

  const { error, setError, validateForm } = useSignupFormValidation(formData);
  const formFieldsConfig = useFormFieldsConfig(formData, isErrorMessageVisible);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password, name } = formData;
      try {
        setIsLoading(true);
        await auth.createUserWithEmailAndPassword(email, password);
        await auth.currentUser?.updateProfile({
          displayName: name
        });
      } catch (err) {
        setError({
          isError: true,
          errorText: err.message
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFieldsConfig.map(field => {
        const { label, type, name, isError, helperText, value } = field;
        return (
          <FormField
            key={name}
            testId={name}
            label={label}
            type={type}
            name={name}
            isError={isError}
            helperText={helperText}
            // eslint-disable-next-line
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              setIsErrorMessageVisible({ ...isErrorMessageVisible, [name]: true });
            }}
            value={value}
            onChange={handleChange}
          />
        );
      })}
      <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
        Register
      </Button>
      {error.isError && <p>{error.errorText}</p>}
    </form>
  );
};

export default SignupForm;
