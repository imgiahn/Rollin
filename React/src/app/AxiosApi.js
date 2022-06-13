import axios from "axios";

axios.defaults.baseURL = "http://localhost:8090";
export const defaultAxios = async (url, method, data) => {
  console.log(`url : ${url}`);
  return await axios({
    method,
    url,
    data,
  });
};
