import request from "../config/axios";

class couponServiceApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create(data: any) {
    return request
      .post("api/coupon/add/", { ...data })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  myCoupon() {
    return request
      .get("api/coupon/my-coupons")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default new couponServiceApi();
