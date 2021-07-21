import React, { SetStateAction } from 'react';
import { ErrorInterface } from './SignupFormInterfaces';

export interface ValidationInterface {
  error: ErrorInterface;
  setError: React.Dispatch<SetStateAction<ErrorInterface>>;
  validateForm: () => boolean;
}
