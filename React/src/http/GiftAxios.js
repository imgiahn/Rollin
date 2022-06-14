import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/gift";
export const giftAxios = async (url, method, data) => {
  const response = await axios({
    url,
    method,
    data,
  });
  return response.data;
};
