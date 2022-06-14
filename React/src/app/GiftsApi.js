import { customAxios } from "../http/CustomAxios";
export const giftsApi = async () => {
  try {
    const response_data = await customAxios("/gift/", "get");
    console.log(response_data);
    return response_data;
  } catch (error) {
    throw error;
  }
};
