import { toast, ToastOptions } from 'react-toastify';

const toastSettings: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const toastError = (message: string): void => {
  toast.error(message, toastSettings);
};

export const toastSuccess = (message: string): void => {
  toast.success(message, toastSettings);
};
