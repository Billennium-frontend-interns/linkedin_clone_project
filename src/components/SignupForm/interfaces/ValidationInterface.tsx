import ErrorInterface from './ErrorInterface';

interface ValidationInterface {
  error: ErrorInterface;
  validateForm: () => boolean;
}

export default ValidationInterface;
