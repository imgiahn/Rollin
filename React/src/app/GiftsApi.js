import { giftAxios } from "../http/giftAxios";

export const getGiftById = async (id) => {
  try {
    const response_data = await giftAxios(`/gift/${id}`, "get");
    return response_data;
  } catch (error) {
    throw error;
  }
};

export const giftsApi = async () => {
  try {
    const response_data = await giftAxios("/gift/", "get");
    console.log(response_data);
    return response_data;
  } catch (error) {
    throw error;
  }
};
