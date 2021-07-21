import React, { SetStateAction } from 'react';
import { ErrorInterface } from './FormInterfaces';

export interface ValidationInterface {
  error: ErrorInterface;
  setError: React.Dispatch<SetStateAction<ErrorInterface>>;
  validateForm: () => boolean;
}
