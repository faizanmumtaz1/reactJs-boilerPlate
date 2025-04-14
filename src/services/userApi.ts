import { BaseAPIService } from "./baseApi.service";

class CustomerAPI extends BaseAPIService {
    login = (data: any) => {
        return this.post("/login", data);
    };

}

export const customerAPI = new CustomerAPI();
