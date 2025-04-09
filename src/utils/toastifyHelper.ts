import { toast } from "react-toastify";

const toastHelper = {
  success: (message: string, options?: object) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      ...options,
    });
  },

  error: (message: string, options?: object) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      ...options,
    });
  },
};

export default toastHelper;
