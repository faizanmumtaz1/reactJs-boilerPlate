import { BaseAPIService } from "./baseApi.service";

class CustomerAPI extends BaseAPIService {
    login = (data: any) => {
        return this.post("/v3/login", data);
    };

}

export const customerAPI = new CustomerAPI();
