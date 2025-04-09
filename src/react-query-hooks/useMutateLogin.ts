import { useMutation } from "react-query";
import { customerAPI } from "../services/userApi";

interface LoginData {
  userName: string;
  password: string;
}

const addLoginUser = async (loginInfo: LoginData) => {
  const response = await customerAPI.login(loginInfo);
  return response.data;
};

export default function useMutateLogin() {
  return useMutation((loginInfo: LoginData) => addLoginUser(loginInfo));
}
