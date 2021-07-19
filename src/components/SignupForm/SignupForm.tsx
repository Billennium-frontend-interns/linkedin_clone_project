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

  const initialErrorMessageVisible: ErrorMessageVisibleInterface = {
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessageVisible, setErrorMessageVisible] = useState(initialErrorMessageVisible);
  const [isLoading, setIsLoading] = useState(false);

  const { error, setError, validateForm } = useSignupFormValidation(formData);
  const formFieldsConfig = useFormFieldsConfig(formData, errorMessageVisible);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              setErrorMessageVisible({ ...errorMessageVisible, [name]: true });
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
