import fetcher from "api/fetcher";

const getDailyProfit = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/profit?storeId=${id}`
    );
    return data.data;
}

const getDailyRevenue = async(id) => {
    const {data} = await fetcher.get(
        `api/v1/statistics/daily/revenue?storeId=${id}`
    );
    return data.data;
}

const statistics = {
    getDailyProfit,
    getDailyRevenue
}

export default statistics;