import { useState } from 'react';
import { SignUpCredentialsInterface, ErrorInterface } from '../../shared/interfaces/FormInterfaces';
import { ValidationInterface } from '../../shared/interfaces/ValidationInterfaces';

export const useSignupFormValidation = (signUpFormData: SignUpCredentialsInterface): ValidationInterface => {
  const initialErrorData: ErrorInterface = {
    isError: false,
    errorText: ''
  };
  const [error, setError] = useState(initialErrorData);

  const validateForm = (): boolean => {
    const { name, email, password, repeatPassword } = signUpFormData;

    const isAnyEmpty = () => {
      if (name.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
        return true;
      }
      return false;
    };

    const isNicknameNotValid = () => {
      if (name.length < 3 || name.length > 30) {
        return true;
      }
      return false;
    };

    const isPasswordNotValid = () => {
      if (password.length < 8) {
        return true;
      }
      return false;
    };

    const isPasswordNotMatch = () => {
      if (password !== repeatPassword) {
        return true;
      }
      return false;
    };

    if (isAnyEmpty()) {
      setError({
        isError: true,
        errorText: "Fields can't be empty"
      });
      return false;
    }

    if (isNicknameNotValid()) {
      setError({
        isError: true,
        errorText: 'Nickname must be longer than 3 characters and shorter than 30 characters'
      });
      return false;
    }

    if (isPasswordNotValid()) {
      setError({
        isError: true,
        errorText: 'Password must be at least 8 characters'
      });
      return false;
    }

    if (isPasswordNotMatch()) {
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
    setError,
    validateForm
  };
};
