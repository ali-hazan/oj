import request from "../config/axios";

class planServiceApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get() {
    return request
      .get("api/plan/list")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscribe(data: any) {
    return request
      .post("api/subscribe/", { ...data })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default new planServiceApi();
