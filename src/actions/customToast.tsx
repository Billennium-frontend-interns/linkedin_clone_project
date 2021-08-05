import { toast } from 'react-toastify';

type type = 'default' | 'info' | 'success' | 'error';

export const customToast = (type: type, text: string, hideProgressBar = true) => {
  switch (type) {
    case 'default':
      return toast(text, {
        position: 'bottom-right',
        hideProgressBar,
        autoClose: 3000
      });
    case 'info':
      return toast.info(text, {
        position: 'bottom-right',
        hideProgressBar,
        autoClose: 3000
      });
    case 'success':
      return toast.success(text, {
        position: 'bottom-right',
        hideProgressBar,
        autoClose: 3000
      });
    case 'error':
      return toast.error(text, {
        position: 'bottom-right',
        hideProgressBar,
        autoClose: 3000
      });
    default:
      return toast(text, {
        position: 'bottom-right',
        hideProgressBar,
        autoClose: 3000
      });
  }
};
