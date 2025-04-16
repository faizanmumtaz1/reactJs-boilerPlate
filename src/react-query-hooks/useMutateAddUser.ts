import { useMutation, useQueryClient } from "react-query";
import { customerAPI } from "../services/userApi";

export const addNewUser = async (data: any) => {
  const response = await customerAPI.addNewUser(data);
  return response.data;
};

export const useMutateAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation((data: any) => addNewUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("allUsers"); 
    },
  });
};
