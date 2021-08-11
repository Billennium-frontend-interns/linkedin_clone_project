import { ReactText } from 'react';
import { toast, ToastOptions } from 'react-toastify';

type type = 'default' | 'info' | 'success' | 'error';

const defaultOptions: ToastOptions = {
  autoClose: 2500,
  position: 'bottom-right',
  pauseOnFocusLoss: false,
  pauseOnHover: false
};

export const customToast = (type: type, text: string, hideProgressBar = true): ReactText => {
  switch (type) {
    case 'default':
      return toast(text, { ...defaultOptions, hideProgressBar });
    case 'info':
      return toast.info(text, { ...defaultOptions, hideProgressBar });
    case 'success':
      return toast.success(text, { ...defaultOptions, hideProgressBar });
    case 'error':
      return toast.error(text, { ...defaultOptions, hideProgressBar });
    default:
      return toast(text, { ...defaultOptions, hideProgressBar });
  }
};
