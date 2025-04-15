import { useMutation } from "react-query";
import { customerAPI } from "../services/userApi";

export const addNewUser = async (data: any) => {
  const response = await customerAPI.addNewUser(data);
  return response.data;
};
export const useMutateAddUser = () => {
  return useMutation((data: any) => addNewUser(data));
};
