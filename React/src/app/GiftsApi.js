import { giftAxios } from "../http/GiftAxios";

export const getGiftById = async (id) => {
  try {
    const response_data = await giftAxios(`/gift/${id}`, "get");
    return response_data;
  } catch (error) {
    throw error;
  }
};

// export const giftsApi = async () => {
//   try {
//     const response_data = await giftAxios("/gift/", "get");
//     console.log(response_data);
//     return response_data;
//   } catch (error) {
//     throw error;
//   }
// };

// 여기서 userId는 primary key
export const getReceiverNamesNotUserId = async (userId) => {
  try {
    const response_data = await giftAxios(`/gift/receiver/${userId}`, "get");
    console.log(response_data);
    return response_data;
  } catch (error) {
    throw error;
  }
};

export const postGift = async (gift) => {
  try {
    const response = await giftAxios("/gift", "post", gift);
    return response;
  } catch (error) {
    throw error;
  }
};
