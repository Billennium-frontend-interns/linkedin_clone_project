import { useState } from 'react';
import { LoginCredentialsInterface, ErrorInterface } from '../../shared/interfaces/FormInterfaces';
import { ValidationInterface } from '../../shared/interfaces/ValidationInterfaces';

export const useLoginFormValidation = (LoginFormData: LoginCredentialsInterface): ValidationInterface => {
  const initialErrorData: ErrorInterface = {
    isError: false,
    errorText: ''
  };
  const [error, setError] = useState(initialErrorData);

  const validateForm = (): boolean => {
    const { email, password } = LoginFormData;

    const isAnyEmpty = () => email.trim() === '' || password.trim() === '';

    if (isAnyEmpty()) {
      setError({
        isError: true,
        errorText: "Fields can't be empty"
      });
      return false;
    }

    setError(initialErrorData);
    return true;
  };

  return {
    error,
    setError,
    validateForm
  };
};
