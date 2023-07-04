import fetcher from "./fetcher";

const getDailyDiscountStore = async(date) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/discount?day=${date}`
    );

    return data.data;
}

const getMapStoreList = async() => {
    const {data} = await fetcher.get(
        
    );

    return data.data;
}

const getStoreDetail = async() => {
    const {data} = await fetcher.get(
        "api/v1/"
    );

    return data.data;
}

const getSurroundStoreList = async(latitude, longtitude) => {
    const {data} = await fetcher.get(
        `/api/v1/stores/nearby/list?latitude=${latitude}&longitude=${longtitude}&offset=0&limit=100`
    );

    return data.data;
}

const store = {
    getDailyDiscountStore,
    getMapStoreList,
    getStoreDetail,
    getSurroundStoreList
}

export default store;