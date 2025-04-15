import { useQuery } from "react-query";
import { customerAPI } from "../services/userApi";

const getAllUsers = async () => {
    const response = await customerAPI.getUserList();
    return response.data;
};

export default function useGetAllUsers() {
    return useQuery("allUsers", () => getAllUsers(), {
        retry: false,
        staleTime: Infinity,
    });
}
