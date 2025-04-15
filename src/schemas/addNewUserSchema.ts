import * as yup from "yup";

export const addNewUserSchema = yup.object().shape({
  // userName: yup.string()
  //   .min(2, "Username must be at least 2 characters")
  //   .max(50, "Username cannot exceed 50 characters")
  //   .required("Username is required"),
  forename: yup.string().required("Forename is required"),
  surname: yup.string().required("Surname is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(255, "Email cannot exceed 255 characters")
    .required("Email is required"),
  is_active: yup.boolean().required("Is Active is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  // phoneNumber: yup.string()
  //   .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
  //   .min(10, "Phone number must be at least 10 digits")
  //   .max(15, "Phone number cannot exceed 15 digits")
  //   .required("Phone number is required"),
  role_name: yup
    .string()
    .oneOf(
      ["admin", "user", "manager", "supervisor"],
      "Please select a valid role"
    )
    .required("Please select a role"),
  organisation_name: yup.string().required("Organisation name is required"),
});

export type AddNewUserInput = yup.InferType<typeof addNewUserSchema>;
