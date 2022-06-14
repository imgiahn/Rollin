import axios from "axios";

export const getGiftById = async (id) => {
  try {
    return await axios(`/${id}`, "get");
  } catch (error) {
    throw error;
  }
};
