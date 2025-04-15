export interface LoginFormValues {
  userName: string;
  password: string;
}
export interface createPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface AddUserFormValues {
  userName: string;
  email: string;
  phoneNumber: string;
  roleDescription: string;
}

export interface StatusFilter {
  label: string;
  value: string;
}
