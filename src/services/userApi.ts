import { BaseAPIService } from "./baseApi.service";

class CustomerAPI extends BaseAPIService {
    login = (data: any) => {
        return this.post("/login", data,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });
    };
    getUserList = () => {
        return this.get("/users/");
    };
    addNewUser = (data: any) => {
        return this.post("/users/", data);
    };
}

export const customerAPI = new CustomerAPI();
