import React, { SetStateAction } from 'react';
import { ErrorInterface } from './SignupFormInterfaces';

interface ValidationInterface {
  error: ErrorInterface;
  setError: React.Dispatch<SetStateAction<ErrorInterface>>;
  validateForm: () => boolean;
}

export default ValidationInterface;
