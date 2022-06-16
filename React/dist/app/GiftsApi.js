var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { giftAxios } from "../http/GiftAxios";
export const getGiftById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response_data = yield giftAxios(`/gift/${id}`, "get");
        return response_data;
    }
    catch (error) {
        throw error;
    }
});
export const giftsApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response_data = yield giftAxios("/gift/", "get");
        console.log(response_data);
        return response_data;
    }
    catch (error) {
        throw error;
    }
});
// 여기서 userId는 primary key
export const getReceiverNamesNotUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response_data = yield giftAxios(`/gift/receiver/${userId}`, "get");
        console.log(response_data);
        return response_data;
    }
    catch (error) {
        throw error;
    }
});
export const postGift = (gift) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield giftAxios("/gift", "post", gift);
        return response;
    }
    catch (error) {
        throw error;
    }
});
