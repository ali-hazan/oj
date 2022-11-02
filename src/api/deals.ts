import request from "../config/axios";

class dealServiceApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list() {
    return request
      .get("api/deals/list/")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

}

export default new dealServiceApi();
