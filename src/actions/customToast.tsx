import { toast, ToastOptions } from 'react-toastify';

type type = 'default' | 'info' | 'success' | 'error';

const defaultOptions: ToastOptions | undefined = {
  autoClose: 3000,
  position: 'bottom-right'
};

export const customToast = (type: type, text: string, hideProgressBar = true) => {
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
