import { BaseAPIService } from "./baseApi.service";

class CustomerAPI extends BaseAPIService {
  
    getUserList = () => {
        return this.get(`api url`);
    };
 
}

export const customerAPI = new CustomerAPI();
