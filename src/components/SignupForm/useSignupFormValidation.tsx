import { useState } from 'react';
import { SignUpFormDataInterface, ErrorInterface } from './interfaces/SignupFormInterfaces';
import ValidationInterface from './interfaces/ValidationInterface';

const useSignupFormValidation = (signUpFormData: SignUpFormDataInterface): ValidationInterface => {
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

    const isNicknameValid = () => {
      if (name.length < 3 || name.length > 30) {
        return true;
      }
      return false;
    };

    const isPasswordValid = () => {
      if (password.length < 8) {
        return true;
      }
      return false;
    };

    const isPasswordMatch = () => {
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

    if (isNicknameValid()) {
      setError({
        isError: true,
        errorText: 'Nickname must be longer than 3 characters and shorter than 30 characters'
      });
      return false;
    }

    if (isPasswordValid()) {
      setError({
        isError: true,
        errorText: 'Password must be at least 8 characters'
      });
      return false;
    }

    if (isPasswordMatch()) {
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

export default useSignupFormValidation;
