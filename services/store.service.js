import { storeApi, userApi } from "api"

const getDailyDiscountStore = async() => {
    try {
        const data = await storeApi.getDailyDiscountStore();
        return data;
    } catch (error) {
        throw error;
    }
}

const getMapStoreList = async() => {
    try {
        const data = await storeApi.getMapStoreList();
        return data;
    } catch (error) {
        throw error;
    }
}

const getStoreDetail = async() => {
    try {
        const data = await storeApi.getStoreDetail();
        return data;
    } catch (error) {
        throw error;
    }
}

const getSurroundStoreList = async(latitude, longtitude) => {
    try {
        const data = await storeApi.getSurroundStoreList(latitude, longtitude);
        return data;
    } catch (error) {
        throw error;
    }
}

const storeService = {
    getDailyDiscountStore,
    getMapStoreList,
    getStoreDetail,
    getSurroundStoreList
}

export default storeService;