import { useState } from 'react';
import { LoginFormDataInterface, ErrorInterface } from '../../shared/interfaces/FormInterfaces';
import { ValidationInterface } from '../../shared/interfaces/ValidationInterface';

export const useLoginFormValidation = (LoginFormData: LoginFormDataInterface): ValidationInterface => {
  const initialErrorData: ErrorInterface = {
    isError: false,
    errorText: ''
  };
  const [error, setError] = useState(initialErrorData);

  const validateForm = (): boolean => {
    const { email, password } = LoginFormData;

    const isAnyEmpty = () => email.length === 0 || password.length === 0;

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
