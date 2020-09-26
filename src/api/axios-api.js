import axiosService from "./axios-request";
export const userInfo  = params => {
  return axiosService({
    url:"http://192.168.1.6:8080/api/h5/index",
    method:"get",
    params
  })
}
export const userLogin = data => {
  return axiosService({
    url: "http://192.168.1.6:8080/api/h5/index", // 根据实际接口地址来写
    method: "post",
    data
  });
};
