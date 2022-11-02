import request from "../config/axios";

class AuthServiceApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(data: any) {
    return request
      .post("api/token/", {
        ...data,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(data: any) {
    return request
      .post("api/register/", {
        ...data,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  whoami() {
    return request
      .get("api/whoami/")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default new AuthServiceApi();
