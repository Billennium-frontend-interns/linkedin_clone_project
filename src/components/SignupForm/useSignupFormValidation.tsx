import { useState } from 'react';
import SignUpFormDataInterface from './interfaces/SignupFormDataInterface';
import ErrorInterface from './interfaces/ErrorInterface';
import ValidationInterface from './interfaces/ValidationInterface';

const useSignupFormValidation = (data: SignUpFormDataInterface): ValidationInterface => {
  const initialErrorData: ErrorInterface = {
    isError: false,
    errorText: ''
  };

  const [error, setError] = useState(initialErrorData);

  const validateForm = (): boolean => {
    const { name, email, password, repeatPassword } = data;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
      setError({
        isError: true,
        errorText: "Fields can't be empty"
      });
      return false;
    }

    if (name.length < 3 || name.length > 30) {
      setError({
        isError: true,
        errorText: 'Nickname must be longer than 3 characters and shorter than 30 characters'
      });
      return false;
    }

    if (password.length < 8) {
      setError({
        isError: true,
        errorText: 'Password must be at least 8 characters'
      });
      return false;
    }

    if (password !== repeatPassword) {
      setError({
        isError: true,
        errorText: 'Passwords must match'
      });
      return false;
    }

    setError(initialErrorData);
    return true;
  };

  return {
    error,
    validateForm
  };
};

export default useSignupFormValidation;
